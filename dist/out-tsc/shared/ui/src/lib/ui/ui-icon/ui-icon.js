import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
let UiIconComponent = class UiIconComponent {
    name = input.required();
    size = input('md');
    tone = input('default');
    cls = computed(() => {
        const base = `pi pi-${this.name()}`;
        const size = this.size() === 'sm' ? 'text-sm' : this.size() === 'lg' ? 'text-lg' : 'text-base';
        const tone = this.tone() === 'muted'
            ? 'text-gray-500'
            : this.tone() === 'danger'
                ? 'text-red-600'
                : 'text-gray-800';
        return `${base} ${size} ${tone}`;
    });
};
UiIconComponent = __decorate([
    Component({
        selector: 'app-ui-icon',
        standalone: true,
        template: `<i [class]="cls()"></i>`,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], UiIconComponent);
export { UiIconComponent };
