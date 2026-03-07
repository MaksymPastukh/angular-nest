import { OnInit } from '@angular/core';
import { UiAccordionContentSlot, UiAccordionHeaderSlot } from './ui-accordion.slots';
export declare class UiAccordionComponent implements OnInit {
    defaultOpen: import("@angular/core").InputSignal<boolean>;
    headerClass: import("@angular/core").InputSignal<string>;
    contentWrapClass: import("@angular/core").InputSignal<string>;
    contentClass: import("@angular/core").InputSignal<string>;
    headerTpl: import("@angular/core").Signal<UiAccordionHeaderSlot>;
    contentTpl: import("@angular/core").Signal<UiAccordionContentSlot>;
    private readonly _id;
    readonly contentId: string;
    readonly isOpen: import("@angular/core").WritableSignal<boolean>;
    ngOnInit(): void;
    toggle(): void;
    onEscape(event: Event): void;
}
//# sourceMappingURL=ui-accordion.component.d.ts.map