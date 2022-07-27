import { prisma } from '../../../database/prismaClient';

interface IUpdateCar {
  id: string;
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
  async update({ id, title, specs, price }: IUpdateCar) {
    const carExists = await prisma.cars.findUnique({
      where: {
        id: id,
      },
    });

    if (!carExists) {
      throw new Error('Car not found!');
    }

    const updateCar = await prisma.cars.update({
      where: {
        id: id,
      },
      data: {
        title,
        specs,
        price,
      },
    });

    const result = {
      id: id,
      title: updateCar.title,
      specs: updateCar.specs,
      price: updateCar.price,
    };

    return result;
  }
}
