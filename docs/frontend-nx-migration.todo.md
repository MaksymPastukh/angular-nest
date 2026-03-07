# Frontend Nx Migration TODO

## Phase 0 - Nx baseline
- [x] Add root `eslint.config.mjs` with `@nx/enforce-module-boundaries`.
- [x] Add project tags for `frontend` app (`scope:frontend`, `type:app`).
- [x] Add project tags for `backend` app (`scope:backend`, `type:app`).

## Phase 1 - Shared/Core extraction
- [x] Create libs:
  - `frontend-shared-ui`
  - `frontend-shared-util`
  - `frontend-shared-types`
  - `frontend-core-auth`
  - `frontend-core-http`
  - `frontend-core-layout`
  - `frontend-core-config`
- [x] Move `src/app/shared/*` into `libs/frontend/shared/*`.
- [x] Move `src/app/core/*` into `libs/frontend/core/*`.
- [x] Rewire imports in app/features to new lib aliases.
- [x] Keep `apps/marketplace-web/src/app` as app-shell + features only.
- [x] Validate:
  - `nx run-many -t lint -p frontend-core-auth,frontend-core-http,frontend-core-layout,frontend-core-config,frontend-shared-ui,frontend-shared-util,frontend-shared-types`
  - `nx build frontend --configuration=development`

## Phase 2 - Auth domain
- [x] Create and move:
  - `frontend-auth-data-access`
  - `frontend-auth-feature-login`
  - `frontend-auth-feature-register`
  - `frontend-auth-ui`
- [x] Remove remaining auth code from `apps/marketplace-web/src/app/features/auth`.
- [x] Replace auth routes in `app.routes.ts` with lazy auth feature-lib components.

## Phase 3 - Catalog + Product
- [ ] Create and move:
  - `frontend-catalog-data-access`
  - `frontend-catalog-feature-catalog-page`
  - `frontend-catalog-feature-filters`
  - `frontend-catalog-ui`
  - `frontend-catalog-util`
  - `frontend-product-data-access`
  - `frontend-product-feature-product-detail`
  - `frontend-product-feature-product-questions`
  - `frontend-product-ui`
  - `frontend-product-util`
- [ ] Wire routes to feature libs.

## Phase 4 - Cart + Wishlist
- [ ] Create and move:
  - `frontend-cart-data-access`
  - `frontend-cart-feature-cart-page`
  - `frontend-cart-ui`
  - `frontend-wishlist-data-access`
  - `frontend-wishlist-feature-wishlist-page`
  - `frontend-wishlist-ui`

## Phase 5 - Admin
- [ ] Create and move:
  - `frontend-admin-data-access`
  - `frontend-admin-feature-dashboard`
  - `frontend-admin-feature-products`
  - `frontend-admin-feature-questions`
  - `frontend-admin-ui`

## Finalization
- [ ] Remove legacy `@/`, `@features`, `@shared`, `@core` aliases from app tsconfig.
- [ ] Remove leftover feature folders from `apps/marketplace-web/src/app/features` after migration.
- [ ] Enable and run `npm run lint:boundaries` in CI.
