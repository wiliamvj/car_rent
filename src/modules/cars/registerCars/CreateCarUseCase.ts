import { prisma } from '../../../database/prismaClient';

interface ICreateCar {
  car_name: string;
  brand: string;
  price: number;
}

export class CreateCarUseCase {
  async create({ car_name, brand, price }: ICreateCar) {
    const carRent = await prisma.cars.create({
      data: {
        car_name,
        brand,
        price,
      },
    });

    const result = {
      id: carRent.id,
      car_name: carRent.car_name,
      brand: carRent.brand,
      price_rent: carRent.price,
      created_at: carRent.created_at,
    };

    return result;
  }
}
