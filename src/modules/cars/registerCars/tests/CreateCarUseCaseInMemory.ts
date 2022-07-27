import { v4 as uuid } from 'uuid';

interface ICreateCarInMemory {
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

export class CreateCarUseCaseInMemory {
  async create({ title, specs, price }: ICreateCarInMemory) {
    const result = {
      id: uuid(),
      title,
      specs: {
        brand: specs.brand,
        model: specs.model,
        km: specs.km,
        type: specs.type,
        description: specs.description,
      },
      price,
      created_at: Date.now(),
    };

    return result;
  }
}
