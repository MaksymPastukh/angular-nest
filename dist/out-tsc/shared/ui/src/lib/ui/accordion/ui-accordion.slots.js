import { __decorate } from "tslib";
import { Directive, inject, TemplateRef } from '@angular/core';
let UiAccordionHeaderSlot = class UiAccordionHeaderSlot {
    tpl = inject((TemplateRef));
};
UiAccordionHeaderSlot = __decorate([
    Directive({
        selector: '[appUiAccordionHeader]',
        standalone: true,
    })
], UiAccordionHeaderSlot);
export { UiAccordionHeaderSlot };
let UiAccordionContentSlot = class UiAccordionContentSlot {
    tpl = inject((TemplateRef));
};
UiAccordionContentSlot = __decorate([
    Directive({
        selector: '[appUiAccordionContent]',
        standalone: true,
    })
], UiAccordionContentSlot);
export { UiAccordionContentSlot };
