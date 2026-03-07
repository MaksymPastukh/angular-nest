import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AUTHORIZATION_STATE } from '../domain/constants/authorization.constants';
let AuthSessionService = class AuthSessionService {
    setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }
    saveAuthResponse(response) {
        localStorage.setItem(AUTHORIZATION_STATE.authAccessTokenKey, response.access_token);
        localStorage.setItem(AUTHORIZATION_STATE.authRefreshTokenKey, response.refresh_token);
        this.setItem(AUTHORIZATION_STATE.currentUserKey, response.user);
    }
    clear() {
        localStorage.removeItem(AUTHORIZATION_STATE.authAccessTokenKey);
        localStorage.removeItem(AUTHORIZATION_STATE.authRefreshTokenKey);
        localStorage.removeItem(AUTHORIZATION_STATE.currentUserKey);
    }
    getAccessToken() {
        return localStorage.getItem(AUTHORIZATION_STATE.authAccessTokenKey);
    }
    getRefreshToken() {
        return localStorage.getItem(AUTHORIZATION_STATE.authRefreshTokenKey);
    }
    getUser() {
        const userData = localStorage.getItem(AUTHORIZATION_STATE.currentUserKey);
        if (!userData)
            return null;
        try {
            return JSON.parse(userData);
        }
        catch {
            return null;
        }
    }
    isAuthenticated() {
        return !!this.getAccessToken();
    }
    hasRole(role) {
        const userRole = this.getUser()?.role;
        return userRole !== undefined && userRole === role;
    }
    loadSession() {
        const accessToken = this.getAccessToken();
        const refreshToken = this.getRefreshToken();
        const user = this.getUser();
        if (!accessToken || !refreshToken || !user) {
            return null;
        }
        else {
            return {
                accessToken,
                refreshToken,
                user,
            };
        }
    }
};
AuthSessionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthSessionService);
export { AuthSessionService };
