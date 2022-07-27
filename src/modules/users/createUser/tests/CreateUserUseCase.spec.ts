import { CreateUserUseCaseInMemory } from './CreateUserUseCaseInMemory';

describe('Create user', () => {
  const createUserUseCaseInMemory = new CreateUserUseCaseInMemory();

  it('I hope the user created is with these values', async () => {
    const userData = {
      name: 'Wiliam',
      email: 'email@email.com',
      password: '12345678',
    };

    const user = await createUserUseCaseInMemory.create(userData);

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('password');
  });
});
