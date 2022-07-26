import { prisma } from '../../../database/prismaClient';

export class ListCarsUseCase {
  async list() {
    const cars = await prisma.cars.findMany({
      select: {
        id: true,
        car_name: true,
        brand: true,
        price: true,
        created_at: true,
        id_user_rent: true,
      },
    });

    return { totalCars: cars.length, cars };
  }
}
