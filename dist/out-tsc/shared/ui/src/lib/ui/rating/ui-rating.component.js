import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
let UiRatingComponent = class UiRatingComponent {
    value = model(null);
    stars = input(5);
    readonly = input(false);
    disabled = input(false);
    rateCommitted = output();
    cancelCommitted = output();
};
UiRatingComponent = __decorate([
    Component({
        selector: 'app-ui-rating',
        standalone: true,
        imports: [FormsModule, Rating],
        template: `
    <p-rating
      [(ngModel)]="value"
      [readonly]="readonly()"
      [disabled]="disabled()"
      [stars]="stars()"
      [iconOnStyle]="{ color: '#facc15' }"
      [iconOffStyle]="{ color: '#d1d5db' }"
      (onRate)="rateCommitted.emit(value())"
      (onCancel)="cancelCommitted.emit()"
    />
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], UiRatingComponent);
export { UiRatingComponent };
