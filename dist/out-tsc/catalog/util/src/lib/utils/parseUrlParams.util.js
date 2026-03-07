function toIntOrUndef(v) {
    if (typeof v !== 'string')
        return undefined;
    const n = Number.parseInt(v, 10);
    return Number.isFinite(n) ? n : undefined;
}
function toStringArray(v) {
    if (typeof v === 'string')
        return [v];
    if (Array.isArray(v))
        return v.filter((x) => typeof x === 'string');
    return [];
}
export function parseUrlParams(params) {
    return {
        // Цена
        minPrice: toIntOrUndef(params['minPrice']),
        maxPrice: toIntOrUndef(params['maxPrice']),
        // Размеры / Цвета
        sizes: toStringArray(params['size']),
        colors: toStringArray(params['color']),
        // Категория
        category: typeof params['category'] === 'string' ? params['category'] : undefined,
        // Подкатегория / Стиль / Бренд
        productType: typeof params['productType'] === 'string' ? params['productType'] : undefined,
        dressStyle: typeof params['dressStyle'] === 'string' ? params['dressStyle'] : undefined,
        brand: typeof params['brand'] === 'string' ? params['brand'] : undefined,
        // Поиск
        search: typeof params['search'] === 'string' ? params['search'] : undefined,
        // Пагинация
        page: toIntOrUndef(params['page']),
        limit: toIntOrUndef(params['limit']),
        // Сортировка
        sortBy: params['sortBy'],
        order: params['order'],
    };
}
