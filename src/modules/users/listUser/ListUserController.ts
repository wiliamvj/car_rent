import { Request, Response } from 'express';

import { ListUserUseCase } from './ListUserUseCase';

export class ListUserController {
  async list(req: Request, res: Response) {
    const listUserUseCase = new ListUserUseCase();

    const users = await listUserUseCase.list();

    return res.json(users);
  }
}
