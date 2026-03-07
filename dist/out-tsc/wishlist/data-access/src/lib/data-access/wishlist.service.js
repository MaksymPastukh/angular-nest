import { __decorate } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config';
let WishlistService = class WishlistService {
    http = inject(HttpClient);
    baseUrl = `${FRONTEND_CONFIG.api}wishlist`;
    getWishlist(params = {}) {
        const limit = params.limit ?? 20;
        let httpParams = new HttpParams().set('limit', String(limit));
        if (params.cursor)
            httpParams = httpParams.set('cursor', params.cursor);
        return this.http.get(this.baseUrl, { params: httpParams }).pipe(map((res) => ({
            ...res,
            items: res.items.map((i) => ({
                ...i,
                addedAt: new Date(i.addedAt),
            })),
        })));
    }
    addItem(productId, body = {}) {
        return this.http.put(`${this.baseUrl}/items/${productId}`, body).pipe(map((res) => ({
            ...res,
            addedAt: new Date(res.addedAt),
        })));
    }
    removeItem(productId) {
        return this.http.delete(`${this.baseUrl}/items/${productId}`);
    }
    clear() {
        return this.http.delete(this.baseUrl);
    }
    contains(productIds) {
        const ids = productIds.slice(0, 200);
        const params = new HttpParams().set('ids', ids.join(','));
        return this.http.get(`${this.baseUrl}/contains`, { params });
    }
    count() {
        return this.http.get(`${this.baseUrl}/count`);
    }
};
WishlistService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], WishlistService);
export { WishlistService };
