import { prisma } from '../../../database/prismaClient';

export class ListUserUseCase {
  async list() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        Cars: true,
      },
    });

    return { totalUsers: users.length, users };
  }
}
