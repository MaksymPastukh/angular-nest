import { __decorate } from "tslib";
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output, ViewChild, ViewContainerRef, } from '@angular/core';
let BrandsDropdownComponent = class BrandsDropdownComponent {
    overlay = inject(Overlay);
    viewContainerRef = inject(ViewContainerRef);
    dropdownTemplate;
    anchor = input(null);
    brands = input.required();
    isLoading = input(false);
    isOpen = input(false);
    brandSelect = output();
    dropdownEnter = output();
    dropdownLeave = output();
    overlayRef = null;
    currentAnchor = null;
    previousBrands = [];
    cachedSortedBrands = [];
    sortedBrands = computed(() => {
        const brands = this.brands();
        // Оптимизация: пересортируем только если данные реально изменились
        if (brands === this.previousBrands) {
            return this.cachedSortedBrands;
        }
        this.previousBrands = brands;
        this.cachedSortedBrands = [...brands].sort((a, b) => b.count - a.count);
        return this.cachedSortedBrands;
    });
    constructor() {
        effect(() => {
            const open = this.isOpen();
            const anchorEl = this.anchor();
            if (open && anchorEl) {
                this.openDropdown(anchorEl);
            }
            else {
                this.closeDropdown();
            }
        });
    }
    ensureOverlay(anchorEl) {
        const anchorChanged = this.currentAnchor !== anchorEl;
        this.currentAnchor = anchorEl;
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
            .withViewportMargin(8);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
                positionStrategy,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                hasBackdrop: false,
            });
        }
        else if (anchorChanged) {
            // Обновляем позицию только если anchor действительно изменился
            this.overlayRef.updatePositionStrategy(positionStrategy);
        }
        return this.overlayRef;
    }
    openDropdown(anchorEl) {
        const ref = this.ensureOverlay(anchorEl);
        if (!ref.hasAttached()) {
            ref.attach(new TemplatePortal(this.dropdownTemplate, this.viewContainerRef));
        }
        ref.updatePosition();
    }
    closeDropdown() {
        if (this.overlayRef?.hasAttached()) {
            this.overlayRef.detach();
        }
        this.currentAnchor = null;
    }
    onBrandClick(brand) {
        this.brandSelect.emit(brand);
    }
    onDropdownEnter() {
        this.dropdownEnter.emit();
    }
    onDropdownLeave() {
        this.dropdownLeave.emit();
    }
    ngOnDestroy() {
        this.closeDropdown();
        this.overlayRef?.dispose();
        this.overlayRef = null;
        this.currentAnchor = null;
    }
};
__decorate([
    ViewChild('dropdownTemplate', { static: true })
], BrandsDropdownComponent.prototype, "dropdownTemplate", void 0);
BrandsDropdownComponent = __decorate([
    Component({
        selector: 'app-brands-dropdown',
        imports: [CommonModule, OverlayModule],
        templateUrl: './brands-dropdown.html',
        styleUrl: './brands-dropdown.scss',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], BrandsDropdownComponent);
export { BrandsDropdownComponent };
