import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ProductType } from '../../views/types/product.type';

/* =======================
   STATE
======================= */

interface ProductDetailState {
  product: ProductType | null;
  isLoading: boolean;
  error: string | null;
}

/* =======================
   INITIAL STATE
======================= */

const initialState: ProductDetailState = {
  product: null,
  isLoading: false,
  error: null,
};

/* =======================
   STORE
======================= */

export const ProductDetailStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  /* =======================
     METHODS
  ======================= */

  withMethods((store, productService = inject(ProductService)) => {
    /**
     * Реактивный метод загрузки продукта по ID
     * Использует rxMethod для автоматического управления subscriptions
     */
    const loadProduct = rxMethod<string>(
      pipe(
        tap(() => {
          patchState(store, { isLoading: true, error: null });
        }),
        switchMap((id) => {
          console.log('🔍 ProductDetailStore: Loading product:', id);

          return productService.getProductById(id).pipe(
            tap((product) => {
              console.log('✅ ProductDetailStore: Product loaded:', product);
              patchState(store, {
                product,
                isLoading: false,
              });
            }),
            catchError((error) => {
              console.error('❌ ProductDetailStore: Error:', error);
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

    /**
     * Сбрасывает состояние стора
     */
    function reset() {
      patchState(store, initialState);
    }

    return {
      loadProduct,
      reset,
    };
  }),

  /* =======================
     COMPUTED
  ======================= */

  withComputed((store) => ({
    /**
     * Проверяет, есть ли продукт в сторе
     */
    hasProduct: computed(() => store.product() !== null),

    /**
     * Возвращает название продукта (или пустую строку)
     */
    productTitle: computed(() => store.product()?.title || ''),
    product: computed(() => store.product() || null),
  })),

  /* =======================
     HOOKS
  ======================= */

  withHooks({
    onDestroy(store) {
      // Очищаем состояние при уничтожении стора
      console.log('🧹 ProductDetailStore: Cleaning up...');
      store.reset();
    },
  })


);

