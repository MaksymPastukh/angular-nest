export const CATALOG_ROUTES = [
    {
        path: '',
        loadComponent: () => import('./pages/catalog-page/catalog-page').then((c) => c.CatalogPage),
    },
];
