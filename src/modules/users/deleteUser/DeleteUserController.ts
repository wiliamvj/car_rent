import { Request, Response } from 'express';

import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  async delete(req: Request, res: Response) {
    const { email } = req.body;

    const deleteUserUseCase = new DeleteUserUseCase();

    const userResults = await deleteUserUseCase.delete({ email });

    return res.json(userResults);
  }
}
