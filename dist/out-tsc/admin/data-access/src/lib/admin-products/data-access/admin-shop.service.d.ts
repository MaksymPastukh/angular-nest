import { ProductInterface } from '@marketplace/frontend-shared-types';
import { Observable } from 'rxjs';
import { CreateProductFormDataInterface } from '../domain/interfaces/create-product-formData.interface';
export declare class AdminShopService {
    private readonly http;
    private readonly apiUrl;
    createProduct(product: CreateProductFormDataInterface): Observable<ProductInterface>;
    /**
     * Загружает несколько изображений продукта на сервер (до 3 штук)
     * @param files - массив файлов изображений (максимум 3)
     * @returns Observable с массивом путей к загруженным изображениям
     */
    uploadImages(files: File[]): Observable<{
        imagePaths: string[];
    }>;
}
//# sourceMappingURL=admin-shop.service.d.ts.map