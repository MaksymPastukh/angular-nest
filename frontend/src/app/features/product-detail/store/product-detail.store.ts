import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs'
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
    const galleryImages = computed((): ProductDetailGalleryInterface[] => {
      const product = store.product()
      if (!product?.images?.length) return []
      return product.images.map((image) => ({ image, alt: product.title }))
    })

    const activeImage = computed(() => galleryImages()[store.activeImageIndex()] ?? null)

    const availableColors = computed(() => {
      return store.product()?.colors ?? []
    })

    const hasMultipleColors = computed(() => availableColors().length > 1)

    return {
      hasProduct: computed(() => !!store.product()),
      productTitle: computed(() => store.product()?.title ?? ''),
      availableSizes: computed(() => store.product()?.sizes ?? []),
      getRaitingCount: computed(() => store.product()?.ratingStats.count ?? 0),
      getRantingAvg: computed(() => store.product()?.ratingStats.avg ?? 5),

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
    const setLoading = (): void => {
      patchState(store, { isLoading: true, error: null, activeImageIndex: 0 })
    }

    const setError = (error: string): void =>
      patchState(store, {
        isLoading: false,
        error,
      })

    const handleHttpError = (error: unknown) => {
      if (!(error instanceof HttpErrorResponse)) {
        setError('Произошла ошибка')
        return
      }

      const apiMessage = (error.error as { message?: unknown })?.message
      const message =
        typeof apiMessage === 'string'
          ? apiMessage
          : (error.message ?? `Request failed with status ${error.status}.`)

      setError(message)
    }

    const setSuccess = (product: ProductDetailInterface) => {
      const defaultColor = product.colors.length === 1 ? product.colors[0] : null
      patchState(store, {
        product,
        isLoading: false,
        error: null,
        selectedSize: null,
        selectedColor: defaultColor,
        quantity: 1,
        activeImageIndex: 0,
      })
    }
    const reset = (): void => {
      patchState(store, initialState)
    }

    return {
      loadProduct: rxMethod<string>(
        pipe(
          tap(setLoading),
          switchMap((id: string) =>
            productDetailService.getProductById(id).pipe(
              tap((product) => setSuccess(product)),
              catchError((error) => {
                handleHttpError(error)
                return EMPTY
              })
            )
          )
        )
      ),
      selectSize(size: string | null) {
        patchState(store, { selectedSize: size })
      },
      selectColor(color: string | null) {
        patchState(store, { selectedColor: color })
      },
      setQuantity(quantity: number) {
        patchState(store, { quantity: Math.max(1, quantity) })
      },
      incQty() {
        patchState(store, { quantity: store.quantity() + 1 })
      },
      decQty() {
        patchState(store, { quantity: Math.max(1, store.quantity() - 1) })
      },
      selectImage(index: number) {
        patchState(store, { activeImageIndex: Math.max(0, index) })
      },
      reset,
    }
  })
)
