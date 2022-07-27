import { v4 as uuid } from 'uuid';

export class ListCarsUseCaseInMemory {
  async list() {
    const result = {
      totalCars: 1,
      cars: [
        {
          id: uuid(),
          title: 'Wiliam Joaquim',
          specs: {
            brand: 'Tesla',
            model: 'Model S',
            km: 30.0,
            type: 'Eletric',
            description: 'Aproveite!',
          },
          in_rent: null,
          until_rent: null,
          price: 199.0,
          created_at: Date.now(),
          id_user_rent: null,
        },
      ],
    };

    return result;
  }
}
