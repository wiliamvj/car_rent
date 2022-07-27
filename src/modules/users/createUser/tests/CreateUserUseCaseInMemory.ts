import { hash } from 'bcrypt';
import { v4 as uuid } from 'uuid';

interface ICreateUserInMemory {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCaseInMemory {
  async create({ name, email, password }: ICreateUserInMemory) {
    const hashPassword = await hash(password, 10);

    const result = {
      id: uuid(),
      name,
      email,
      password: hashPassword,
    };

    return result;
  }
}
