interface IUpdateUserInMemory {
  id: string;
}

export class DeleteUserUseCaseInMemory {
  async delete({ id }: IUpdateUserInMemory) {
    return { message: 'user successfully deleted' };
  }
}
