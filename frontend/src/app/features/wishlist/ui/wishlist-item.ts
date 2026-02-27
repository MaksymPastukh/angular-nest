import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-wishlist-item',
  imports: [],
  template: `
    <div class="wl-item">
      <button class="wl-remove" type="button" aria-label="Remove from wishlist">…</button>

      <div class="wl-img">
        <img
          class="h-full w-full object-cover"
          src="https://via.placeholder.com/200"
          alt="Blue Flower Print Crop Top"
        />
      </div>

      <div class="min-w-0">
        <div class="mt-4 sm:hidden">
          <button class="wl-cta w-full" type="button">Add to cart</button>
        </div>
      </div>

      <div class="hidden items-center gap-6 sm:flex">
        <div class="text-base font-semibold text-slate-900">$29.00</div>
        <button class="wl-cta" type="button">Add to cart</button>
      </div>
    </div>
  `,
  styles: `
    .wl-item {
      @apply grid grid-cols-[auto,80px,1fr] items-start gap-x-4 gap-y-4 border-b border-slate-200 py-6
         sm:grid-cols-[auto,96px,1fr,auto] sm:items-center;
    }
    .wl-remove {
      @apply mt-1 shrink-0 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 active:scale-95 transition
         sm:mt-0;
    }
    .wl-img {
      @apply h-20 w-20 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-24;
    }
    .wl-cta {
      @apply rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white
         hover:bg-violet-700 active:scale-95 transition;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistItem {
  readonly productId = input.required<string>
}
