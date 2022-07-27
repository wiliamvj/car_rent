interface IDeleteCarInMemory {
  id: string;
}

export class DeleteCarUseCaseInMemory {
  async delete({ id }: IDeleteCarInMemory) {
    if (id.length !== 36) {
      throw new Error('uuid is invalid!');
    }

    return { message: 'car successfully deleted' };
  }
}
