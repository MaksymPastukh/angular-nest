import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  Field,
  form,
  minLength,
  required,
  submit,
} from '@angular/forms/signals';

// PrimeNG Imports
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { Button } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { Toast } from 'primeng/toast';
import { MessageService, PrimeTemplate } from 'primeng/api';
import { Rating } from 'primeng/rating';

// Store
import { CreateProductStore } from '../store/create-product.store';
import { CreateProductFormData } from '../types/create-product.interface';

/**
 * Компонент создания нового продукта
 *
 * Архитектура:
 * - Signal Forms (@angular/forms/signals) для управления формой
 * - Store только для API-операций (загрузка изображения, создание продукта)
 * - Нет дублирования данных между формой и store
 */
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Field,
    InputText,
    InputNumber,
    Textarea,
    Select,
    MultiSelect,
    Button,
    FileUpload,
    Toast,
    Rating,
    PrimeTemplate,
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProduct {
  protected readonly store = inject(CreateProductStore);
  private readonly messageService = inject(MessageService);

  /** Модель формы (единственный источник правды для данных формы) */
  protected readonly model = signal<CreateProductFormData>({
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
  });

  /** Signal Form с валидацией */
  protected readonly productForm = form(this.model, (schema) => {
    required(schema.title, { message: 'Это поле обязательно' });
    minLength(schema.title, 3, { message: 'Минимум 3 символа' });

    required(schema.brand, { message: 'Это поле обязательно' });
    required(schema.image, { message: 'Это поле обязательно' });
    required(schema.price, { message: 'Это поле обязательно' });
    required(schema.comment, { message: 'Это поле обязательно' });
    required(schema.category, { message: 'Это поле обязательно' });
    required(schema.productType, { message: 'Это поле обязательно' });
    required(schema.dressStyle, { message: 'Это поле обязательно' });
    required(schema.color, { message: 'Это поле обязательно' });
    required(schema.size, { message: 'Это поле обязательно' });

    required(schema.description, { message: 'Это поле обязательно' });
    minLength(schema.description, 10, { message: 'Минимум 10 символов' });
  });

  constructor() {
    // Effect: Синхронизация загруженного изображения → модель формы
    effect(() => {
      const uploadedPath = this.store.uploadedImagePath();

      if (uploadedPath && this.model().image !== uploadedPath) {
        this.model.update(m => ({ ...m, image: uploadedPath }));
      }
    });
  }

  /**
   * Обработчик загрузки изображения
   */
  protected onImageUpload(event: any): void {
    const file = event.files[0];
    if (!file) return;

    this.store.uploadImage(file);
  }

  /**
   * Обработчик отправки формы
   */
  protected onSubmit(event: Event): void {
    event.preventDefault();

    submit(this.productForm, async () => {
      // Получаем данные из модели формы
      const formData = this.model();

      // Отправляем через store
      this.store.createProduct(formData);
    }).catch((error) => {
      console.error('❌ Form submission error:', error);
    });
  }

  /**
   * Обработчик сброса формы
   */
  protected onReset(): void {
    // Сбрасываем модель формы
    this.model.set({
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
    });

    // Сбрасываем состояние store
    this.store.resetState();

    this.messageService.add({
      severity: 'info',
      summary: 'Форма очищена',
      life: 2000,
    });
  }
}
