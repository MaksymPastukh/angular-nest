import { Types } from 'mongoose';
import { UserRole } from '../schemas/user.schema';

export interface UserWithId {
  _id: Types.ObjectId;
  email: string;
  firstName: string;
  role: UserRole;
  agreeToTerms?: boolean;
  subscribeToNewsletter?: boolean;
  isActive?: boolean;
}

export interface AuthUserData {
  id: string;
  email: string;
  firstName: string;
  role: UserRole;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: AuthUserData;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
}
