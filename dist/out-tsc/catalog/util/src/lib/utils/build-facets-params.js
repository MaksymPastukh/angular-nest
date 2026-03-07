import { mapToApiFilters } from './mapToApiFilters.util';
export const buildBaseFacetsParams = (selected) => {
    const api = mapToApiFilters(selected);
    const base = {};
    // category - ВАЖНО: учитываем для разделения Men/Women
    if (api.category) {
        base['category'] = api.category;
    }
    // price - опционально, можно учитывать ценовой диапазон
    if (api.minPrice !== undefined) {
        base['minPrice'] = api.minPrice;
    }
    if (api.maxPrice !== undefined) {
        base['maxPrice'] = api.maxPrice;
    }
    return base;
};
