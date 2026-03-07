import { __decorate } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config';
import { toHttpParams, } from '@marketplace/frontend-catalog-util';
let ProductsService = class ProductsService {
    http = inject(HttpClient);
    apiUrl = `${FRONTEND_CONFIG.api}products`;
    getAllProducts() {
        return this.http.get(this.apiUrl);
    }
    getFacets(params) {
        return this.http.get(`${this.apiUrl}/facets`, {
            params: toHttpParams(params),
        });
    }
    getFilteredProducts(filters) {
        // Создаем параметры запроса, исключая пустые значения
        let params = new HttpParams();
        // Добавляем параметры только если они определены
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                // Если значение это массив - добавляем каждый элемент отдельно
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        params = params.append(key, item.toString());
                    });
                }
                else {
                    params = params.append(key, String(value));
                }
            }
        });
        return this.http.get(this.apiUrl, { params });
    }
    updateProduct(id, product) {
        return this.http.patch(`${this.apiUrl}/${id}`, product);
    }
    deleteProduct(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    getCategories() {
        return this.http.get(`${this.apiUrl}/filters/categories`);
    }
    getProductTypes() {
        return this.http.get(`${this.apiUrl}/filters/product-types`);
    }
    getDressStyles() {
        return this.http.get(`${this.apiUrl}/filters/dress-styles`);
    }
    getBrands() {
        return this.http.get(`${this.apiUrl}/filters/brands`);
    }
    getColors() {
        return this.http.get(`${this.apiUrl}/filters/colors`);
    }
    getSizes() {
        return this.http.get(`${this.apiUrl}/filters/sizes`);
    }
    searchProducts(searchQuery, additionalFilters) {
        const filters = {
            search: searchQuery,
            ...(additionalFilters ?? {}),
        };
        return this.getFilteredProducts(filters);
    }
    getTopRatedProducts(minRating = 4.5, limit = 20) {
        return this.getFilteredProducts({
            minRating,
            sortBy: 'rating',
            order: 'desc',
            limit,
        });
    }
    getNewArrivals(limit = 15) {
        return this.getFilteredProducts({
            sortBy: 'createdAt',
            order: 'desc',
            limit,
        });
    }
    getProductsByPriceRange(minPrice, maxPrice, additionalFilters) {
        return this.getFilteredProducts({
            minPrice,
            maxPrice,
            ...additionalFilters,
        });
    }
    getCheapProducts(maxPrice = 2000, limit = 10) {
        return this.getFilteredProducts({
            maxPrice,
            sortBy: 'price',
            order: 'asc',
            limit,
        });
    }
    toggleLike(productId) {
        return this.http.post(`${this.apiUrl}/${productId}/like`, {});
    }
    getLikedProducts() {
        return this.http.get(`${this.apiUrl}/liked/me`);
    }
};
ProductsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductsService);
export { ProductsService };
