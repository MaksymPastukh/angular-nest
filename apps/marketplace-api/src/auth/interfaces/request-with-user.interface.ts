import { Request } from 'express';
import { UserRole } from '../schemas/user.schema';

export interface AuthenticatedUser {
  id: string;
  email: string;
  firstName: string;
  role: UserRole;
}

export interface RequestWithUser extends Request {
  user: AuthenticatedUser;
}
