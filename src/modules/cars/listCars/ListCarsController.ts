import { Request, Response } from 'express';

import { ListCarsUseCase } from './ListCarsUseCase';

export class ListCarsController {
  async list(req: Request, res: Response) {
    const listCarsUseCase = new ListCarsUseCase();

    const listCarsForRent = await listCarsUseCase.list();

    return res.json(listCarsForRent);
  }
}
