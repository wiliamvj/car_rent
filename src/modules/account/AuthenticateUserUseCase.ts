import { prisma } from '../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUseCase {
  async login({ email, password }: IAuthenticateUser) {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          mode: 'insensitive',
        },
      },
    });

    if (!user) {
      throw new Error('Email or password invalid!');
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new Error('Email or password invalid!');
    }

    const token = sign({ email }, '8276184d16d361b3e60cf2071af9e40b', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}
