import { prisma } from '../../../database/prismaClient';

export class ListCarsUseCase {
  async list() {
    const cars = await prisma.cars.findMany({
      select: {
        id: true,
        title: true,
        specs: true,
        in_rent: true,
        until_rent: true,
        price: true,
        created_at: true,
        id_user_rent: true,
      },
    });

    return { totalCars: cars.length, cars };
  }
}
