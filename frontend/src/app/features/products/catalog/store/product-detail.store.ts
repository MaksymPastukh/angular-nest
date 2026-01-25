import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, Observable, pipe, switchMap, tap } from 'rxjs'
import { ProductType } from '../../detail/types/product.interface'
import { ProductService } from '../services/product.service'
import { ProductDetailGalleryInterface } from '../types/product-detail-gallery.interface'
import { ProductDetailState } from '../types/product-detail-state.interface'

const initialState: ProductDetailState = {
  product: null,
  isLoading: false,
  error: null,
}

export const ProductDetailStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, productService = inject(ProductService)) => {
    const setLoading = (isLoading: boolean) =>
      patchState(store, { isLoading, error: isLoading ? null : store.error() })

    const setError = (error: string) =>
      patchState(store, {
        isLoading: false,
        error,
      })

    const handleHttpError = (error: HttpErrorResponse) => {
      const message =
        (error.error as { message?: string })?.message ?? error.message ?? 'Произошла ошибка'

      setError(String(message))
    }

    const reset = (): void => {
      patchState(store, initialState)
    }

    return {
      loadProduct: rxMethod<string>(
        pipe(
          tap(() => setLoading(true)),
          switchMap((id: string) => {
            return productService.getProductById(id).pipe(
              tap((product: ProductType) => {
                patchState(store, {
                  product,
                })
                setLoading(false)
              }),
              catchError((error: HttpErrorResponse): Observable<never> => {
                handleHttpError(error)
                return EMPTY
              })
            )
          })
        )
      ),
      reset,
    }
  }),

  withComputed((store) => {
    const galleryImagesCache = new WeakMap<ProductType, { image: string; alt: string }[]>()

    return {
      hasProduct: computed((): boolean => store.product() !== null),
      productTitle: computed((): string => store.product()?.title ?? ''),
      galleryImages: computed((): ProductDetailGalleryInterface[] => {
        const product: ProductType | null = store.product()
        if (!product) return []

        // Если массив уже есть для этого продукта — возвращаем его
        if (galleryImagesCache.has(product)) {
          return galleryImagesCache.get(product) ?? []
        }

        // Создаём массив изображений
        const images: ProductDetailGalleryInterface[] = Array.from({ length: 3 }, () => ({
          image: product.image,
          alt: product.title,
        }))

        // Сохраняем в cache
        galleryImagesCache.set(product, images)

        return images
      }),
    }
  })
)
