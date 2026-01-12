import {computed, inject} from '@angular/core';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap, catchError, of, Observable} from 'rxjs';
import {ProductService} from '../services/product.service';
import {ProductType} from '../../views/types/product.type';
import {ProductDetailState} from './types/product-detail-state.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductDetailGalleryInterface} from './types/product-detail-gallery.interface';

const initialState: ProductDetailState = {
  product: null,
  isLoading: false,
  error: null,
};

export const ProductDetailStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store, productService = inject(ProductService)) => {
    const loadProduct = rxMethod<string>(
      pipe(
        tap(() => {
          patchState(store, {isLoading: true, error: null});
        }),
        switchMap((id) => {
          return productService.getProductById(id).pipe(
            tap((product: ProductType) => {
              patchState(store, {
                product,
                isLoading: false,
              });
            }),
            catchError((error:HttpErrorResponse): Observable<null> => {
              patchState(store, {
                product: null,
                isLoading: false,
                error: error?.error?.message || 'Failed to load product',
              });
              return of(null);
            })
          );
        })
      )
    );

    const reset = (): void => {
      patchState(store, initialState);
    }

    return {
      loadProduct,
      reset,
    };
  }),

  withComputed((store) => {
    const galleryImagesCache = new WeakMap<ProductType, { image: string; alt: string }[]>();

    return {
      hasProduct: computed((): boolean => store.product() !== null),
      productTitle: computed((): string => store.product()?.title || ''),
      galleryImages: computed((): ProductDetailGalleryInterface[] => {
        const product: ProductType | null = store.product();
        if (!product) return [];

        // Если массив уже есть для этого продукта — возвращаем его
        if (galleryImagesCache.has(product)) {
          return galleryImagesCache.get(product)!;
        }

        // Создаём массив изображений
        const images: ProductDetailGalleryInterface[] = Array.from({ length: 3 }, () => ({
          image: product.image,
          alt: product.title,
        }));

        // Сохраняем в cache
        galleryImagesCache.set(product, images);

        return images;
      }),
    }
  })
);

