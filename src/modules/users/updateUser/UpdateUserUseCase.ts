import { prisma } from '../../../database/prismaClient';

interface IUpdateUser {
  name: string;
  email: string;
}

export class UpdateUserUseCase {
  async update({ name, email }: IUpdateUser) {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      throw new Error('User not found!');
    }

    const updateUser = await prisma.user.update({
      where: {
        id: userExists.id,
      },
      data: {
        name,
        email,
      },
    });

    const result = {
      id: updateUser.id,
      name: updateUser.name,
      email: updateUser.email,
    };

    return result;
  }
}
