import { ListUsersUseCaseInMemory } from './ListUsersUseCaseInMemory';

describe('List all users', () => {
  it('I hope you get at least 1 user', async () => {
    const listUsersUseCaseInMemory = new ListUsersUseCaseInMemory();

    const users = await listUsersUseCaseInMemory.list();

    expect(users).toHaveProperty('totalUsers');
    expect(users).toHaveProperty('users');

    expect(users.users[0]).toHaveProperty('id');
    expect(users.users[0]).toHaveProperty('name');
    expect(users.users[0]).toHaveProperty('email');
    expect(users.users[0]).toHaveProperty('Cars');
  });
});
