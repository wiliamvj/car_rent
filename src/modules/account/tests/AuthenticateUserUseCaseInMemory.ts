import { v4 as uuid } from 'uuid';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUserInMemory {
  email: string;
  password: string;
}

export class AuthenticateUserInMemory {
  async login({ email }: IAuthenticateUserInMemory) {
    const token = sign({ email }, '8276184d16d361b3e60cf2071af9e40b', {
      subject: uuid(),
      expiresIn: '1d',
    });

    return { id: uuid(), token: token };
  }
}
