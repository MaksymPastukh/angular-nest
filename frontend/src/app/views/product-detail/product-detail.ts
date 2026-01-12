import { Component, computed, HostListener, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailStore } from '../../shared/store/product-detail.store';
import { ImageUrlPipe } from '../../shared/pipes/image-url.pipe';

/**
 * Компонент страницы детального просмотра продукта
 *
 * URL: /product/:id
 * Пример: /product/12345
 *
 * Получает ID продукта из route params и загружает его данные
 *
 * Поддерживает:
 * - Клик по миниатюре
 * - Кнопки навигации prev/next
 * - Клавиши стрелок ← → для переключения
 */
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink, ImageUrlPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  standalone: true,
})
export class ProductDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(ProductDetailStore);
  private readonly imageUrlPipe = new ImageUrlPipe();

  /**
   * Индекс выбранного изображения (для главного фото)
   */
  selectedImageIndex = 0;

  /**
   * Флаг для предотвращения бесконечного цикла ошибок загрузки изображений
   */
  private imageErrorHandled = false;

  /**
   * Создаем массив изображений для галереи
   * Пока используем одно изображение 3 раза (можно расширить в будущем)
   */
  readonly galleryImages = computed(() => {
    const product = this.store.product();
    if (!product) return [];

    // Создаем массив из 3 одинаковых изображений
    // В будущем можно добавить поле images[] в модель продукта
    const imageUrl = this.imageUrlPipe.transform(product.image);
    return Array(3).fill({
      url: imageUrl,
      alt: product.title
    });
  });

  ngOnInit(): void {
    // Получаем ID из route params
    const productId = this.route.snapshot.params['id'];

    // Загружаем продукт
    this.store.loadProduct(productId);
  }

  /**
   * Выбрать конкретное изображение
   */
  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  /**
   * Переключить на предыдущее изображение (циклически)
   */
  previousImage(): void {
    const maxIndex = this.galleryImages().length - 1;
    // Если первое фото - переходим к последнему
    this.selectedImageIndex = this.selectedImageIndex === 0
      ? maxIndex
      : this.selectedImageIndex - 1;
  }

  /**
   * Переключить на следующее изображение (циклически)
   */
  nextImage(): void {
    const maxIndex = this.galleryImages().length - 1;
    // Если последнее фото - переходим к первому
    this.selectedImageIndex = this.selectedImageIndex === maxIndex
      ? 0
      : this.selectedImageIndex + 1;
  }

  /**
   * Обработка нажатия клавиш стрелок для навигации по галерее
   */
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.previousImage();
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
      event.preventDefault();
    }
  }

  /**
   * Обработчик ошибки загрузки изображения
   * Заменяет неработающее изображение на серый placeholder
   * Использует data URI для предотвращения дополнительных запросов
   */
  onImageError(event: Event): void {
    if (this.imageErrorHandled) return; // Предотвращаем бесконечный цикл

    const img = event.target as HTMLImageElement;
    // Серый placeholder как data URI (1x1 серый квадрат SVG)
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    this.imageErrorHandled = true;
  }
}
