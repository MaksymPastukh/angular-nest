import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { AddWishlistItemBody } from '../domain/interfaces/add-wishlist-item-body.interface'
import { AddWishlistItemResponse } from '../domain/interfaces/add-wishlist-response.interface'
import { ContainsResponse } from '../domain/interfaces/contains-response.interface'
import { GetWishlistParams } from '../domain/interfaces/get-wishlist-params.interface'
import { GetWishlistResponse } from '../domain/interfaces/get-wishlist-response.interface'
import { WishlistCountResponse } from '../domain/interfaces/wishlist-count-response.interface'

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = `${environment.api}wishlist`

  getWishlist(params: GetWishlistParams = {}): Observable<GetWishlistResponse> {
    const limit = params.limit ?? 20

    let httpParams = new HttpParams().set('limit', String(limit))
    if (params.cursor) httpParams = httpParams.set('cursor', params.cursor)

    return this.http.get<GetWishlistResponse>(this.baseUrl, { params: httpParams }).pipe(
      map(
        (res): GetWishlistResponse => ({
          ...res,
          items: res.items.map((i) => ({
            ...i,
            addedAt: new Date(i.addedAt),
          })),
        })
      )
    )
  }

  addItem(productId: string, body: AddWishlistItemBody = {}): Observable<AddWishlistItemResponse> {
    return this.http.put<AddWishlistItemResponse>(`${this.baseUrl}/items/${productId}`, body).pipe(
      map(
        (res): AddWishlistItemResponse => ({
          ...res,
          addedAt: new Date(res.addedAt),
        })
      )
    )
  }

  removeItem(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/items/${productId}`)
  }

  clear(): Observable<void> {
    return this.http.delete<void>(this.baseUrl)
  }

  contains(productIds: string[]): Observable<ContainsResponse> {
    const ids: string[] = productIds.slice(0, 200)
    const params = new HttpParams().set('ids', ids.join(','))
    return this.http.get<ContainsResponse>(`${this.baseUrl}/contains`, { params })
  }

  count(): Observable<WishlistCountResponse> {
    return this.http.get<WishlistCountResponse>(`${this.baseUrl}/count`)
  }
}
