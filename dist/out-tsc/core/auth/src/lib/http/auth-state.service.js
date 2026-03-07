import { __decorate } from "tslib";
import { computed, inject, Injectable, signal } from '@angular/core';
import { UserRole } from '../domain/enums/user-role.enum';
import { AuthSessionService } from './auth.session.service';
let AuthState = class AuthState {
    session = inject(AuthSessionService);
    _curerentUser = signal(null);
    _accessToken = signal(null);
    _refreshToken = signal(null);
    user = computed(() => this._curerentUser());
    email = computed(() => this._curerentUser()?.email ?? null);
    name = computed(() => this._curerentUser()?.firstName ?? 'Guest');
    role = computed(() => this._curerentUser()?.role ?? UserRole.GUEST);
    isAuthenticated = computed(() => !!this._accessToken());
    isAdmin = computed(() => this.role() === UserRole.ADMIN);
    isUser = computed(() => this.role() === UserRole.USER);
    isGuest = computed(() => !this.isAuthenticated());
    bootstrap() {
        const session = this.session.loadSession();
        if (!session) {
            return;
        }
        this.hydrate(session);
    }
    hydrate(session) {
        this._curerentUser.set(session.user);
        this._accessToken.set(session.accessToken);
        this._refreshToken.set(session.refreshToken);
    }
    applyAuthResponse(response) {
        this._curerentUser.set(response.user);
        this._accessToken.set(response.access_token);
        this._refreshToken.set(response.refresh_token);
    }
    clear() {
        this._curerentUser.set(null);
        this._accessToken.set(null);
        this._refreshToken.set(null);
    }
};
AuthState = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthState);
export { AuthState };
