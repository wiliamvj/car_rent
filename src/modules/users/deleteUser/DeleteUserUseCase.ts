import { prisma } from '../../../database/prismaClient';

interface IUpdateUser {
  id: string;
}

export class DeleteUserUseCase {
  async delete({ id }: IUpdateUser) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new Error('User not found!');
    }

    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return { message: 'user successfully deleted' };
  }
}
