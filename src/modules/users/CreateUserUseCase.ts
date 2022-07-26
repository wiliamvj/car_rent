import { prisma } from '../../database/prismaClient';
import { hash } from 'bcrypt';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  async create({ name, email, password }: ICreateUser) {
    console.log({ name, email, password });
    const userExists = await prisma.user.findFirst({
      where: {
        email: {
          mode: 'insensitive',
        },
      },
    });

    if (userExists) {
      throw new Error('User alredy exists!');
    }

    const hashPassword = await hash(password, 10);

    const saveUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    const result = {
      name: saveUser.name,
      email: saveUser.email,
    };

    return result;
  }
}
