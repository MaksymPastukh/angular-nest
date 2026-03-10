import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthErrorCode } from '../../auth/contracts/auth-error-code.enum';
import { AuthErrorResponse } from '../../auth/contracts/auth-error-response.interface';

type HttpExceptionPayload =
  | string
  | {
      message?: string | string[];
      error?: string;
      code?: string;
      statusCode?: number;
    };

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const { statusCode, code, message } = this.getErrorParts(exception);

    const errorResponse: AuthErrorResponse = {
      statusCode,
      code,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    response.status(statusCode).json(errorResponse);
  }

  private getErrorParts(exception: unknown): {
    statusCode: number;
    code: AuthErrorCode | string;
    message: string;
  } {
    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();
      const payload = exception.getResponse() as HttpExceptionPayload;

      if (typeof payload === 'string') {
        return {
          statusCode,
          code: this.getFallbackCode(statusCode),
          message: payload,
        };
      }

      const message = this.resolveMessage(payload);
      const code =
        typeof payload.code === 'string' ? payload.code : this.getFallbackCode(statusCode);

      return {
        statusCode,
        code,
        message,
      };
    }

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      code: AuthErrorCode.INTERNAL_ERROR,
      message: 'Internal server error',
    };
  }

  private resolveMessage(payload: Exclude<HttpExceptionPayload, string>): string {
    if (Array.isArray(payload.message)) {
      return payload.message.join('; ');
    }

    if (typeof payload.message === 'string' && payload.message.length > 0) {
      return payload.message;
    }

    if (typeof payload.error === 'string' && payload.error.length > 0) {
      return payload.error;
    }

    return 'Unexpected error';
  }

  private getFallbackCode(statusCode: number): AuthErrorCode | string {
    if (statusCode === HttpStatus.BAD_REQUEST) {
      return AuthErrorCode.VALIDATION_ERROR;
    }

    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      return AuthErrorCode.INTERNAL_ERROR;
    }

    return `HTTP_${statusCode}`;
  }
}
