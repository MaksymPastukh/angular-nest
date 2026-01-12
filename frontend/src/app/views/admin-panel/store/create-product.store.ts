import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ProductService } from '../../../shared/services/product.service';
import { CreateProductFormData } from '../types/create-product.interface';
import { MessageService } from 'primeng/api';
import { ProductType } from '../../types/product.type';
import {
  CATEGORIES,
  COLORS,
  DRESS_STYLES,
  PRODUCT_TYPES,
  SIZES,
} from '../types/create-product.constants';
import {CreateProductStoreState} from '../types/create-product-state.interface';

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
};

export const CreateProductStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store, productService = inject(ProductService), messageService = inject(MessageService)) => {
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
          });
        }),
        switchMap((file: File) =>
          productService.uploadImage(file).pipe(
            tap((response: { imagePath: string }) => {
              patchState(store, {
                uploadedImagePath: response.imagePath,
                isUploadingImage: false,
              });

              messageService.add({
                severity: 'success',
                summary: 'Успех',
                detail: 'Изображение загружено',
                life: 2000,
              });
            }),
            catchError((error) => {
              const errorMessage = error?.error?.message || 'Не удалось загрузить изображение';

              patchState(store, {
                isUploadingImage: false,
                error: errorMessage,
                uploadedImagePath: null,
              });

              messageService.add({
                severity: 'error',
                summary: 'Ошибка',
                detail: errorMessage,
                life: 3000,
              });

              return of(null);
            })
          )
        )
      )
    );

    /**
     * Создание продукта
     */
    const createProduct = rxMethod<CreateProductFormData>((source$) =>
      source$.pipe(
        tap(() => {
          patchState(store, {
            isLoading: true,
            error: null,
            success: false
          });
        }),
        switchMap((formData: CreateProductFormData) =>
          productService.createProduct(formData).pipe(
            tap((response: ProductType) => {
              patchState(store, {
                isLoading: false,
                success: true,
                error: null,
              });

              messageService.add({
                severity: 'success',
                summary: 'Успех!',
                detail: `Продукт "${response.title}" создан`,
                life: 3000,
              });
            }),
            catchError((error) => {
              const errorMessage = error?.error?.message || 'Не удалось создать продукт';

              patchState(store, {
                isLoading: false,
                error: errorMessage,
                success: false,
              });

              messageService.add({
                severity: 'error',
                summary: 'Ошибка!',
                detail: errorMessage,
                life: 3000,
              });

              return of(null);
            })
          )
        )
      )
    );

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
      });
    }

    return {
      uploadImage,
      createProduct,
      resetState,
    };
  })
);

