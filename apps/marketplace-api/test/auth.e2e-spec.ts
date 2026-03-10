import { randomUUID } from 'crypto';
import { INestApplication, Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { Types } from 'mongoose';
import request from 'supertest';
import { AuthController } from '../src/auth/auth.controller';
import { AuthRepository } from '../src/auth/auth.repository';
import { AuthService } from '../src/auth/auth.service';
import { UserDocument, UserRole } from '../src/auth/schemas/user.schema';
import { HttpExceptionFilter } from '../src/common/filters/http-exception.filter';

interface StoredUser {
  _id: Types.ObjectId;
  firstName: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  refreshTokenHash: string | null;
  isEmailVerified: boolean;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateUserData {
  firstName: string;
  email: string;
  passwordHash: string;
  role?: UserRole;
  isEmailVerified?: boolean;
}

class InMemoryAuthRepository {
  private readonly usersById = new Map<string, StoredUser>();
  private readonly usersByEmail = new Map<string, StoredUser>();

  public async findByEmail(email: string): Promise<UserDocument | null> {
    const user = this.usersByEmail.get(email);
    if (!user) {
      return null;
    }

    return this.toDocument(user);
  }

  public async findById(id: string): Promise<UserDocument | null> {
    const user = this.usersById.get(id);
    if (!user) {
      return null;
    }

    return this.toDocument(user);
  }

  public async createUser(data: CreateUserData): Promise<UserDocument> {
    if (this.usersByEmail.has(data.email)) {
      throw {
        code: 11000,
        keyPattern: { email: 1 },
        keyValue: { email: data.email },
      };
    }

    const now = new Date();
    const user: StoredUser = {
      _id: new Types.ObjectId(),
      firstName: data.firstName,
      email: data.email,
      passwordHash: data.passwordHash,
      role: data.role ?? 'user',
      refreshTokenHash: null,
      isEmailVerified: data.isEmailVerified ?? false,
      lastLoginAt: null,
      createdAt: now,
      updatedAt: now,
    };

    const userId = user._id.toString();
    this.usersById.set(userId, user);
    this.usersByEmail.set(user.email, user);

    return this.toDocument(user);
  }

  public async updateLastLogin(userId: string, date: Date): Promise<UserDocument | null> {
    const user = this.usersById.get(userId);
    if (!user) {
      return null;
    }

    user.lastLoginAt = date;
    user.updatedAt = new Date();
    return this.toDocument(user);
  }

  public async saveRefreshTokenHash(
    userId: string,
    hash: string | null,
  ): Promise<UserDocument | null> {
    const user = this.usersById.get(userId);
    if (!user) {
      return null;
    }

    user.refreshTokenHash = hash;
    user.updatedAt = new Date();
    return this.toDocument(user);
  }

  private toDocument(user: StoredUser): UserDocument {
    return user as unknown as UserDocument;
  }
}

interface JwtPayloadLike {
  sub: string;
  email: string;
  role: UserRole;
}

class FakeJwtService {
  private readonly tokens = new Map<string, JwtPayloadLike>();

  public sign(payload: JwtPayloadLike): string {
    const token = `${payload.sub}.${randomUUID()}`;
    this.tokens.set(token, payload);
    return token;
  }

  public verify<T>(token: string): T {
    const payload = this.tokens.get(token);
    if (!payload) {
      throw new Error('Invalid token');
    }

    return payload as T;
  }
}

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: AuthRepository,
      useClass: InMemoryAuthRepository,
    },
    {
      provide: JwtService,
      useClass: FakeJwtService,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
class AuthE2eModule {}

describe('Auth (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthE2eModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('POST /api/auth/register', () => {
    it('success', async () => {
      const response = await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'Max@Example.COM',
        password: 'StrongPass1',
        agreeToTerms: true,
      });

      expect(response.status).toBe(201);
      expect(response.body.access_token).toEqual(expect.any(String));
      expect(response.body.refresh_token).toEqual(expect.any(String));
      expect(response.body.user.email).toBe('max@example.com');
    });

    it('duplicate email', async () => {
      await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'max@example.com',
        password: 'StrongPass1',
        agreeToTerms: true,
      });

      const response = await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'max@example.com',
        password: 'StrongPass1',
        agreeToTerms: true,
      });

      expect(response.status).toBe(409);
      expect(response.body.code).toBe('EMAIL_TAKEN');
    });

    it('weak password', async () => {
      const response = await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'max@example.com',
        password: 'weakpass1',
        agreeToTerms: true,
      });

      expect(response.status).toBe(422);
      expect(response.body.code).toBe('WEAK_PASSWORD');
    });

    it('invalid dto', async () => {
      const response = await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'bad-email',
        password: 'StrongPass1',
        agreeToTerms: true,
        extra: true,
      });

      expect(response.status).toBe(400);
      expect(response.body.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('POST /api/auth/login', () => {
    it('success', async () => {
      await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'max@example.com',
        password: 'StrongPass1',
        agreeToTerms: true,
      });

      const response = await request(app.getHttpServer()).post('/api/auth/login').send({
        email: 'MAX@EXAMPLE.COM',
        password: 'StrongPass1',
      });

      expect(response.status).toBe(200);
      expect(response.body.access_token).toEqual(expect.any(String));
      expect(response.body.refresh_token).toEqual(expect.any(String));
      expect(response.body.user.email).toBe('max@example.com');
    });

    it('invalid credentials', async () => {
      await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'max@example.com',
        password: 'StrongPass1',
        agreeToTerms: true,
      });

      const unknownEmailResponse = await request(app.getHttpServer())
        .post('/api/auth/login')
        .send({
          email: 'unknown@example.com',
          password: 'StrongPass1',
        });

      const wrongPasswordResponse = await request(app.getHttpServer())
        .post('/api/auth/login')
        .send({
          email: 'max@example.com',
          password: 'WrongPass1',
        });

      expect(unknownEmailResponse.status).toBe(401);
      expect(unknownEmailResponse.body.code).toBe('INVALID_CREDENTIALS');
      expect(wrongPasswordResponse.status).toBe(401);
      expect(wrongPasswordResponse.body.code).toBe('INVALID_CREDENTIALS');
    });

    it('invalid dto', async () => {
      const response = await request(app.getHttpServer()).post('/api/auth/login').send({
        email: 'not-an-email',
      });

      expect(response.status).toBe(400);
      expect(response.body.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('GET /api/auth/check-email', () => {
    it('available true', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/auth/check-email')
        .query({ email: 'available@example.com' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ available: true });
    });

    it('available false', async () => {
      await request(app.getHttpServer()).post('/api/auth/register').send({
        firstName: 'Max',
        email: 'taken@example.com',
        password: 'StrongPass1',
        agreeToTerms: true,
      });

      const response = await request(app.getHttpServer())
        .get('/api/auth/check-email')
        .query({ email: 'taken@example.com' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ available: false });
    });

    it('invalid email', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/auth/check-email')
        .query({ email: 'not-an-email' });

      expect(response.status).toBe(400);
      expect(response.body.code).toBe('VALIDATION_ERROR');
    });

    it('throttled', async () => {
      for (let index = 0; index < 20; index += 1) {
        const response = await request(app.getHttpServer())
          .get('/api/auth/check-email')
          .query({ email: `load-${index}@example.com` });

        expect(response.status).toBe(200);
      }

      const throttledResponse = await request(app.getHttpServer())
        .get('/api/auth/check-email')
        .query({ email: 'throttled@example.com' });

      expect(throttledResponse.status).toBe(429);
    });
  });
});
