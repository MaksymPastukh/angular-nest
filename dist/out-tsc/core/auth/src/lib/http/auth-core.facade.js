import { __decorate } from "tslib";
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AUTH_MESSAGES } from '../domain/constants/auth-event-messages.constants';
import { AuthState } from './auth-state.service';
import { AuthSessionService } from './auth.session.service';
let AuthCoreFacade = class AuthCoreFacade {
    session = inject(AuthSessionService);
    authState = inject(AuthState);
    router = inject(Router);
    messageService = inject(MessageService);
    logout() {
        this.session.clear();
        this.authState.clear();
        this.messageService.add({
            severity: 'info',
            summary: AUTH_MESSAGES.logout.summary,
            detail: AUTH_MESSAGES.logout.detail,
        });
        void this.router.navigate(['/auth/login']);
    }
};
AuthCoreFacade = __decorate([
    Injectable({ providedIn: 'root' })
], AuthCoreFacade);
export { AuthCoreFacade };
