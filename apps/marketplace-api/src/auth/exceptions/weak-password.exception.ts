import { HttpStatus } from '@nestjs/common';
import { AuthErrorCode } from '../contracts/auth-error-code.enum';
import { AuthException } from './auth.exception';

export class WeakPasswordException extends AuthException {
  constructor(
    message = 'Password must contain at least 8 chars, 1 uppercase letter and 1 digit',
  ) {
    super(HttpStatus.UNPROCESSABLE_ENTITY, AuthErrorCode.WEAK_PASSWORD, message);
  }
}
