import { UserRole } from '../domain/enums/user-role.enum';
import { CurrentUserResponseInterface, User } from '../domain/interfaces/current-user.interface';
import { LoadSessionInterface } from '../domain/interfaces/get-tokens.interface';
export declare class AuthState {
    private readonly session;
    private readonly _curerentUser;
    private readonly _accessToken;
    private readonly _refreshToken;
    readonly user: import("@angular/core").Signal<User | null>;
    readonly email: import("@angular/core").Signal<string | null>;
    readonly name: import("@angular/core").Signal<string>;
    readonly role: import("@angular/core").Signal<UserRole>;
    readonly isAuthenticated: import("@angular/core").Signal<boolean>;
    readonly isAdmin: import("@angular/core").Signal<boolean>;
    readonly isUser: import("@angular/core").Signal<boolean>;
    readonly isGuest: import("@angular/core").Signal<boolean>;
    bootstrap(): void;
    hydrate(session: LoadSessionInterface): void;
    applyAuthResponse(response: CurrentUserResponseInterface): void;
    clear(): void;
}
//# sourceMappingURL=auth-state.service.d.ts.map