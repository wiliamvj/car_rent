import { v4 as uuid } from 'uuid';

export class ListUsersUseCaseInMemory {
  async list() {
    const result = {
      totalUsers: 2,
      users: [
        {
          id: uuid(),
          name: 'Wiliam Joaquim',
          email: 'teste@teste.com',
          Cars: [],
        },
      ],
    };

    return result;
  }
}
