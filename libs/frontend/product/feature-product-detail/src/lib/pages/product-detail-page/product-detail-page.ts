import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { ProductDetailFacade, ProductQuestionFacade } from '@marketplace/frontend-product-data-access'
import { TabsInterface } from '@marketplace/frontend-product-util'
import { ProductImageInterface } from '@marketplace/frontend-shared-types'
import { BreadcrumbItemInterface, UiBreadcrumbComponent, UiRatingComponent } from '@marketplace/frontend-shared-ui'
import { imagePresets } from '@marketplace/frontend-shared-util'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs'
import { map } from 'rxjs'
import { ProductQuestionsSectionComponent } from '../../ui/product-questions-section'
import { Reviews } from '../../ui/reviews/reviews'

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    UiBreadcrumbComponent,
    UiRatingComponent,
    Reviews,
    ProductQuestionsSectionComponent,
  ],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPage {
  readonly mainImageWidth = 800
  readonly mainImageHeightFallback = 1000
  readonly thumbImageWidth = 120
  readonly thumbImageHeightFallback = 150
  readonly videoPreviewWidth = 640
  readonly videoPreviewHeightFallback = 360
  private readonly route = inject(ActivatedRoute)
  public readonly facade = inject(ProductDetailFacade)
  public readonly facadeQuestion = inject(ProductQuestionFacade)
  private readonly destroyRef = inject(DestroyRef)

  private readonly reviewsSection = viewChild<ElementRef<HTMLDivElement>>('reviewsSection')
  readonly selectedImageIndex = signal(0)
  private readonly imageErrorHandled = signal(false)
  readonly selectedSize = signal<string | null>(null)
  readonly selectedColor = signal<string | null>(null)
  readonly activeTabIndex = signal(0)
  readonly productId = toSignal(this.route.params.pipe(map((params) => params['id'] as string)))
  private hoverTimer: number | null = null
  private lastHoverIndex: number | null = null
  readonly imagePresets = imagePresets

  readonly canAddToCart = computed(() => {
    return this.selectedSize() !== null && this.selectedColor() !== null
  })

  private isPointerFine(): boolean {
    return window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? true
  }

  public onThumbHover(index: number): void {
    if (!this.isPointerFine()) return
    this.scheduleActivate(index)
  }

  public onThumbFocus(index: number): void {
    this.activate(index)
  }

  public onThumbClick(index: number): void {
    this.activate(index)
  }

public onThumbWheel(event: WheelEvent): void {
  const absX = Math.abs(event.deltaX)
  const absY = Math.abs(event.deltaY)

  const primaryDelta = absY >= absX ? event.deltaY : event.deltaX

  if (primaryDelta > 0 && this.facade.canScrollThumbsDown()) {
    event.preventDefault()
    this.facade.scrollThumbsByWheel('down')
    return
  }

  if (primaryDelta < 0 && this.facade.canScrollThumbsUp()) {
    event.preventDefault()
    this.facade.scrollThumbsByWheel('up')
  }
}

  private scheduleActivate(index: number): void {
    if (this.lastHoverIndex === index) return
    this.lastHoverIndex = index

    if (this.hoverTimer !== null) window.clearTimeout(this.hoverTimer)

    this.hoverTimer = window.setTimeout(() => {
      this.activate(index)
      this.hoverTimer = null
    }, 60)
  }

  private activate(index: number): void {
    this.facade.selectImage(index)
  }

  readonly tabss = computed<TabsInterface[]>((): TabsInterface[] => {
    return [
      {
        title: 'Description',
        value: 0,
        content: '',
      },
      {
        title: 'Reviews',
        value: 1,
        content: this.facade.rantingCount(),
      },
      {
        title: 'Q&A',
        value: 2,
        content: this.facadeQuestion.total(),
      },
    ]
  })

  constructor() {
    effect(() => {
      const id = this.productId()

      if (id) {
        this.facade.load(id)
      }
    })

    this.destroyRef.onDestroy(() => {
      if (this.hoverTimer !== null) window.clearTimeout(this.hoverTimer)
    })
  }

  protected scrollToReviews(): void {
    this.onTabChange(1)
    setTimeout(() => {
      const elem = this.reviewsSection()?.nativeElement

      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  readonly breadcrumbItems = computed<BreadcrumbItemInterface[]>(() => {
    const product = this.facade.product()
    if (!product) return []

    const items: BreadcrumbItemInterface[] = [{ label: 'Shop', routerLink: '/catalog' }]

    if (product.category) {
      items.push({
        label: product.category,
        routerLink: '/catalog',
        queryParams: { category: product.category },
      })
    }

    if (product.productType) {
      items.push({
        label: product.productType,
        routerLink: '/catalog',
        queryParams: { category: product.category, productType: product.productType },
        isActive: true,
      })
    }

    return items
  })

 public onTabChange(value: string | number | undefined): void {
    if (typeof value === 'number') {
      this.activeTabIndex.set(value)
    }
  }

  public onImageError(event: Event): void {
    if (this.imageErrorHandled()) return 
    const img = event.target as HTMLImageElement
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
    this.imageErrorHandled.set(true)
  }

  getMainImageWidth(image: ProductImageInterface): number {
    return this.getImageWidth(image, this.mainImageWidth)
  }

  getMainImageHeight(image: ProductImageInterface): number {
    return this.getImageHeightForWidth(image, this.mainImageWidth, this.mainImageHeightFallback)
  }

  getThumbWidth(image: ProductImageInterface): number {
    return this.getImageWidth(image, this.thumbImageWidth)
  }

  getThumbHeight(image: ProductImageInterface): number {
    return this.getImageHeightForWidth(image, this.thumbImageWidth, this.thumbImageHeightFallback)
  }

  getVideoPreviewWidth(image: ProductImageInterface): number {
    return this.getImageWidth(image, this.videoPreviewWidth)
  }

  getVideoPreviewHeight(image: ProductImageInterface): number {
    return this.getImageHeightForWidth(image, this.videoPreviewWidth, this.videoPreviewHeightFallback)
  }

  private getImageWidth(image: ProductImageInterface, targetWidth: number): number {
    if (image.width) {
      return Math.max(1, Math.min(targetWidth, image.width))
    }

    return targetWidth
  }

  private getImageHeightForWidth(
    image: ProductImageInterface,
    targetWidth: number,
    fallbackHeight: number
  ): number {
    if (image.width && image.height) {
      const width = this.getImageWidth(image, targetWidth)
      return Math.max(1, Math.round((width * image.height) / image.width))
    }

    return fallbackHeight
  }
}

