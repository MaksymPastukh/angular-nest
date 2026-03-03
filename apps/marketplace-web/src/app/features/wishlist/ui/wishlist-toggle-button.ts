import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import {
  WISHLIST_ITEM_SOURCE,
  WishlistItemSource,
} from '../domain/constants/wishlist-item-sourse.constants'
import { WishlistFacade } from '../store/wishlist.facade'

@Component({
  selector: 'app-wishlist-button',
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-button
    type="button"
    [rounded]="true"
    [text]="true"
    [icon]="icon()"
    [loading]="loading()"
    [disabled]="disabled()"
    (onClick)="onToggle()"
    [attr.aria-label]="ariaLabel()"
    [styleClass]="styleClass()"
  ></p-button>`,
})
export class WishlistButton {
  private readonly facade = inject(WishlistFacade)

  readonly productId = input.required<string>()
  readonly source = input<WishlistItemSource>(WISHLIST_ITEM_SOURCE.CATALOG)
  readonly disabled = input<boolean>(false)

  readonly isInWishlist = computed(() => this.facade.isInWishList()(this.productId()))
  readonly loading = computed(() => this.facade.isSubmitting?.() ?? false) // можно сделать тоньше, если нужно

  readonly icon = computed(() => (this.isInWishlist() ? 'pi pi-heart-fill' : 'pi pi-heart'))
  readonly ariaLabel = computed(() =>
    this.isInWishlist() ? 'Remove from wishlist' : 'Add to wishlist'
  )

  readonly styleClass = computed(() => {
    const base: string =
      'p-0 w-10 h-10 inline-flex items-center justify-center ' +
      'transition-transform duration-150 hover:scale-110 active:scale-95'

    const state = this.isInWishlist() ? 'text-red-500' : 'text-slate-600 hover:text-red-500'
    return `${base} ${state}`
  })

  onToggle(): void {
    if (this.disabled()) return
    this.facade.toggleLikeProduct(this.productId(), this.source())
  }
}
