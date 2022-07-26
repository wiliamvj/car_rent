import { prisma } from '../../../database/prismaClient';

interface ICarRent {
  id: string;
  id_user_rent: string;
}

export class CarRentUseCase {
  async rent({ id, id_user_rent }: ICarRent) {
    const carRent = await prisma.cars.findUnique({
      where: {
        id: id,
      },
    });

    const verifyUserHaveRent = await prisma.user.findUnique({
      where: {
        id: id_user_rent,
      },
      select: {
        Cars: true,
      },
    });

    if (verifyUserHaveRent?.Cars) {
      console.log(verifyUserHaveRent.Cars);
      throw new Error('you already have rental cars');
    }

    if (!carRent) {
      throw new Error('Car not found!');
    }

    if (carRent.id_user_rent !== null) {
      throw new Error('this car is already rented');
    }

    await prisma.cars.update({
      where: {
        id: carRent.id,
      },
      data: {
        id_user_rent,
      },
    });

    return { message: 'Car booked with successor' };
  }
}
