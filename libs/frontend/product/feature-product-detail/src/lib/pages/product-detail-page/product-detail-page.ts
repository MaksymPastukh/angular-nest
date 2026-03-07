import { BreadcrumbItemInterface, UiBreadcrumbComponent, UiRatingComponent } from '@marketplace/frontend-shared-ui'
import { CommonModule } from '@angular/common'
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
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs'
import { map } from 'rxjs'
import { ImageUrlPipe } from '@marketplace/frontend-shared-util'
import { ProductDetailFacade, ProductQuestionFacade } from '@marketplace/frontend-product-data-access'
import { TabsInterface } from '@marketplace/frontend-product-util'
import { ProductQuestionsSectionComponent } from '../../ui/product-questions-section'
import { Reviews } from '../../ui/reviews/reviews'

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    RouterLink,
    ImageUrlPipe,
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

  readonly canAddToCart = computed(() => {
    return this.selectedSize() !== null && this.selectedColor() !== null
  })

  private isPointerFine(): boolean {
    return window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? true
  }

  onThumbHover(index: number): void {
    if (!this.isPointerFine()) return
    this.scheduleActivate(index)
  }

  onThumbFocus(index: number): void {
    this.activate(index)
  }

  onThumbClick(index: number): void {
    this.activate(index)
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

  previousImage(): void {
    this.facade.prevImage()
  }

  nextImage(): void {
    this.facade.nextImage()
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

  onTabChange(value: string | number | undefined): void {
    if (typeof value === 'number') {
      this.activeTabIndex.set(value)
    }
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

