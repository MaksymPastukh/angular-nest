import { HttpParams } from '@angular/common/http';
export function toHttpParams(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null)
            continue;
        if (Array.isArray(value)) {
            value.forEach((v) => {
                httpParams = httpParams.append(key, String(v));
            });
        }
        else {
            httpParams = httpParams.set(key, String(value));
        }
    }
    return httpParams;
}
