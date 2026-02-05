import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Breadcrumb } from 'primeng/breadcrumb'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs'
import { map } from 'rxjs'
import { ImageUrlPipe } from '../../../../shared/pipes/image-url.pipe'
import { Rating } from '../../../../shared/ui/rating/rating'
import { ProductInterface } from '../../../catalog/domain/interfaces/product.interface'
import { CommentStore } from '../../../comment/store/comment.store'
import { CommentsComponent } from '../../../comment/ui/comments/comments'
import { TabsInterface } from '../../domain/interfaces/tabs-info.interface'
import { ProductDetailStore } from '../../store/product-detail.store'

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    RouterLink,
    Breadcrumb,
    ImageUrlPipe,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CommentsComponent,
    Rating,
  ],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPage {
  private readonly route = inject(ActivatedRoute)
  readonly store = inject(ProductDetailStore)
  readonly commentStore = inject(CommentStore)
  private readonly commentsSection = viewChild<ElementRef<HTMLDivElement>>('commentsSection')
  readonly selectedImageIndex = signal(0)
  private readonly imageErrorHandled = signal(false)
  readonly selectedSize = signal<string | null>(null)
  readonly selectedColor = signal<string | null>(null)
  readonly activeTabIndex = signal(0)
  readonly productId = toSignal(this.route.params.pipe(map((params) => params['id'] as string)))
  readonly galleryImages = computed(() => this.store.galleryImages())

  readonly canAddToCart = computed(() => {
    const product = this.store.product()
    if (!product) return false

    return this.selectedSize() !== null && this.selectedColor() !== null
  })

  readonly hasMultipleColors = computed(() => {
    const product = this.store.product()
    if (!product) return false
    return product && Array.isArray(product.color) ? product.color.length > 1 : false
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

  constructor() {
    effect(() => {
      const id = this.productId()
      if (id) {
        this.store.loadProduct(id)
        this.resetState()
      }
    })

    effect(() => {
      const product = this.store.product()
      if (!product) return
      if (!this.hasMultipleColors()) {
        const singleColor: string = Array.isArray(product.color) ? product.color[0] : product.color
        this.selectedColor.set(singleColor)
      }
    })
  }

  private resetState(): void {
    this.selectedImageIndex.set(0)
    this.imageErrorHandled.set(false)
    this.selectedSize.set(null)
    this.selectedColor.set(null)
  }

  protected scrollToComments(): void {
    this.onTabChange(1)
    setTimeout(() => {
      const elem = this.commentsSection()?.nativeElement

      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    const product: ProductInterface | null = this.store.product()
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
        styleClass: 'active-breadcrumb',
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

  selectColor(color: string | string[]): void {
    this.selectedColor.set(color as string)
  }

  onTabChange(value: string | number | undefined): void {
    if (typeof value === 'number') {
      this.activeTabIndex.set(value)
    }
  }

  addToCart(): void {
    if (!this.canAddToCart()) {
      return
    }

    // Логика добавления в корзину
    const product = this.store.product()
    if (product) {
      console.warn('Adding to cart:', {
        product: product,
        size: this.selectedSize(),
        color: this.selectedColor(),
      })
      // TODO: Вызов сервиса добавления в корзину
    }
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
    if (this.imageErrorHandled()) return

    const img = event.target as HTMLImageElement
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
    this.imageErrorHandled.set(true)
  }
}
