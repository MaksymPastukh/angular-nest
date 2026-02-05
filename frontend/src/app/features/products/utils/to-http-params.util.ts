import { HttpParams } from '@angular/common/http'
import {
  QueryParamsFacets,
  QueryPrimitiveFacets,
} from '../../catalog/domain/types/facets-preview-request.type'

export function toHttpParams(params: QueryParamsFacets): HttpParams {
  let httpParams = new HttpParams()

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue

    if (Array.isArray(value)) {
      value.forEach((v: QueryPrimitiveFacets) => {
        httpParams = httpParams.append(key, String(v))
      })
    } else {
      httpParams = httpParams.set(key, String(value))
    }
  }

  return httpParams
}
