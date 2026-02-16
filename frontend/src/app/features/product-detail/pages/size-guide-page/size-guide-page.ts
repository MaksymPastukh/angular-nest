import { BreadcrumbItemInterface, UiBreadcrumbComponent } from '@/shared/ui'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import { ProductDetailFacade } from '../../store/product-detail.facade'

@Component({
  selector: 'app-detail',
  imports: [CommonModule, UiBreadcrumbComponent],
  templateUrl: './size-guide-page.html',
  styleUrl: './size-guide-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizeGuidePage {
  private readonly route = inject(ActivatedRoute)
  readonly facade = inject(ProductDetailFacade)

  readonly productId = toSignal(this.route.params.pipe(map((params) => params['id'] as string)))

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

  constructor() {
    effect(() => {
      const id = this.productId()
      if (id) {
        this.facade.load(id)
      }
    })
  }
}
