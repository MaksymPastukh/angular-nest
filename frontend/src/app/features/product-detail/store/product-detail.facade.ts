import { inject, Injectable } from '@angular/core'
import { ProductDetailStore } from './product-detail.store'

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

  load(id: string): void {
    this.store.loadProduct(id)
  }

  reset(): void {
    this.store.reset()
  }

  selectImage(index: number): void {
    this.store.selectImage(index)
  }

  selectSize(size: string | null): void {
    this.store.selectSize(size)
  }

  selectColor(color: string | null): void {
    this.store.selectColor(color)
  }

  setQuantity(quantity: number): void {
    this.store.setQuantity(quantity)
  }

  incQty(): void {
    this.store.incQty()
  }

  decQty(): void {
    this.store.decQty()
  }

  prevImage(): void {
    const images = this.galleryImages()
    if (!images.length) return

    const idx = this.activeImageIndex()
    this.selectImage(idx === 0 ? images.length - 1 : idx - 1)
  }

  nextImage(): void {
    const images = this.galleryImages()
    if (!images.length) return

    const idx = this.activeImageIndex()
    this.selectImage(idx === images.length - 1 ? 0 : idx + 1)
  }

  addToCart(): void {
    if (!this.canAddToCart()) return

    const product = this.product()
    if (!product) return

    // ВАЖНО: твой бэк отдаёт _id
    console.warn('[ADD_TO_CART stub]', {
      productId: product._id,
      title: product.title,
      price: product.price,
      qty: this.quantity(),
      size: this.selectedSize(),
      color: this.selectedColor(),
    })
  }
}
