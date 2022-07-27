import { Request, Response } from 'express';

import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    if (!id) {
      throw new Error('id not found, see docs in /docs');
    }

    const deleteUserUseCase = new DeleteUserUseCase();

    const userResults = await deleteUserUseCase.delete({ id });

    return res.json(userResults);
  }
}
