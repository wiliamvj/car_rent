interface IUpdateUserInMemory {
  id: string;
  name: string;
  email: string;
}

export class UpdateUserUseCaseInMemory {
  async update({ id, name, email }: IUpdateUserInMemory) {
    const result = {
      id,
      name,
      email,
    };

    return result;
  }
}
