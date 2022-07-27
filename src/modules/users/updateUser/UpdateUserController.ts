import { Request, Response } from 'express';

import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  async update(req: Request, res: Response) {
    const { name, email, id } = req.body;

    if (!name || !email || !id) {
      throw new Error('Parameters not found, see docs in /docs');
    }

    const updateUserUseCase = new UpdateUserUseCase();

    const userResults = await updateUserUseCase.update({
      id,
      name,
      email,
    });

    return res.json(userResults);
  }
}
