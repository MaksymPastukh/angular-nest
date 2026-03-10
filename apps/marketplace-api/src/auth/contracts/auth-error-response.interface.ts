import { AuthErrorCode } from './auth-error-code.enum';

export interface AuthErrorResponse {
  statusCode: number;
  code: AuthErrorCode | string;
  message: string;
  timestamp: string;
  path: string;
}
