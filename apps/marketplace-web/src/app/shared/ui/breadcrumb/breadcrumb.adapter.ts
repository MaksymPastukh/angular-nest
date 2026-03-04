import type { MenuItem } from 'primeng/api'
import { BreadcrumbItemInterface } from './breadcrumb.types'

export function toPrimeMenuItems(items: BreadcrumbItemInterface[]): MenuItem[] {
  return items.map((i) => ({
    label: i.label,
    icon: i.icon,
    routerLink: i.isActive ? undefined : i.routerLink,
    queryParams: i.isActive ? undefined : i.queryParams,
    styleClass: i.isActive ? 'active-breadcrumb' : undefined,
  }))
}
