import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserRole = 'user' | 'admin';

@Schema({
  timestamps: true,
})
export class User {
  _id: Types.ObjectId;

  @Prop({
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100,
  })
  firstName: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  passwordHash: string;

  @Prop({
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  })
  role: UserRole;

  @Prop({
    type: String,
    default: null,
  })
  refreshTokenHash: string | null;

  @Prop({
    type: Boolean,
    default: false,
  })
  isEmailVerified: boolean;

  @Prop({
    type: Date,
    default: null,
  })
  lastLoginAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 }, { unique: true });
