import { prisma } from '../../../database/prismaClient';

interface IUpdateUser {
  email: string;
}

export class DeleteUserUseCase {
  async delete({ email }: IUpdateUser) {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      throw new Error('User not found!');
    }

    await prisma.user.delete({
      where: {
        id: userExists.id,
      },
    });

    return { message: 'user successfully deleted' };
  }
}
