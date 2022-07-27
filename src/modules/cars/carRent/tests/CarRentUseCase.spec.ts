import { v4 as uuid } from 'uuid';

import { CarRentUseCase } from './CarRentUseCaseInMemory';

describe('Renting car', () => {
  it('I hope a success message', async () => {
    const carRentUseCase = new CarRentUseCase();

    const carRent = await carRentUseCase.rent({
      id: uuid(),
      id_user_rent: uuid(),
    });

    expect(carRent).toHaveProperty('message');
  });
});

describe('Cancel rent car', () => {
  it('I hope a success message', async () => {
    const carRentUseCase = new CarRentUseCase();

    const carCancelRent = await carRentUseCase.cancelRent({
      id: uuid(),
      id_user_rent: uuid(),
    });

    expect(carCancelRent).toHaveProperty('message');
  });
});
