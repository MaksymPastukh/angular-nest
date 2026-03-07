import { RatingValueType } from './ui-rating.type';
export declare class UiRatingComponent {
    value: import("@angular/core").ModelSignal<RatingValueType>;
    stars: import("@angular/core").InputSignal<number>;
    readonly: import("@angular/core").InputSignal<boolean>;
    disabled: import("@angular/core").InputSignal<boolean>;
    rateCommitted: import("@angular/core").OutputEmitterRef<RatingValueType>;
    cancelCommitted: import("@angular/core").OutputEmitterRef<void>;
}
//# sourceMappingURL=ui-rating.component.d.ts.map