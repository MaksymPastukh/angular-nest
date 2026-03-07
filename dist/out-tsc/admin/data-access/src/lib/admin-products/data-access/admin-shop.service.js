import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config';
let AdminShopService = class AdminShopService {
    http = inject(HttpClient);
    apiUrl = `${FRONTEND_CONFIG.api}products`;
    createProduct(product) {
        return this.http.post(this.apiUrl, product);
    }
    /**
     * Загружает несколько изображений продукта на сервер (до 3 штук)
     * @param files - массив файлов изображений (максимум 3)
     * @returns Observable с массивом путей к загруженным изображениям
     */
    uploadImages(files) {
        const formData = new FormData();
        // Добавляем все файлы в FormData с одинаковым ключом 'images'
        files.forEach((file) => {
            formData.append('images', file);
        });
        return this.http.post(`${this.apiUrl}/upload-images`, formData);
    }
};
AdminShopService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AdminShopService);
export { AdminShopService };
//# sourceMappingURL=admin-shop.service.js.map