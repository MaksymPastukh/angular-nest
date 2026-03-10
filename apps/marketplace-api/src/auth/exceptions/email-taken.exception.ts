import { HttpStatus } from '@nestjs/common';
import { AuthErrorCode } from '../contracts/auth-error-code.enum';
import { AuthException } from './auth.exception';

export class EmailTakenException extends AuthException {
  constructor(message = 'User with this email already exists') {
    super(HttpStatus.CONFLICT, AuthErrorCode.EMAIL_TAKEN, message);
  }
}
