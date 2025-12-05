import { UserDocument } from '../schema/user';

export type UserLogin = Pick<UserDocument, 'email' | 'password'>;

export type UserPayload = Omit<UserDocument, 'password' | 'age'>;

export interface RequestUser extends Request {
  user: UserPayload;
}
