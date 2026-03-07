import { __decorate } from "tslib";
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, input, signal, } from '@angular/core';
import { UiAccordionContentSlot, UiAccordionHeaderSlot } from './ui-accordion.slots';
let ACCORDION_ID = 0;
let UiAccordionComponent = class UiAccordionComponent {
    defaultOpen = input(false);
    headerClass = input('text-2xl sm:text-3xl font-bold text-[#f6f6f6]');
    contentWrapClass = input('mt-2');
    contentClass = input('pt-4 text-[#bebcbd]');
    headerTpl = contentChild.required(UiAccordionHeaderSlot);
    contentTpl = contentChild.required(UiAccordionContentSlot);
    _id = `ui-accordion-${ACCORDION_ID++}`;
    contentId = `${this._id}-content`;
    isOpen = signal(false);
    ngOnInit() {
        this.isOpen.set(this.defaultOpen());
    }
    toggle() {
        this.isOpen.update((v) => !v);
    }
    onEscape(event) {
        if (!this.isOpen() || !(event instanceof KeyboardEvent))
            return;
        event.preventDefault();
        event.stopPropagation();
        this.isOpen.set(false);
    }
};
UiAccordionComponent = __decorate([
    Component({
        selector: 'app-ui-accordion',
        standalone: true,
        imports: [NgTemplateOutlet],
        changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: './ui-accordion.component.html',
    })
], UiAccordionComponent);
export { UiAccordionComponent };
