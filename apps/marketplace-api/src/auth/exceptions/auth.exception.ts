import { HttpException, HttpStatus } from '@nestjs/common';
import { AuthErrorCode } from '../contracts/auth-error-code.enum';

interface AuthExceptionBody {
  statusCode: number;
  code: AuthErrorCode;
  message: string;
}

export class AuthException extends HttpException {
  constructor(statusCode: HttpStatus, code: AuthErrorCode, message: string) {
    const body: AuthExceptionBody = {
      statusCode,
      code,
      message,
    };

    super(body, statusCode);
  }
}
