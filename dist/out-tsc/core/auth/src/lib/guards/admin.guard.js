import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../domain/enums/user-role.enum';
import { AuthSessionService } from '../http/auth.session.service';
export const adminGuard = (route, state) => {
    const session = inject(AuthSessionService);
    const router = inject(Router);
    if (!session.isAuthenticated()) {
        return router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } });
    }
    return session.hasRole(UserRole.ADMIN) ? true : router.createUrlTree(['/']);
};
