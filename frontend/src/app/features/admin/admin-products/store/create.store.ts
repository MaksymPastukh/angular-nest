import { HttpErrorResponse } from '@angular/common/http'
import { inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, switchMap, tap } from 'rxjs'

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
import { UploadEventType } from '../domain/types/upload-event.type'
import { CreateEventType } from '../domain/types/create-event.type'

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
    const setUploadPending = (): void => {
      patchState(store, {
        isUploadingImage: true,
        error: null,
        uploadedImagePath: null,
        event: null,
      })
    }

    const stopUpload = (): void => {
      patchState(store, { isUploadingImage: false })
    }

    const setCreatePending = (): void => {
      patchState(store, {
        isLoading: true,
        error: null,
        success: false,
        event: null,
      })
    }

    const stopCreate = (): void => {
      patchState(store, { isLoading: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: message })
    }

    const getErrorMessage = (error: unknown, fallback: string): string => {
      if (!(error instanceof HttpErrorResponse)) return fallback
      const apiMessage: unknown = (error.error as { message?: unknown })?.message
      if (typeof apiMessage === 'string' && apiMessage.length > 0) return apiMessage
      if (Array.isArray(apiMessage) && apiMessage.length > 0) return apiMessage.join(' ')
      return error.message ?? fallback
    }

    const uploadImage: RxMethod<File> = rxMethod<File>(
      pipe(
        tap(() => setUploadPending()),
        switchMap((file: File) =>
          productService.uploadImage(file).pipe(
            tapResponse({
              next: (response: { imagePath: string }) => {
                patchState(store, {
                  uploadedImagePath: response.imagePath,
                  event: { type: 'imageUploaded' } satisfies UploadEventType,
                })
              },
              error: (e) => {
                const message = getErrorMessage(e, 'Не удалось загрузить изображение')
                // keep domain-specific event
                patchState(store, {
                  uploadedImagePath: null,
                  event: { type: 'imageUploadError', message } satisfies UploadEventType,
                })
                setFailure(message)
              },
              finalize: () => stopUpload(),
            })
          )
        )
      )
    )

    const createProduct: RxMethod<CreateProductFormDataInterface> =
      rxMethod<CreateProductFormDataInterface>(
        pipe(
          tap(() => setCreatePending()),
          switchMap((formData: CreateProductFormDataInterface) =>
            productService.createProduct(formData).pipe(
              tapResponse({
                next: (response: CreateProductResponseInterface) => {
                  patchState(store, {
                    success: true,
                    event: {
                      type: 'productCreated',
                      productTitle: response.title,
                    } satisfies CreateEventType,
                  })
                },
                error: (e) => {
                  const message = getErrorMessage(e, 'Не удалось создать продукт')
                  patchState(store, {
                    success: false,
                    event: { type: 'productCreateError', message } satisfies CreateEventType,
                  })
                  setFailure(message)
                },
                finalize: () => stopCreate(),
              })
            )
          )
        )
      )

    const resetState = (): void => {
      patchState(store, {
        uploadedImagePath: null,
        error: null,
        success: false,
        isLoading: false,
        isUploadingImage: false,
        event: null,
      })
    }

    const clearEvent = (): void => {
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
