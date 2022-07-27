import { Request, Response } from 'express';

import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
  async list(req: Request, res: Response) {
    const listUsersUseCase = new ListUsersUseCase();

    const users = await listUsersUseCase.list();

    return res.json(users);
  }
}
