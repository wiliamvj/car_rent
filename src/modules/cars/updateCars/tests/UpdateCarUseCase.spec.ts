import { v4 as uuid } from 'uuid';

import { UpdateCarUseCaseInMemory } from './UpdateCarUseCaseInMemory';

describe('Update car', () => {
  it('I hope a vehicle is updated', async () => {
    const updateCarUseCaseInMemory = new UpdateCarUseCaseInMemory();

    const userData = {
      id: uuid(),
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

    const car = await updateCarUseCaseInMemory.update(userData);

    expect(car).toHaveProperty('id');
    expect(car).toHaveProperty('specs');
    expect(car.specs).toHaveProperty('brand');
    expect(car.specs).toHaveProperty('model');
    expect(car.specs).toHaveProperty('km');
    expect(car.specs).toHaveProperty('type');
    expect(car.specs).toHaveProperty('description');
    expect(car).toHaveProperty('price');
  });
});
