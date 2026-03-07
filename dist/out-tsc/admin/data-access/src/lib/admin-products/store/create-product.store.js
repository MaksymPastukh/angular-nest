import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { AdminShopService } from '../data-access/admin-shop.service';
import { CATEGORIES, COLORS, DRESS_STYLES, PRODUCT_TYPES, SIZES, } from '../domain/constants/create-product.canstants';
const initialState = {
    options: {
        categories: CATEGORIES,
        productTypes: PRODUCT_TYPES,
        dressStyles: DRESS_STYLES,
        colors: COLORS,
        sizes: SIZES,
    },
    uploadedImagePaths: [],
    isUploadingImages: false,
    isLoading: false,
    error: null,
    success: false,
    event: null,
};
export const CreateProductStore = signalStore({ providedIn: 'root' }, withState(initialState), withMethods((store, productService = inject(AdminShopService)) => {
    const setUploadPending = () => {
        patchState(store, {
            isUploadingImages: true,
            error: null,
            uploadedImagePaths: [],
            event: null,
        });
    };
    const stopUpload = () => {
        patchState(store, { isUploadingImages: false });
    };
    const setCreatePending = () => {
        patchState(store, {
            isLoading: true,
            error: null,
            success: false,
            event: null,
        });
    };
    const stopCreate = () => {
        patchState(store, { isLoading: false });
    };
    const setFailure = (message) => {
        patchState(store, { error: message });
    };
    const getErrorMessage = (error, fallback) => {
        if (!(error instanceof HttpErrorResponse))
            return fallback;
        const apiMessage = error.error?.message;
        if (typeof apiMessage === 'string' && apiMessage.length > 0)
            return apiMessage;
        if (Array.isArray(apiMessage) && apiMessage.length > 0)
            return apiMessage.join(' ');
        return error.message ?? fallback;
    };
    const uploadImages = rxMethod(pipe(tap(() => setUploadPending()), switchMap((files) => productService.uploadImages(files).pipe(tapResponse({
        next: (response) => {
            patchState(store, {
                uploadedImagePaths: response.imagePaths,
                event: {
                    type: 'imagesUploaded',
                    count: response.imagePaths.length,
                },
            });
        },
        error: (e) => {
            const message = getErrorMessage(e, 'Не удалось загрузить изображения');
            patchState(store, {
                uploadedImagePaths: [],
                event: { type: 'imagesUploadError', message },
            });
            setFailure(message);
        },
        finalize: () => stopUpload(),
    })))));
    const createProduct = rxMethod(pipe(tap(() => setCreatePending()), switchMap((formData) => productService.createProduct(formData).pipe(tapResponse({
        next: (response) => {
            patchState(store, {
                success: true,
                event: {
                    type: 'productCreated',
                    productTitle: response.title,
                },
            });
        },
        error: (e) => {
            const message = getErrorMessage(e, 'Не удалось создать продукт');
            patchState(store, {
                success: false,
                event: { type: 'productCreateError', message },
            });
            setFailure(message);
        },
        finalize: () => stopCreate(),
    })))));
    const resetState = () => {
        patchState(store, {
            uploadedImagePaths: [],
            error: null,
            success: false,
            isLoading: false,
            isUploadingImages: false,
            event: null,
        });
    };
    const clearEvent = () => {
        patchState(store, { event: null });
    };
    return {
        uploadImages,
        createProduct,
        resetState,
        clearEvent,
    };
}));
//# sourceMappingURL=create-product.store.js.map