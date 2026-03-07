import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
let UISelect = class UISelect {
    value = model(null);
    options = input([]);
    optionLabel = input('label');
    optionValue = input('value');
    placeholder = input('');
    ariaLabel = input('');
    appendTo = input('body');
    styleClass = input('!border-0 !shadow-none !outline-none focus:!ring-0 !bg-transparent');
    panelStyleClass = input('');
    disabled = input(false);
};
UISelect = __decorate([
    Component({
        selector: 'app-ui-select',
        imports: [Select, FormsModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `<p-select
    [options]="options()"
    [optionLabel]="optionLabel()"
    [optionValue]="optionValue()"
    [appendTo]="appendTo()"
    [class]="styleClass()"
    [panelStyleClass]="panelStyleClass()"
    [placeholder]="placeholder()"
    [ariaLabel]="ariaLabel()"
    [disabled]="disabled()"
    [ngModel]="value()"
    (ngModelChange)="value.set($event)"
  />`,
    })
], UISelect);
export { UISelect };
