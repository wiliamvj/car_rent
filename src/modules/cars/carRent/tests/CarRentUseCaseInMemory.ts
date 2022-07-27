interface ICarRentInMemory {
  id: string;
  id_user_rent: string;
  in_rent?: string;
  until_rent?: string;
}

export class CarRentUseCase {
  async rent({ id, id_user_rent, in_rent, until_rent }: ICarRentInMemory) {
    if (id.length !== 36) {
      throw new Error('uuid is invalid!');
    }
    return { message: 'Car booked successfully' };
  }

  async cancelRent({ id, id_user_rent }: ICarRentInMemory) {
    if (id.length !== 36) {
      throw new Error('uuid is invalid!');
    }
    return { message: 'Rent successfully removed' };
  }
}
