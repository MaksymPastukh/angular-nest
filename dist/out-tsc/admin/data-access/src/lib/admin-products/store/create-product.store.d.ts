import { RxMethod } from '@ngrx/signals/rxjs-interop';
import { CreateProductFormDataInterface } from '../domain/interfaces/create-product-formData.interface';
export declare const CreateProductStore: import("@angular/core").Type<{
    options: import("@ngrx/signals").DeepSignal<import("../../..").CreateProductOptionsInterface>;
    uploadedImagePaths: import("@angular/core").Signal<string[]>;
    isUploadingImages: import("@angular/core").Signal<boolean>;
    isLoading: import("@angular/core").Signal<boolean>;
    error: import("@angular/core").Signal<string | null>;
    success: import("@angular/core").Signal<boolean>;
    event: import("@angular/core").Signal<{
        type: string;
        message?: string;
        productTitle?: string;
        count?: number;
    } | null>;
    uploadImages: RxMethod<File[]>;
    createProduct: RxMethod<CreateProductFormDataInterface>;
    resetState: () => void;
    clearEvent: () => void;
} & import("@ngrx/signals").StateSource<{
    options: import("../../..").CreateProductOptionsInterface;
    uploadedImagePaths: string[];
    isUploadingImages: boolean;
    isLoading: boolean;
    error: string | null;
    success: boolean;
    event: {
        type: string;
        message?: string;
        productTitle?: string;
        count?: number;
    } | null;
}>>;
//# sourceMappingURL=create-product.store.d.ts.map