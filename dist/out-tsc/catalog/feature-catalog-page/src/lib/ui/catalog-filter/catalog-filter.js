import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel, Slider } from '@marketplace/frontend-shared-ui';
import { CatalogFilterFacade } from '@marketplace/frontend-catalog-data-access';
import { BrandsDropdownComponent } from '../brands-dropdown/brands-dropdown';
let CatalogFilterComponent = class CatalogFilterComponent {
    filterFacade = inject(CatalogFilterFacade);
    MIN_PRICE = 0;
    MAX_PRICE = 400;
    min = this.MIN_PRICE;
    max = this.MAX_PRICE;
    priceRangeValues = [70, 270];
    openedPanels = ['0', '1', '2', '3', '4'];
    openCategoryDropdown = signal(null);
    openStyleDropdown = signal(null);
    categoryAnchor = signal(null);
    styleAnchor = signal(null);
    closeTimer = {
        category: null,
        style: null,
    };
    constructor() {
        this.filterFacade.ensureLoaded();
        const [min, max] = this.filterFacade.selected().priceRange;
        this.priceRangeValues = [min, max];
    }
    clampPrice(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
    onAccordionChange(nextValues) {
        if (!nextValues)
            return;
        const values = Array.isArray(nextValues)
            ? nextValues.map((v) => String(v))
            : [String(nextValues)];
        if (!values.includes('0')) {
            this.openedPanels = ['0', ...values.filter((v) => v !== '0')];
        }
        else {
            this.openedPanels = values;
        }
        if (!this.openedPanels.includes('0')) {
            this.forceClose('category');
            this.forceClose('style');
        }
    }
    onPriceChange(value) {
        if (!value)
            return;
        const next = [value[0], value[1]];
        this.priceRangeValues = next;
        this.filterFacade.setPriceRange(next);
    }
    onMinPriceInput(event) {
        const input = event.target;
        let value = parseInt(input.value, 10);
        if (Number.isNaN(value))
            value = this.MIN_PRICE;
        value = this.clampPrice(value, this.MIN_PRICE, this.priceRangeValues[1]);
        this.priceRangeValues = [value, this.priceRangeValues[1]];
        this.filterFacade.setPriceRange(this.priceRangeValues);
    }
    onMaxPriceInput(event) {
        const input = event.target;
        let value = parseInt(input.value, 10);
        if (Number.isNaN(value))
            value = this.MAX_PRICE;
        value = this.clampPrice(value, this.priceRangeValues[0], this.MAX_PRICE);
        this.priceRangeValues = [this.priceRangeValues[0], value];
        this.filterFacade.setPriceRange(this.priceRangeValues);
    }
    validatePriceRange() {
        let [min, max] = this.priceRangeValues;
        if (min > max)
            [min, max] = [max, min];
        min = this.clampPrice(min, this.MIN_PRICE, this.MAX_PRICE);
        max = this.clampPrice(max, this.MIN_PRICE, this.MAX_PRICE);
        this.priceRangeValues = [min, max];
        this.filterFacade.setPriceRange(this.priceRangeValues);
    }
    toggleSize(size) {
        this.filterFacade.toggleSize(size);
    }
    selectColor(color) {
        this.filterFacade.toggleColor(color);
    }
    // --- Dropdown helpers ---
    clearCloseTimer(type) {
        const t = this.closeTimer[type];
        if (t)
            clearTimeout(t);
        this.closeTimer[type] = null;
    }
    scheduleClose(type, delayMs) {
        this.clearCloseTimer(type);
        this.closeTimer[type] = setTimeout(() => {
            this.forceClose(type);
            this.closeTimer[type] = null;
        }, delayMs);
    }
    forceClose(type) {
        this.clearCloseTimer(type);
        if (type === 'category')
            this.openCategoryDropdown.set(null);
        else
            this.openStyleDropdown.set(null);
    }
    onCategoryHover(categoryName, buttonElement) {
        this.clearCloseTimer('category');
        if (this.filterFacade.activeCategory() !== categoryName) {
            this.filterFacade.setActiveCategory(categoryName);
        }
        this.categoryAnchor.set(buttonElement);
        this.openCategoryDropdown.set(categoryName);
        this.openStyleDropdown.set(null);
        this.clearCloseTimer('style');
    }
    onCategoryLeave() {
        this.scheduleClose('category', 250);
    }
    onStyleHover(styleName, buttonElement) {
        this.clearCloseTimer('style');
        if (this.filterFacade.activeStyle() !== styleName) {
            this.filterFacade.setActiveStyle(styleName);
        }
        this.styleAnchor.set(buttonElement);
        this.openStyleDropdown.set(styleName);
        this.openCategoryDropdown.set(null);
        this.clearCloseTimer('category');
    }
    onStyleLeave() {
        this.scheduleClose('style', 250);
    }
    onDropdownEnter(type) {
        this.clearCloseTimer(type);
    }
    onDropdownLeave(type) {
        this.scheduleClose(type, 100);
    }
    onBrandSelect(category, brand) {
        this.forceClose('category');
        if (brand && category) {
            this.filterFacade.toggleType(category, brand);
        }
    }
    onStyleBrandSelect(style, brand) {
        this.forceClose('style');
        if (brand && style) {
            this.filterFacade.toggleStyle(style, brand);
        }
    }
    reloadFilterData() {
        this.filterFacade.reloadFilterData();
    }
    formatFacetLabel(value) {
        return value
            .trim()
            .replace(/[_-]+/g, ' ')
            .replace(/\s+/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }
};
CatalogFilterComponent = __decorate([
    Component({
        selector: 'app-catalog-filter',
        imports: [
            FormsModule,
            BrandsDropdownComponent,
            Accordion,
            AccordionPanel,
            AccordionHeader,
            AccordionContent,
            Slider,
        ],
        templateUrl: './catalog-filter.html',
        styleUrl: './catalog-filter.scss',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], CatalogFilterComponent);
export { CatalogFilterComponent };
