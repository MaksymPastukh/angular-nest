export type FacetsPreviewRequest =
  | {
      activeKey: string
      params: QueryParamsFacets
      previewProductType: string
      previewDressStyle?: never
    }
  | {
      activeKey: string
      params: QueryParamsFacets
      previewDressStyle: string
      previewProductType?: never
    }

export type QueryPrimitiveFacets = string | number | boolean
export type QueryValueFacets = QueryPrimitiveFacets | readonly QueryPrimitiveFacets[]

export type QueryParamsFacets = Record<string, QueryValueFacets>
export type FacetsPreviewMode = 'productType' | 'dressStyle'
