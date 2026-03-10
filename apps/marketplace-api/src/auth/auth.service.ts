import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthRepository } from './auth.repository';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponse, JwtPayload } from './interfaces/auth-response.interface';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }

  private generateTokens(user: UserDocument): AuthResponse {
    const payload: JwtPayload = {
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
    };

    const access_token = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });
    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    return {
      access_token,
      refresh_token,
      user: {
        id: user._id.toString(),
        email: user.email,
        firstName: user.firstName,
        role: user.role,
      },
    };
  }

  public async register(registerDto: RegisterDto): Promise<AuthResponse> {
    if (registerDto.password !== registerDto.confirmPassword) {
      throw new UnauthorizedException('Passwords do not match');
    }

    const normalizedEmail = this.normalizeEmail(registerDto.email);
    const existingUser = await this.authRepository.findByEmail(normalizedEmail);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const passwordHash = await bcrypt.hash(registerDto.password, 10);
    const user = await this.authRepository.createUser({
      firstName: registerDto.firstName,
      email: normalizedEmail,
      passwordHash,
    });

    return this.generateTokens(user);
  }

  public async login(loginDto: LoginDto): Promise<AuthResponse> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    await this.authRepository.updateLastLogin(user._id.toString(), new Date());

    return this.generateTokens(user);
  }

  public async validateUser(email: string, password: string): Promise<UserDocument | null> {
    const normalizedEmail = this.normalizeEmail(email);
    const user = await this.authRepository.findByEmail(normalizedEmail);
    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  public async refreshTokens(refreshToken: string): Promise<AuthResponse> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(refreshToken);
      const user = await this.authRepository.findById(payload.sub);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return this.generateTokens(user);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  public async getProfile(userId: string) {
    const user = await this.authRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      id: user._id.toString(),
      firstName: user.firstName,
      email: user.email,
      role: user.role,
      isEmailVerified: user.isEmailVerified,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
