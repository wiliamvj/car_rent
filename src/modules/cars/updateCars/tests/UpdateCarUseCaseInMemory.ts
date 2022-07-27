interface IUpdateCarInMemory {
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

export class UpdateCarUseCaseInMemory {
  async update({ id, title, specs, price }: IUpdateCarInMemory) {
    const result = {
      id,
      title,
      specs: {
        brand: specs.brand,
        model: specs.model,
        km: specs.km,
        type: specs.type,
        description: specs.description,
      },
      price,
    };

    return result;
  }
}
