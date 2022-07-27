interface IUpdateUserInMemory {
  id: string;
}

export class DeleteUserUseCaseInMemory {
  async delete({ id }: IUpdateUserInMemory) {
    if (id.length !== 36) {
      throw new Error('uuid is invalid!');
    }
    return { message: 'user successfully deleted' };
  }
}
