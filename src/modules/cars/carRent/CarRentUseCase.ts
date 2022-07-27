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

    if (!carRent) {
      throw new Error('Car not found!');
    }

    if (carRent.id_user_rent !== null) {
      throw new Error('this car is already rented');
    }

    const verifyUserHaveRent = await prisma.user.findUnique({
      where: {
        id: id_user_rent,
      },
      select: {
        Cars: true,
      },
    });

    if (
      verifyUserHaveRent?.Cars === undefined ||
      verifyUserHaveRent?.Cars.length >= 1
    ) {
      throw new Error('you already have rental cars');
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

  async cancelRent({ id }: ICarRent) {
    const cancel = await prisma.cars.findUnique({
      where: {
        id: id,
      },
    });

    if (!cancel) {
      throw new Error('Car not found!');
    }

    await prisma.cars.update({
      where: {
        id: id,
      },
      data: {
        id_user_rent: null,
      },
    });

    return { message: 'Rent successfully removed' };
  }
}
