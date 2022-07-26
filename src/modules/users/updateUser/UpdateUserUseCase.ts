import { prisma } from '../../../database/prismaClient';

interface IUpdateUser {
  id: string;
  name: string;
  email: string;
}

export class UpdateUserUseCase {
  async update({ id, name, email }: IUpdateUser) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new Error('User not found!');
    }

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
      },
    });

    const result = {
      id: id,
      name: updateUser.name,
      email: updateUser.email,
    };

    return result;
  }
}
