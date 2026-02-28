import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChildren,
} from '@angular/core'

export type ColorId = string

export interface ColorOption {
  id: string
  name: string
  hex: string
  disabled?: boolean
}

@Component({
  selector: 'app-ui-multiselect',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex flex-wrap gap-2"
      role="listbox"
      aria-multiselectable="true"
      [attr.aria-label]="ariaLabel()"
    >
      @for (c of options(); track c.id; let i = $index) {
        <button
          #btn
          type="button"
          class="group relative h-9 w-9 rounded-full border transition-all
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2
                 active:scale-95"
          [disabled]="!!c.disabled"
          [style.backgroundColor]="c.hex"
          [class.opacity-50]="!!c.disabled"
          [class.cursor-not-allowed]="!!c.disabled"
          [class.border-gray-200]="!isSelected(c.id)"
          [class.border-purple-600]="isSelected(c.id)"
          [attr.role]="'option'"
          [attr.aria-selected]="isSelected(c.id)"
          [attr.aria-label]="c.name"
          [attr.title]="c.name"
          [attr.tabindex]="i === activeIndex() ? 0 : -1"
          (click)="toggle(c.id)"
          (focus)="activeIndex.set(i)"
          (keydown)="onKeydown($event, i)"
        >
          @if (isSelected(c.id)) {
            <!-- галочка -->
            <span class="pointer-events-none absolute inset-0 grid place-items-center">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="white" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          }

          <!-- тонкое кольцо при hover для невыбранных (чтобы не “съедало” цвет) -->
          <span
            class="pointer-events-none absolute inset-0 rounded-full ring-0 ring-black/10
                       group-hover:ring-2"
          ></span>
        </button>
      }
    </div>
  `,
})
export class UiColorMultiselectComponent {
  options = input<ColorOption[]>([])
  ariaLabel = input<string>('Choose colors')

  /** выбранные id */
  value = model<ColorId[]>([])

  /** событие на изменение (если нужно наружу) */
  valueChange = output<ColorId[]>()

  /** roving tabindex */
  activeIndex = signal(0)

  private readonly btns = viewChildren<ElementRef<HTMLButtonElement>>('btn')

  /** быстрый lookup */
  private readonly selectedSet = computed(() => new Set(this.value() ?? []))

  constructor() {
    effect(() => {
      // синхронизируем наружный output с model (если нужно)
      this.valueChange.emit(this.value())
    })

    // если список опций поменялся — активный индекс в диапазон
    effect(() => {
      const len = this.options().length
      if (!len) this.activeIndex.set(0)
      else if (this.activeIndex() > len - 1) this.activeIndex.set(len - 1)
    })
  }

  isSelected(id: ColorId): boolean {
    return this.selectedSet().has(id)
  }

  toggle(id: ColorId): void {
    const opts = this.options()
    const target = opts.find((o) => o.id === id)
    if (!target || target.disabled) return

    const current = this.value() ?? []
    const set = new Set(current)

    if (set.has(id)) set.delete(id)
    else set.add(id)

    this.value.set(Array.from(set))
  }

  onKeydown(e: KeyboardEvent, index: number): void {
    const len = this.options().length
    if (!len) return

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown': {
        e.preventDefault()
        this.focusIndex(this.findNextEnabled(index + 1, +1))
        break
      }
      case 'ArrowLeft':
      case 'ArrowUp': {
        e.preventDefault()
        this.focusIndex(this.findNextEnabled(index - 1, -1))
        break
      }
      case 'Home': {
        e.preventDefault()
        this.focusIndex(this.findNextEnabled(0, +1))
        break
      }
      case 'End': {
        e.preventDefault()
        this.focusIndex(this.findNextEnabled(len - 1, -1))
        break
      }
      case ' ':
      case 'Enter': {
        e.preventDefault()
        const c = this.options()[index]
        if (c) this.toggle(c.id)
        break
      }
    }
  }

  private focusIndex(i: number): void {
    this.activeIndex.set(i)
    const el = this.btns()[i]?.nativeElement
    el?.focus()
  }

  private findNextEnabled(start: number, dir: 1 | -1): number {
    const opts = this.options()
    const len = opts.length
    let i = start

    // wrap-around
    for (let step = 0; step < len; step++) {
      if (i < 0) i = len - 1
      if (i >= len) i = 0
      if (!opts[i]?.disabled) return i
      i += dir
    }

    // если всё disabled — остаёмся
    return Math.max(0, Math.min(this.activeIndex(), len - 1))
  }
}
