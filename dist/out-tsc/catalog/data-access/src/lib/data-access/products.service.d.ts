import { Observable } from 'rxjs';
import { ProductInterface } from '@marketplace/frontend-shared-types';
import { CatalogFilterParamsInterface, FacetsResponseInterface, ProductsResponseInterface, QueryParamsFacets } from '@marketplace/frontend-catalog-util';
export declare class ProductsService {
    private readonly http;
    private readonly apiUrl;
    getAllProducts(): Observable<ProductsResponseInterface>;
    getFacets(params: QueryParamsFacets): Observable<FacetsResponseInterface>;
    getFilteredProducts(filters: CatalogFilterParamsInterface): Observable<ProductsResponseInterface>;
    updateProduct(id: string, product: Partial<ProductInterface>): Observable<ProductInterface>;
    deleteProduct(id: string): Observable<void>;
    getCategories(): Observable<string[]>;
    getProductTypes(): Observable<string[]>;
    getDressStyles(): Observable<string[]>;
    getBrands(): Observable<string[]>;
    getColors(): Observable<string[]>;
    getSizes(): Observable<string[]>;
    searchProducts(searchQuery: string, additionalFilters?: Partial<CatalogFilterParamsInterface>): Observable<ProductsResponseInterface>;
    getTopRatedProducts(minRating?: number, limit?: number): Observable<ProductsResponseInterface>;
    getNewArrivals(limit?: number): Observable<ProductsResponseInterface>;
    getProductsByPriceRange(minPrice: number, maxPrice: number, additionalFilters?: Partial<CatalogFilterParamsInterface>): Observable<ProductsResponseInterface>;
    getCheapProducts(maxPrice?: number, limit?: number): Observable<ProductsResponseInterface>;
    toggleLike(productId: string): Observable<ProductInterface>;
    getLikedProducts(): Observable<ProductInterface[]>;
}
//# sourceMappingURL=products.service.d.ts.map