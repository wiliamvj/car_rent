import { AuthenticateUserInMemory } from './AuthenticateUserUseCaseInMemory';

describe('User login', () => {
  it('I hope the user receives a token', async () => {
    const authenticateUserInMemory = new AuthenticateUserInMemory();

    const userData = {
      email: 'email@email.com',
      password: '12345678',
    };

    const user = await authenticateUserInMemory.login(userData);

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('token');
  });
});
