export interface BreadcrumbItemInterface {
  label: string
  routerLink?: string
  icon?: string
  queryParams?: Record<string, unknown>
  isActive?: boolean
}
