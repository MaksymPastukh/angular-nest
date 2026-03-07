import { CatalogFilterParamsInterface } from '../domain/interfaces/catalog-filter-params.interface';
import type { QueryParamsInterface } from '../domain/types/query-params.type';
type ProductFilterParams = CatalogFilterParamsInterface;
/**
 * Конвертирует API фильтры в query параметры для URL
 * Убирает дефолтные значения чтобы URL был чище
 */
export declare function filtersToQueryParams(filters: ProductFilterParams): QueryParamsInterface;
export {};
//# sourceMappingURL=filtersToQueryParams.util.d.ts.map