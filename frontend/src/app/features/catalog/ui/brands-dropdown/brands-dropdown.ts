import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay'
import { TemplatePortal } from '@angular/cdk/portal'
import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
  output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { FacetItemInterface } from '../../domain/interfaces/catalog-facets.interface'

@Component({
  selector: 'app-brands-dropdown',
  imports: [CommonModule, OverlayModule],
  templateUrl: './brands-dropdown.html',
  styleUrl: './brands-dropdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsDropdownComponent implements OnDestroy {
  private readonly overlay = inject(Overlay)
  private readonly viewContainerRef = inject(ViewContainerRef)

  @ViewChild('dropdownTemplate', { static: true })
  dropdownTemplate!: TemplateRef<unknown>

  anchor = input<HTMLElement | null>(null)
  brands = input.required<FacetItemInterface[]>()
  isLoading = input<boolean>(false)
  isOpen = input<boolean>(false)
  brandSelect = output<string>()
  dropdownEnter = output<void>()
  dropdownLeave = output<void>()

  private overlayRef: OverlayRef | null = null
  private currentAnchor: HTMLElement | null = null
  private previousBrands: FacetItemInterface[] = []
  private cachedSortedBrands: FacetItemInterface[] = []

  readonly sortedBrands = computed(() => {
    const brands = this.brands()

    // Оптимизация: пересортируем только если данные реально изменились
    if (brands === this.previousBrands) {
      return this.cachedSortedBrands
    }

    this.previousBrands = brands
    this.cachedSortedBrands = [...brands].sort((a, b) => b.count - a.count)
    return this.cachedSortedBrands
  })

  constructor() {
    effect(() => {
      const open = this.isOpen()
      const anchorEl = this.anchor()

      if (open && anchorEl) {
        this.openDropdown(anchorEl)
      } else {
        this.closeDropdown()
      }
    })
  }

  private ensureOverlay(anchorEl: HTMLElement): OverlayRef {
    const anchorChanged = this.currentAnchor !== anchorEl
    this.currentAnchor = anchorEl

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(anchorEl)
      .withPositions([
        { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: 8 },
        { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', offsetX: -8 },
      ])
      .withLockedPosition(true)
      .withFlexibleDimensions(false)
      .withPush(false)
      .withViewportMargin(8)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        hasBackdrop: false,
      })
    } else if (anchorChanged) {
      // Обновляем позицию только если anchor действительно изменился
      this.overlayRef.updatePositionStrategy(positionStrategy)
    }

    return this.overlayRef
  }

  private openDropdown(anchorEl: HTMLElement): void {
    const ref = this.ensureOverlay(anchorEl)

    if (!ref.hasAttached()) {
      ref.attach(new TemplatePortal(this.dropdownTemplate, this.viewContainerRef))
    }

    ref.updatePosition()
  }

  private closeDropdown(): void {
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach()
    }
    this.currentAnchor = null
  }

  onBrandClick(brand: string): void {
    this.brandSelect.emit(brand)
  }

  onDropdownEnter(): void {
    this.dropdownEnter.emit()
  }

  onDropdownLeave(): void {
    this.dropdownLeave.emit()
  }

  ngOnDestroy(): void {
    this.closeDropdown()
    this.overlayRef?.dispose()
    this.overlayRef = null
    this.currentAnchor = null
  }
}
