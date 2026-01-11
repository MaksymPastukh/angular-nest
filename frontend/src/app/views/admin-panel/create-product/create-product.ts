import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG Imports
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { Toast } from 'primeng/toast';
import { MessageService, PrimeTemplate } from 'primeng/api';
import { Divider } from 'primeng/divider';
import { Rating } from 'primeng/rating';

// Store
import { CreateProductStore } from './store/create-product.store';

/**
 * Компонент создания нового продукта
 *
 * Использует:
 * - Angular 21 Signal Forms
 * - NgRx Signal Store для управления состоянием
 * - PrimeNG для UI компонентов
 *
 * Функционал:
 * - Создание продукта с валидацией
 * - Загрузка изображений
 * - Выбор категорий, размеров, цветов
 * - Автоматическая синхронизация с store
 */
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG Components
    InputText,
    InputNumber,
    Textarea,
    Select,
    MultiSelect,
    Button,
    Card,
    FileUpload,
    Toast,
    Divider,
    Rating,
    PrimeTemplate,
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
  providers: [MessageService],
})
export class CreateProduct {
  /** Инжектируем store для управления состоянием формы */
  readonly store = inject(CreateProductStore);

  /** Инжектируем MessageService для уведомлений (уже в providers) */
  private readonly messageService = inject(MessageService);

  /**
   * Обработчик изменения поля формы
   * @param field - имя поля
   * @param value - новое значение
   */
  onFieldChange(field: string, value: any) {
    this.store.updateField(field as any, value);
  }

  /**
   * Обработчик загрузки изображения
   * @param event - событие загрузки файла
   */
  onImageUpload(event: any) {
    const file = event.files[0];

    if (!file) return;

    // В реальном приложении здесь должна быть загрузка на сервер
    // Сейчас просто сохраняем имя файла
    const imagePath = `/images/products/${file.name}`;
    this.store.updateField('image', imagePath);

    this.messageService.add({
      severity: 'info',
      summary: 'Изображение загружено',
      detail: `Файл ${file.name} готов к отправке`,
      life: 3000,
    });
  }

  /**
   * Обработчик отправки формы
   */
  onSubmit() {
    this.store.submitForm();
  }

  /**
   * Обработчик сброса формы
   */
  onReset() {
    this.store.resetForm();
    this.messageService.add({
      severity: 'info',
      summary: 'Форма очищена',
      detail: 'Все поля формы сброшены',
      life: 2000,
    });
  }
}
