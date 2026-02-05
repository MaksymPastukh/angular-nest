import { HttpErrorResponse } from '@angular/common/http'
import { inject } from '@angular/core'
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, of, switchMap, tap } from 'rxjs'
import { AdminShopService } from '../data-access/admin-shop.service'
import {
  CATEGORIES,
  COLORS,
  DRESS_STYLES,
  PRODUCT_TYPES,
  SIZES,
} from '../domain/constants/create-product.canstants'
import { CreateProductFormDataInterface } from '../domain/interfaces/create-product-formData.interface'
import { CreateProductResponseInterface } from '../domain/interfaces/create-product-response.interface'
import { CreateProductStoreStateInterface } from '../domain/interfaces/create-product-storeState.interface'

const initialState: CreateProductStoreStateInterface = {
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

  withMethods((store, productService = inject(AdminShopService)) => {
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
            catchError((error: HttpErrorResponse) => {
              const errorMessage =
                (error?.error as { message?: string })?.message ??
                'Не удалось загрузить изображение'

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

    const createProduct = rxMethod<CreateProductFormDataInterface>((source$) =>
      source$.pipe(
        tap(() => {
          patchState(store, {
            isLoading: true,
            error: null,
            success: false,
            event: null,
          })
        }),
        switchMap((formData: CreateProductFormDataInterface) =>
          productService.createProduct(formData).pipe(
            tap((response: CreateProductResponseInterface) => {
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
            catchError((error: HttpErrorResponse) => {
              const errorMessage =
                (error?.error as { message?: string })?.message ?? 'Не удалось создать продукт'

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
