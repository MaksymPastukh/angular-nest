import { Component, computed, effect, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Breadcrumb } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { ProductDetailStore } from '../../shared/store/product-detail.store';
import { ImageUrlPipe } from '../../shared/pipes/image-url.pipe';
import { RatingComponent } from '../../shared/components/rating/rating';

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
 * - Автоматическую перезагрузку при изменении ID в URL
 * - Выбор размера и цвета
 * - Добавление в корзину
 */
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink, RatingComponent, Breadcrumb],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  standalone: true,
})
export class ProductDetail {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(ProductDetailStore);
  private readonly imageUrlPipe = new ImageUrlPipe();

  /**
   * Signal для отслеживания изменений ID продукта в URL
   */
  private readonly productId = toSignal(
    this.route.params.pipe(map(params => params['id']))
  );

  /**
   * Индекс выбранного изображения (для главного фото)
   */
  selectedImageIndex = 0;

  /**
   * Флаг для предотвращения бесконечного цикла ошибок загрузки изображений
   */
  private imageErrorHandled = false;

  /**
   * Выбранный размер товара
   */
  readonly selectedSize = signal<string | null>(null);

  /**
   * Выбранный цвет товара (пока один цвет, но можно расширить)
   */
  readonly selectedColor = signal<string | null>(null);

  /**
   * Computed signal для проверки возможности добавления в корзину
   */
  readonly canAddToCart = computed(() => {
    const product = this.store.product();
    if (!product) return false;

    // Проверяем что выбран размер (цвет выбирается автоматически)
    return this.selectedSize() !== null;
  });

  /**
   * Effect для автоматической загрузки продукта при изменении ID
   */
  constructor() {
    effect(() => {
      const id = this.productId();
      if (id) {
        console.log('🔄 Loading product with ID:', id);
        this.store.loadProduct(id);
        // Сбрасываем состояние при загрузке нового продукта
        this.selectedImageIndex = 0;
        this.imageErrorHandled = false;
        this.selectedSize.set(null);
        this.selectedColor.set(null);
      }
    });

    // Автоматически выбираем цвет при загрузке продукта
    effect(() => {
      const product = this.store.product();
      if (product && product.color && !this.selectedColor()) {
        this.selectedColor.set(product.color);
      }
    });
  }

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

  /**
   * Breadcrumb items для навигации
   */
  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    const product = this.store.product();
    if (!product) return [];

    const items: MenuItem[] = [
      {
        label: 'Shop',
        routerLink: '/products',
      }
    ];

    // Добавляем категорию если есть
    if (product.category) {
      items.push({
        label: product.category,
        routerLink: '/products',
        queryParams: { category: product.category }
      });
    }

    // Добавляем тип продукта если есть
    if (product.productType) {
      items.push({
        label: product.productType,
        routerLink: '/products',
        queryParams: {
          category: product.category,
          productType: product.productType
        }
      });
    }

    return items;
  });

  /**
   * Home item для breadcrumb
   */
  readonly breadcrumbHome: MenuItem = {
    icon: 'pi pi-home',
    routerLink: '/'
  };

  /**
   * Выбрать конкретное изображение
   */
  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  /**
   * Выбрать размер товара
   */
  selectSize(size: string): void {
    this.selectedSize.set(size);
    console.log('📏 Selected size:', size);
  }

  /**
   * Выбрать цвет товара
   */
  selectColor(color: string): void {
    this.selectedColor.set(color);
    console.log('🎨 Selected color:', color);
  }

  /**
   * Добавить товар в корзину
   */
  addToCart(): void {
    const product = this.store.product();
    const size = this.selectedSize();
    const color = this.selectedColor();

    // Валидация
    if (!product) {
      console.error('❌ Product not loaded');
      return;
    }

    if (!size) {
      alert('Please select a size');
      return;
    }

    if (!color) {
      alert('Please select a color');
      return;
    }

    // Формируем данные для корзины
    const cartItem = {
      productId: product.id,
      title: product.title,
      price: product.price,
      size,
      color,
      image: product.image,
      quantity: 1,
    };

    console.log('🛒 Adding to cart:', cartItem);

    // TODO: Здесь будет логика добавления в CartStore
    // this.cartStore.addItem(cartItem);

    // Временное уведомление
    alert(`✅ Added to cart!\n\nProduct: ${product.title}\nSize: ${size}\nColor: ${color}\nPrice: $${product.price}`);

    // Опционально: сброс выбора после добавления
    // this.selectedSize.set(null);
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
