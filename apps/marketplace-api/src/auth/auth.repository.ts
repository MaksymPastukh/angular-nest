import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument, UserRole } from './schemas/user.schema';

interface CreateUserData {
  firstName: string;
  email: string;
  passwordHash: string;
  role?: UserRole;
  isEmailVerified?: boolean;
}

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  public async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  public async findById(id: string): Promise<UserDocument | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }

    return this.userModel.findById(id).exec();
  }

  public async createUser(data: CreateUserData): Promise<UserDocument> {
    const user = new this.userModel({
      firstName: data.firstName,
      email: data.email,
      passwordHash: data.passwordHash,
      role: data.role ?? 'user',
      isEmailVerified: data.isEmailVerified ?? false,
      refreshTokenHash: null,
      lastLoginAt: null,
    });

    return user.save();
  }

  public async updateLastLogin(userId: string, date: Date): Promise<UserDocument | null> {
    return this.userModel
      .findByIdAndUpdate(userId, { lastLoginAt: date }, { new: true })
      .exec();
  }

  public async saveRefreshTokenHash(
    userId: string,
    hash: string | null,
  ): Promise<UserDocument | null> {
    return this.userModel
      .findByIdAndUpdate(userId, { refreshTokenHash: hash }, { new: true })
      .exec();
  }
}
