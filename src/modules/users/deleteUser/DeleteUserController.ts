import { Request, Response } from 'express';

import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    const deleteUserUseCase = new DeleteUserUseCase();

    const userResults = await deleteUserUseCase.delete({ id });

    return res.json(userResults);
  }
}
