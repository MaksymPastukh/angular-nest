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
import {ProductType} from '../types/product.type';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink, RatingComponent, Breadcrumb, ImageUrlPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  standalone: true,
})
export class ProductDetail {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(ProductDetailStore);

  readonly selectedImageIndex = signal(0)
  private imageErrorHandled = signal(false);
  readonly selectedSize = signal<string | null>(null);
  readonly selectedColor = signal<string | null>(null);

  readonly canAddToCart = computed(() => {
    const product = this.store.product();
    if (!product) return false;

    return this.selectedSize() !== null && this.selectedColor() !== null;
  });

  private readonly productId = toSignal(
    this.route.params.pipe(map(params => params['id']))
  );

  readonly galleryImages = computed(() => this.store.galleryImages());


  constructor() {
    effect(() => {
      const id = this.productId();
      if (id) {
        this.store.loadProduct(id);
        this.resetState();
      }
    });
  }

  private resetState(): void {
    this.selectedImageIndex.set(0);
    this.imageErrorHandled.set(false);
    this.selectedSize.set(null);
    this.selectedColor.set(null);
  }

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    const product: ProductType | null = this.store.product();
    if (!product) return [];

    const items: MenuItem[] = [
      {
        label: 'Shop',
        routerLink: '/products',
      }
    ];

    if (product.category) {
      items.push({
        label: product.category,
        routerLink: '/products',
        queryParams: { category: product.category }
      });
    }

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

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  selectSize(size: string): void {
    this.selectedSize.set(size);
  }

  selectColor(color: string): void {
    this.selectedColor.set(color);
  }

  addToCart(): void {
    const product = this.store.product();
    const size = this.selectedSize();
    const color = this.selectedColor();

    // Кнопка disabled, но дополнительная проверка не помешает
    if (!product || !size || !color) return;

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

    // TODO: Здесь будет логика добавления в CartStore
    // this.cartStore.addItem(cartItem);

    // Временное уведомление
    alert(`✅ Added to cart!\n\nProduct: ${product.title}\nSize: ${size}\nColor: ${color}\nPrice: $${product.price}`);
  }

  previousImage(): void {
    const images = this.store.galleryImages();
    if (images.length === 0) return;

    this.selectedImageIndex.update(index =>
    index === 0 ? images.length - 1 : index - 1);
  }

  nextImage(): void {
    const images = this.store.galleryImages();
    if (images.length === 0) return;

    this.selectedImageIndex.update(index =>
    index === images.length - 1 ? 0 : index + 1);
  }

  onImageError(event: Event): void {
    if (this.imageErrorHandled()) return; // Предотвращаем бесконечный цикл

    const img = event.target as HTMLImageElement;
    // Серый placeholder как data URI (1x1 серый квадрат SVG)
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    this.imageErrorHandled.set(true);
  }
}
