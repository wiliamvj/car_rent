import { v4 as uuid } from 'uuid';

interface IUpdateUserInMemory {
  id: string;
}

export class DeleteUserUseCaseInMemory {
  async delete({ id }: IUpdateUserInMemory) {
    return { message: 'user successfully deleted' };
  }
}
