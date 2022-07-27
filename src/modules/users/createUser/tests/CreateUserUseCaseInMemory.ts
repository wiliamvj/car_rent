import { v4 as uuid } from 'uuid';

interface ICreateUserInMemory {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCaseInMemory {
  async create({ name, email, password }: ICreateUserInMemory) {
    const user = [];

    user.push({ name, email, password });

    const result = {
      id: uuid(),
      name,
      email,
    };

    return result;
  }
}
