import { HttpStatus } from '@nestjs/common';
import { AuthErrorCode } from '../contracts/auth-error-code.enum';
import { AuthException } from './auth.exception';

export class InvalidCredentialsException extends AuthException {
  constructor(message = 'Invalid credentials') {
    super(HttpStatus.UNAUTHORIZED, AuthErrorCode.INVALID_CREDENTIALS, message);
  }
}
