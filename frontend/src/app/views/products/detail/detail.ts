import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Breadcrumb } from 'primeng/breadcrumb'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs'
import { map } from 'rxjs'
import { ProductDetailStore } from '../../../features/products/catalog/store/product-detail.store'
import { CommentsComponent } from '../../../features/products/detail/components/comments/comments'
import { CommentStore } from '../../../features/products/detail/store/comment.store'
import { ProductType } from '../../../features/products/detail/types/product.interface'
import { TabsInterface } from '../../../features/products/detail/types/tabs-info.interface'
import { RatingComponent } from '../../../shared/components/rating/rating'
import { ImageUrlPipe } from '../../../shared/pipes/image-url.pipe'

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    RouterLink,
    RatingComponent,
    Breadcrumb,
    ImageUrlPipe,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CommentsComponent,
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {
  private readonly route = inject(ActivatedRoute)
  readonly store = inject(ProductDetailStore)
  readonly commentStore = inject(CommentStore)

  readonly selectedImageIndex = signal(0)
  private readonly imageErrorHandled = signal(false)
  readonly selectedSize = signal<string | null>(null)
  readonly selectedColor = signal<string | null>(null)
  readonly activeTabIndex = signal(0)

  readonly canAddToCart = computed(() => {
    const product = this.store.product()
    if (!product) return false

    return this.selectedSize() !== null && this.selectedColor() !== null
  })

  readonly tabss = computed<TabsInterface[]>((): TabsInterface[] => {
    const product = this.store.product()
    const commentsCount = this.commentStore.commentsCount()

    return [
      {
        title: 'Description',
        value: 0,
        content: product?.description ?? '',
      },
      {
        title: 'User Comments',
        value: 1,
        content: commentsCount,
      },
    ]
  })

  readonly productId = toSignal(this.route.params.pipe(map((params) => params['id'] as string)))

  readonly galleryImages = computed(() => this.store.galleryImages())

  constructor() {
    effect(
      () => {
        const id = this.productId()
        if (id) {
          this.store.loadProduct(id)
          this.resetState()
        }
      },
      { allowSignalWrites: true }
    )
  }

  private resetState(): void {
    this.selectedImageIndex.set(0)
    this.imageErrorHandled.set(false)
    this.selectedSize.set(null)
    this.selectedColor.set(null)
  }

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    const product: ProductType | null = this.store.product()
    if (!product) return []

    const items: MenuItem[] = [
      {
        label: 'Shop',
        routerLink: '/products',
      },
    ]

    if (product.category) {
      items.push({
        label: product.category,
        routerLink: '/products',
        queryParams: { category: product.category },
      })
    }

    if (product.productType) {
      items.push({
        label: product.productType,
        routerLink: '/products',
        queryParams: {
          category: product.category,
          productType: product.productType,
        },
      })
    }

    return items
  })

  selectImage(index: number): void {
    this.selectedImageIndex.set(index)
  }

  selectSize(size: string): void {
    this.selectedSize.set(size)
  }

  selectColor(color: string): void {
    this.selectedColor.set(color)
  }

  onTabChange(value: string | number | undefined): void {
    if (typeof value === 'number') {
      this.activeTabIndex.set(value)
    }
  }

  addToCart(): void {
    const product = this.store.product()
    const size = this.selectedSize()
    const color = this.selectedColor()

    // Кнопка disabled, но дополнительная проверка не помешает
    if (!product || !size || !color) return

    // Формируем данные для корзины
    // const cartItem = {
    //   productId: product.id,
    //   title: product.title,
    //   price: product.price,
    //   size,
    //   color,
    //   image: product.image,
    //   quantity: 1,
    // }

    // TODO: Здесь будет логика добавления в CartStore
    // this.cartStore.addItem(cartItem);

    // Временное уведомление
  }

  previousImage(): void {
    const images = this.store.galleryImages()
    if (images.length === 0) return

    this.selectedImageIndex.update((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  nextImage(): void {
    const images = this.store.galleryImages()
    if (images.length === 0) return

    this.selectedImageIndex.update((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  onImageError(event: Event): void {
    if (this.imageErrorHandled()) return // Предотвращаем бесконечный цикл

    const img = event.target as HTMLImageElement
    // Серый placeholder как data URI (1x1 серый квадрат SVG)
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
    this.imageErrorHandled.set(true)
  }
}
