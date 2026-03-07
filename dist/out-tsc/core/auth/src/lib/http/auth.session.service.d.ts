import { UserRole } from '../domain/enums/user-role.enum';
import { CurrentUserResponseInterface, User } from '../domain/interfaces/current-user.interface';
import { LoadSessionInterface } from '../domain/interfaces/get-tokens.interface';
export declare class AuthSessionService {
    setItem(key: string, value: unknown): void;
    saveAuthResponse(response: CurrentUserResponseInterface): void;
    clear(): void;
    getAccessToken(): string | null;
    getRefreshToken(): string | null;
    getUser(): User | null;
    isAuthenticated(): boolean;
    hasRole(role: UserRole | string): boolean;
    loadSession(): LoadSessionInterface | null;
}
//# sourceMappingURL=auth.session.service.d.ts.map