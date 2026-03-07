import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSessionService } from '../http/auth.session.service';
export const authGuard = (route, state) => {
    const session = inject(AuthSessionService);
    const router = inject(Router);
    return session.isAuthenticated()
        ? true
        : router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } });
};
