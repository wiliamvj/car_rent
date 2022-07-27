import { v4 as uuid } from 'uuid';

import { DeleteCarUseCaseInMemory } from './DeleteCarUseCaseInMemory';

describe('Delete car', () => {
  it('I hope the car is deleted', async () => {
    const deleteCarUseCaseInMemory = new DeleteCarUseCaseInMemory();

    const car = await deleteCarUseCaseInMemory.delete({ id: uuid() });

    expect(car).toHaveProperty('message');
  });
});
