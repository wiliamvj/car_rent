import { CreateCarUseCaseInMemory } from './CreateCarUseCaseInMemory';

describe('Create car', () => {
  it('I hope a vehicle is created for rent', async () => {
    const createCarUseCaseInMemory = new CreateCarUseCaseInMemory();

    const userData = {
      title: 'Tesla car',
      specs: {
        brand: 'Tesla',
        model: 'Model S',
        km: 30.0,
        type: 'Eletric',
        description: 'Aproveite!',
      },
      price: 199.0,
    };

    const car = await createCarUseCaseInMemory.create(userData);

    expect(car).toHaveProperty('id');
    expect(car).toHaveProperty('specs');
    expect(car.specs).toHaveProperty('brand');
    expect(car.specs).toHaveProperty('model');
    expect(car.specs).toHaveProperty('km');
    expect(car.specs).toHaveProperty('type');
    expect(car.specs).toHaveProperty('description');
    expect(car).toHaveProperty('price');
    expect(car).toHaveProperty('created_at');
  });
});
