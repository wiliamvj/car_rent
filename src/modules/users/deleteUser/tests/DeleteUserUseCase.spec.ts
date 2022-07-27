import { v4 as uuid } from 'uuid';

import { DeleteUserUseCaseInMemory } from './DeleteUserUseCaseInMemory';

describe('Delete user', () => {
  it('I hope the user is deleted', async () => {
    const deleteUserUseCaseInMemory = new DeleteUserUseCaseInMemory();

    const user = await deleteUserUseCaseInMemory.delete({ id: uuid() });

    expect(user).toHaveProperty('message');
  });
});
