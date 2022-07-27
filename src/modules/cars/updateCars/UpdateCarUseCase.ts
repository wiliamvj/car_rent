import { prisma } from '../../../database/prismaClient';

interface IUpdateCar {
  title: string;
  specs: {
    brand: string;
    model: string;
    km: number;
    type: string;
    description: string;
  };
  price: number;
}

export class UpdateCarUseCase {
  async update({ title, specs, price }: IUpdateCar) {
    const carRent = await prisma.cars.create({
      data: {
        title,
        specs,
        price,
      },
    });

    const result = {
      id: carRent.id,
      title: carRent.title,
      specs: carRent.specs,
      price_rent: carRent.price,
      created_at: carRent.created_at,
    };

    return result;
  }
}
