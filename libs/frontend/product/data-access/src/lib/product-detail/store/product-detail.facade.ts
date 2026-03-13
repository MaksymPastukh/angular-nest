import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductDetailGalleryInterface } from '@marketplace/frontend-product-util';
import { ProductDetailStore } from './product-detail.store';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailFacade {
  private readonly store = inject(ProductDetailStore)

  readonly product = this.store.product
  readonly isLoading = this.store.isLoading
  readonly error = this.store.error

  readonly hasProduct = this.store.hasProduct
  readonly productTitle = this.store.productTitle
  readonly availableSizes = this.store.availableSizes
  readonly canAddToCart = this.store.canAddToCart

  readonly galleryImages = this.store.galleryImages
  readonly activeImage = this.store.activeImage
  readonly activeImageIndex = this.store.activeImageIndex

  readonly selectedSize = this.store.selectedSize
  readonly quantity = this.store.quantity

  readonly availableColors = this.store.availableColors
  readonly hasMultipleColors = this.store.hasMultipleColors
  readonly selectedColor = this.store.selectedColor

  readonly rantingAvg = this.store.ratingAvg
  readonly rantingCount = this.store.ratingCount

 readonly maxVisibleThumbs: number = 5;

  readonly thumbStartIndex = signal(0);

  readonly visibleGalleryImages = computed(() => {
  const images: ProductDetailGalleryInterface[] = this.galleryImages();
  const start: number = this.thumbStartIndex();
  return images.slice(start, start + this.maxVisibleThumbs);
});

readonly canScrollThumbsUp = computed(() => this.thumbStartIndex() > 0);

readonly canScrollThumbsDown = computed(() => {
  return this.thumbStartIndex() + this.maxVisibleThumbs < this.galleryImages().length;
});



public scrollThumbsByWheel(direction: 'up' | 'down'): void {
  if (direction === 'down' && this.canScrollThumbsDown()) {
    this.thumbStartIndex.update((v) => v + 1)
    return
  }

  if (direction === 'up' && this.canScrollThumbsUp()) {
    this.thumbStartIndex.update((v) => v - 1)
  }
}

public ensureActiveThumbVisible(index: number): void {
  const start = this.thumbStartIndex();
  const end = start + this.maxVisibleThumbs - 1;

  if (index < start) {
    this.thumbStartIndex.set(index);
    return;
  }

  if (index > end) {
    this.thumbStartIndex.set(index - this.maxVisibleThumbs + 1);
  }
}

public selectImage(index: number): void {
  this.store.selectImage(index)
  this.ensureActiveThumbVisible(index)
}

 public load(id: string): void {
    this.store.loadProduct(id)
  }

 public reset(): void {
    this.store.reset()
  }

 public selectSize(size: string | null): void {
    this.store.selectSize(size)
  }

 public selectColor(color: string | null): void {
    this.store.selectColor(color)
  }

 public setQuantity(quantity: number): void {
    this.store.setQuantity(quantity)
  }

  public prevImage(): void {
    const images = this.galleryImages()
    if (!images.length) return

    const idx = this.activeImageIndex()
    this.selectImage(idx === 0 ? images.length - 1 : idx - 1)
  }

  public nextImage(): void {
    const images = this.galleryImages()
    if (!images.length) return

    const idx = this.activeImageIndex()
    this.selectImage(idx === images.length - 1 ? 0 : idx + 1)
  }

  public addToCart(): void {
    if (!this.canAddToCart()) return

    const product = this.product()
    if (!product) return

    // ВАЖНО: твой бэк отдаёт _id
    console.warn('[ADD_TO_CART stub]', {
      productId: product.id,
      title: product.title,
      price: product.price,
      qty: this.quantity(),
      size: this.selectedSize(),
      color: this.selectedColor(),
    })
  }
}
