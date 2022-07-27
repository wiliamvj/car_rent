interface IDeleteCarInMemory {
  id: string;
}

export class DeleteCarUseCaseInMemory {
  async delete({ id }: IDeleteCarInMemory) {
    return { message: 'car successfully deleted' };
  }
}
