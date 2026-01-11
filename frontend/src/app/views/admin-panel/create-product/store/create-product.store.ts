import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ProductService } from '../../../../shared/services/product.service';
import { CreateProductFormData, ColorOption, FormSelectOption } from '../types/create-product.interface';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ProductType } from '../../../types/product.type';

/* ==========================================
   CONSTANTS - Опции для формы
========================================== */

/** Доступные категории */
const CATEGORIES: FormSelectOption[] = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Kids', value: 'Kids' },
];

/** Типы продуктов */
const PRODUCT_TYPES: FormSelectOption[] = [
  { label: 'T-shirts', value: 'T-shirts' },
  { label: 'Printed T-shirts', value: 'Printed T-shirts' },
  { label: 'Hoodies', value: 'Hoodies' },
  { label: 'Shorts', value: 'Shorts' },
  { label: 'Jeans', value: 'Jeans' },
];

/** Стили одежды */
const DRESS_STYLES: FormSelectOption[] = [
  { label: 'Casual', value: 'Casual' },
  { label: 'Formal', value: 'Formal' },
  { label: 'Party', value: 'Party' },
  { label: 'Gym', value: 'Gym' },
];

/** Доступные цвета */
const COLORS: ColorOption[] = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Purple', value: '#800080' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Pink', value: '#FFC0CB' },
  { name: 'Gray', value: '#808080' },
];

/** Доступные размеры */
const SIZES: FormSelectOption[] = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
];

/* ==========================================
   STATE INTERFACE
========================================== */

interface CreateProductState {
  /** Текущие данные формы */
  formData: CreateProductFormData;

  /** Опции для селектов */
  options: {
    categories: FormSelectOption[];
    productTypes: FormSelectOption[];
    dressStyles: FormSelectOption[];
    colors: ColorOption[];
    sizes: FormSelectOption[];
  };

  /** Состояние загрузки */
  isLoading: boolean;

  /** Сообщение об ошибке */
  error: string | null;

  /** Успешное создание */
  success: boolean;
}

/* ==========================================
   INITIAL STATE
========================================== */

const initialFormData: CreateProductFormData = {
  title: '',
  rating: 0,
  brand: '',
  image: '',
  price: 0,
  comment: '',
  category: '',
  productType: '',
  dressStyle: '',
  color: '',
  size: [],
  description: '',
};

const initialState: CreateProductState = {
  formData: initialFormData,
  options: {
    categories: CATEGORIES,
    productTypes: PRODUCT_TYPES,
    dressStyles: DRESS_STYLES,
    colors: COLORS,
    sizes: SIZES,
  },
  isLoading: false,
  error: null,
  success: false,
};

/* ==========================================
   SIGNAL STORE
========================================== */

export const CreateProductStore = signalStore(
  { providedIn: 'root' },

  // STATE
  withState(initialState),

  // COMPUTED - Form Validation
  withComputed((store) => ({
    /** Проверка валидности формы */
    isFormValid: computed(() => {
      const data = store.formData();
      return (
        data.title.trim().length >= 3 &&
        data.rating >= 0 &&
        data.rating <= 5 &&
        data.brand.trim().length > 0 &&
        data.image.trim().length > 0 &&
        data.price > 0 &&
        data.comment.trim().length > 0 &&
        data.category.trim().length > 0 &&
        data.productType.trim().length > 0 &&
        data.dressStyle.trim().length > 0 &&
        data.color.trim().length > 0 &&
        data.size.length > 0 &&
        data.description.trim().length >= 10
      );
    }),
  })),

  // COMPUTED - Submit State
  withComputed((store) => ({
    /** Можно ли отправить форму */
    canSubmit: computed(() => {
      return store.isFormValid() && !store.isLoading();
    }),
  })),

  // METHODS
  withMethods((store, productService = inject(ProductService), messageService = inject(MessageService), router = inject(Router)) => {

    /** Обновление поля формы */
    function updateField<K extends keyof CreateProductFormData>(
      field: K,
      value: CreateProductFormData[K]
    ) {
      patchState(store, (state) => ({
        formData: {
          ...state.formData,
          [field]: value,
        },
      }));
    }

    /** Сброс формы */
    function resetForm() {
      patchState(store, {
        formData: initialFormData,
        error: null,
        success: false,
        isLoading: false,
      });
    }

    /** Создание продукта через API */
    const createProduct = rxMethod<CreateProductFormData>((source$) =>
      source$.pipe(
        tap(() => {
          console.log('📤 CreateProductStore: Отправка данных на сервер...');
          patchState(store, { isLoading: true, error: null, success: false });
        }),
        switchMap((formData:CreateProductFormData) =>
          productService.createProduct(formData).pipe(
            tap((response: ProductType) => {
              console.log('✅ CreateProductStore: Продукт успешно создан:', response);

              patchState(store, {
                isLoading: false,
                success: true,
                error: null,
              });

              // Показываем уведомление об успехе
              messageService.add({
                severity: 'success',
                summary: 'Успех!',
                detail: `Продукт "${response.title}" успешно создан`,
                life: 3000,
              });

              // Сбрасываем форму
              resetForm();

              // Опционально: перенаправляем на страницу продуктов
              setTimeout(() => {
                router.navigate(['/products']).catch(console.error);
              }, 2000);
            }),
            catchError((error) => {
              console.error('❌ CreateProductStore: Ошибка создания продукта:', error);

              const errorMessage = error?.error?.message || 'Не удалось создать продукт';

              patchState(store, {
                isLoading: false,
                error: errorMessage,
                success: false,
              });

              // Показываем уведомление об ошибке
              messageService.add({
                severity: 'error',
                summary: 'Ошибка!',
                detail: errorMessage,
                life: 5000,
              });

              return of(null);
            })
          )
        )
      )
    );

    /** Отправка формы */
    function submitForm() {
      if (!store.isFormValid()) {
        messageService.add({
          severity: 'warn',
          summary: 'Внимание!',
          detail: 'Пожалуйста, заполните все обязательные поля',
          life: 3000,
        });
        return;
      }

      createProduct(store.formData());
    }

    return {
      updateField,
      resetForm,
      submitForm,
      createProduct,
    };
  })
);

