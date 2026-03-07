import { FormValueControl } from '@angular/forms/signals';
export declare class UISelect<T = string, TOption = unknown> implements FormValueControl<T | null> {
    readonly value: import("@angular/core").ModelSignal<T | null>;
    options: import("@angular/core").InputSignal<TOption[]>;
    optionLabel: import("@angular/core").InputSignal<string>;
    optionValue: import("@angular/core").InputSignal<string>;
    placeholder: import("@angular/core").InputSignal<string>;
    ariaLabel: import("@angular/core").InputSignal<string>;
    appendTo: import("@angular/core").InputSignal<"body" | "self">;
    styleClass: import("@angular/core").InputSignal<string>;
    panelStyleClass: import("@angular/core").InputSignal<string>;
    disabled: import("@angular/core").InputSignal<boolean>;
}
//# sourceMappingURL=ui-select.component.d.ts.map