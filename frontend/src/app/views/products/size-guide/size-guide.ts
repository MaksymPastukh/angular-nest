import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Breadcrumb } from 'primeng/breadcrumb'
import { map } from 'rxjs'
import { ProductDetailStore } from '../../../features/products/catalog/store/product-detail.store'

@Component({
  selector: 'app-detail',
  imports: [CommonModule, Breadcrumb],
  templateUrl: './size-guide.html',
  styleUrl: './size-guide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizeGuide {
  private readonly route = inject(ActivatedRoute)
  readonly store = inject(ProductDetailStore)

  readonly productId = toSignal(this.route.params.pipe(map((params) => params['id'] as string)))

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    const product = this.store.product()
    const productId = this.productId()

    const items: MenuItem[] = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Shop',
        routerLink: '/products',
      },
    ]

    if (product) {
      items.push({
        label: product.title,
        routerLink: `/product/${productId}`,
      })
    }

    items.push({
      label: 'Size Guide',
      styleClass: 'active-breadcrumb',
    })

    return items
  })

  constructor() {
    effect(() => {
      const id = this.productId()
      if (id) {
        this.store.loadProduct(id)
      }
    })
  }
}
