export function toPrimeMenuItems(items) {
    return items.map((i) => ({
        label: i.label,
        icon: i.icon,
        routerLink: i.isActive ? undefined : i.routerLink,
        queryParams: i.isActive ? undefined : i.queryParams,
        styleClass: i.isActive ? 'active-breadcrumb' : undefined,
    }));
}
