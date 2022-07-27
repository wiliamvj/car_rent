import { ListCarsUseCaseInMemory } from './ListCarsUseCaseInMemory';

describe('List all cars', () => {
  it('I hope you have a vehicle', async () => {
    const listCarsUseCaseInMemory = new ListCarsUseCaseInMemory();

    const carsRent = await listCarsUseCaseInMemory.list();

    expect(carsRent.cars[0]).toHaveProperty('id');
    expect(carsRent.cars[0]).toHaveProperty('title');
    expect(carsRent.cars[0]).toHaveProperty('specs');

    expect(carsRent.cars[0].specs).toHaveProperty('brand');
    expect(carsRent.cars[0].specs).toHaveProperty('model');
    expect(carsRent.cars[0].specs).toHaveProperty('km');
    expect(carsRent.cars[0].specs).toHaveProperty('type');
    expect(carsRent.cars[0].specs).toHaveProperty('description');

    expect(carsRent.cars[0]).toHaveProperty('in_rent');
    expect(carsRent.cars[0]).toHaveProperty('until_rent');
    expect(carsRent.cars[0]).toHaveProperty('price');
    expect(carsRent.cars[0]).toHaveProperty('created_at');
    expect(carsRent.cars[0]).toHaveProperty('id_user_rent');
  });
});
