import { v4 as uuid } from 'uuid';

import { UpdateUserUseCaseInMemory } from './UpdateUserUseCaseInMemory';

describe('Update user', () => {
  const updateUserUseCaseInMemory = new UpdateUserUseCaseInMemory();

  it('I hope the user updated is with these values', async () => {
    const userData = {
      id: uuid(),
      name: 'Wiliam',
      email: 'email@email.com',
    };

    const user = await updateUserUseCaseInMemory.update(userData);

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });
});
