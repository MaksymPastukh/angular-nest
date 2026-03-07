import { FormControl } from '@angular/forms';
import { CreateProductFormDataInterface } from '@marketplace/frontend-admin-data-access';
type CreateProductFormModel = Omit<CreateProductFormDataInterface, 'colors' | 'sizes'> & {
    colors: FormControl<string[]>;
    sizes: FormControl<string[]>;
};
export declare class CreateProductPage {
    protected readonly store: {
        options: import("@ngrx/signals").DeepSignal<import("@marketplace/frontend-admin-data-access").CreateProductOptionsInterface>;
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
        uploadImages: import("@ngrx/signals/rxjs-interop").RxMethod<File[]>;
        createProduct: import("@ngrx/signals/rxjs-interop").RxMethod<CreateProductFormDataInterface>;
        resetState: () => void;
        clearEvent: () => void;
    } & import("@ngrx/signals").StateSource<{
        options: import("@marketplace/frontend-admin-data-access").CreateProductOptionsInterface;
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
    }>;
    private readonly messageService;
    protected readonly selectedFiles: import("@angular/core").WritableSignal<File[]>;
    protected readonly MIN_IMAGES = 3;
    protected readonly MAX_IMAGES = 10;
    protected readonly model: import("@angular/core").WritableSignal<CreateProductFormModel>;
    protected productForm: import("@angular/forms/signals").FieldTree<CreateProductFormModel>;
    constructor();
    /**
     * Обработчик выбора изображений (не загружает на сервер сразу)
     */
    protected onImageSelect(event: {
        files: File[];
    }): void;
    /**
     * Удаление конкретного изображения
     */
    protected removeImage(index: number): void;
    /**
     * Удаление всех выбранных изображений
     */
    protected clearAllImages(): void;
    protected onSubmit(event: Event): void;
    protected onReset(): void;
}
export {};
//# sourceMappingURL=create-product-page.d.ts.map