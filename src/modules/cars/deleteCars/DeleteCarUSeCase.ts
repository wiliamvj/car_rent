import { prisma } from '../../../database/prismaClient';

interface IDeleteCar {
  id: string;
}

export class DeleteCarUseCase {
  async delete({ id }: IDeleteCar) {
    const car = await prisma.cars.findUnique({
      where: {
        id: id,
      },
    });

    console.log(id);

    if (!car) {
      throw new Error('Car not found!');
    }

    await prisma.cars.delete({
      where: {
        id: car.id,
      },
    });

    return { message: 'car successfully deleted' };
  }
}
