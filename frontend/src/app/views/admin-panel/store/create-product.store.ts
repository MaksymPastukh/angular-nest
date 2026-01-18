import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { inject } from '@angular/core'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, of, switchMap, tap } from 'rxjs'
import { ProductService } from '../../../shared/services/product.service'
import { CreateProductFormData } from '../types/create-product.interface'
import { ProductType } from '../../types/product.type'
import {
  CATEGORIES,
  COLORS,
  DRESS_STYLES,
  PRODUCT_TYPES,
  SIZES,
} from '../types/create-product.constants'
import { CreateProductStoreState } from '../types/create-product-state.interface'

const initialState: CreateProductStoreState = {
  options: {
    categories: CATEGORIES,
    productTypes: PRODUCT_TYPES,
    dressStyles: DRESS_STYLES,
    colors: COLORS,
    sizes: SIZES,
  },
  uploadedImagePath: null,
  isUploadingImage: false,
  isLoading: false,
  error: null,
  success: false,
  event: null,
}

export const CreateProductStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store, productService = inject(ProductService)) => {
    /**
     * Загрузка изображения на сервер
     */
    const uploadImage = rxMethod<File>((source$) =>
      source$.pipe(
        tap(() => {
          patchState(store, {
            isUploadingImage: true,
            error: null,
            uploadedImagePath: null,
            event: null,
          })
        }),
        switchMap((file: File) =>
          productService.uploadImage(file).pipe(
            tap((response: { imagePath: string }) => {
              patchState(store, {
                uploadedImagePath: response.imagePath,
                isUploadingImage: false,
                event: {
                  type: 'imageUploaded',
                },
              })
            }),
            catchError((error) => {
              const errorMessage = error?.error?.message || 'Не удалось загрузить изображение'

              patchState(store, {
                isUploadingImage: false,
                error: errorMessage,
                uploadedImagePath: null,
                event: {
                  type: 'imageUploadError',
                  message: errorMessage,
                },
              })

              return of(null)
            })
          )
        )
      )
    )

    /**
     * Создание продукта
     */
    const createProduct = rxMethod<CreateProductFormData>((source$) =>
      source$.pipe(
        tap(() => {
          patchState(store, {
            isLoading: true,
            error: null,
            success: false,
            event: null,
          })
        }),
        switchMap((formData: CreateProductFormData) =>
          productService.createProduct(formData).pipe(
            tap((response: ProductType) => {
              patchState(store, {
                isLoading: false,
                success: true,
                error: null,
                event: {
                  type: 'productCreated',
                  productTitle: response.title,
                },
              })
            }),
            catchError((error) => {
              const errorMessage = error?.error?.message || 'Не удалось создать продукт'

              patchState(store, {
                isLoading: false,
                error: errorMessage,
                success: false,
                event: {
                  type: 'productCreateError',
                  message: errorMessage,
                },
              })

              return of(null)
            })
          )
        )
      )
    )

    /**
     * Сброс состояния (только после успешного создания)
     */
    function resetState() {
      patchState(store, {
        uploadedImagePath: null,
        error: null,
        success: false,
        isLoading: false,
        isUploadingImage: false,
        event: null,
      })
    }

    /**
     * Очистка события после обработки
     */
    function clearEvent() {
      patchState(store, { event: null })
    }

    return {
      uploadImage,
      createProduct,
      resetState,
      clearEvent,
    }
  })
)
