import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, switchMap, tap } from 'rxjs'
import { ReviewsStore } from '../../reviews/store/reviews.store'
import { ProductsDetailService } from '../data-access/product-detail.service'
import { ProductDetailGalleryInterface } from '../domain/interfaces/product-detail-gallery.interface'
import { ProductDetailStateInterface } from '../domain/interfaces/product-detail-state.interface'
import { ProductDetailInterface } from '../domain/interfaces/product-detail.interface'

const initialState: ProductDetailStateInterface = {
  product: null,
  isLoading: false,
  error: null,
  selectedSize: null,
  selectedColor: null,
  quantity: 1,
  activeImageIndex: 0,
}

export const ProductDetailStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed((store) => {
    const reviewsStore = inject(ReviewsStore)

    const emptyDistribution = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
    } as const

    const ratingStats = computed(() => {
      const product = store.product()
      if (!product) return null

      const base = product.ratingStats ?? {
        avg: product.rating ?? 0,
        count: 0,
        distribution: emptyDistribution,
        updatedAt: null,
      }

      const summary = reviewsStore.summary()
      const reviewsProductId = reviewsStore.productId()

      if (summary && reviewsProductId === product.id) {
        return {
          ...base,
          avg: summary.avg,
          count: summary.count,
          distribution: summary.distribution ?? emptyDistribution,
          updatedAt: null,
        }
      }

      return {
        ...base,
        distribution: base.distribution ?? emptyDistribution,
      }
    })

    const galleryImages = computed((): ProductDetailGalleryInterface[] => {
      const product = store.product()
      if (!product?.images?.length) return []
      return product.images.map((image) => ({ image, alt: product.title }))
    })

    const activeImage = computed(() => galleryImages()[store.activeImageIndex()] ?? null)

    const availableColors = computed(() => store.product()?.colors ?? [])
    const hasMultipleColors = computed(() => availableColors().length > 1)

    return {
      hasProduct: computed(() => !!store.product()),
      productTitle: computed(() => store.product()?.title ?? ''),
      availableSizes: computed(() => store.product()?.sizes ?? []),

      ratingAvg: computed(() => ratingStats()?.avg ?? 0),
      ratingCount: computed(() => ratingStats()?.count ?? 0),
      ratingDistribution: computed(() => ratingStats()?.distribution ?? emptyDistribution),

      canAddToCart: computed(() => {
        const sizes = store.product()?.sizes ?? []
        const needSize = sizes.length > 0
        const needColor = hasMultipleColors()
        return (!needSize || !!store.selectedSize()) && (!needColor || !!store.selectedColor())
      }),

      galleryImages,
      activeImage,
      availableColors,
      hasMultipleColors,
    }
  }),

  withMethods((store, productDetailService = inject(ProductsDetailService)) => {
    const setPending = (): void => {
      patchState(store, { isLoading: true, error: null, activeImageIndex: 0 })
    }

    const stop = (): void => {
      patchState(store, { isLoading: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: message })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return 'Произошла ошибка'

      const apiMessage: unknown = (error.error as { message?: unknown })?.message
      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const setSuccess = (product: ProductDetailInterface): void => {
      const defaultColor = product.colors.length === 1 ? product.colors[0] : null
      patchState(store, {
        product,
        error: null,
        selectedSize: null,
        selectedColor: defaultColor,
        quantity: 1,
        activeImageIndex: 0,
      })
    }

    const loadProduct: RxMethod<string> = rxMethod<string>(
      pipe(
        tap(() => setPending()),
        switchMap((id: string) =>
          productDetailService.getProductById(id).pipe(
            tapResponse({
              next: (product) => setSuccess(product),
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop(),
            })
          )
        )
      )
    )

    const selectSize = (size: string | null): void => patchState(store, { selectedSize: size })
    const selectColor = (color: string | null): void => patchState(store, { selectedColor: color })

    const setQuantity = (quantity: number): void =>
      patchState(store, { quantity: Math.max(1, quantity) })
    const incQty = (): void => patchState(store, { quantity: store.quantity() + 1 })
    const decQty = (): void => patchState(store, { quantity: Math.max(1, store.quantity() - 1) })

    const selectImage = (index: number): void =>
      patchState(store, { activeImageIndex: Math.max(0, index) })

    const reset = (): void => patchState(store, initialState)

    return {
      loadProduct,
      selectSize,
      selectColor,
      setQuantity,
      incQty,
      decQty,
      selectImage,
      reset,
    }
  })
)
