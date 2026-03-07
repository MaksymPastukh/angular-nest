import { Observable } from 'rxjs';
import { AddWishlistItemBody } from '../domain/interfaces/add-wishlist-item-body.interface';
import { AddWishlistItemResponse } from '../domain/interfaces/add-wishlist-response.interface';
import { ContainsResponse } from '../domain/interfaces/contains-response.interface';
import { GetWishlistParams } from '../domain/interfaces/get-wishlist-params.interface';
import { GetWishlistResponse } from '../domain/interfaces/get-wishlist-response.interface';
import { WishlistCountResponse } from '../domain/interfaces/wishlist-count-response.interface';
export declare class WishlistService {
    private readonly http;
    private readonly baseUrl;
    getWishlist(params?: GetWishlistParams): Observable<GetWishlistResponse>;
    addItem(productId: string, body?: AddWishlistItemBody): Observable<AddWishlistItemResponse>;
    removeItem(productId: string): Observable<void>;
    clear(): Observable<void>;
    contains(productIds: string[]): Observable<ContainsResponse>;
    count(): Observable<WishlistCountResponse>;
}
//# sourceMappingURL=wishlist.service.d.ts.map