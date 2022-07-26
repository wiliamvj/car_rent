import { Request, Response } from 'express';

import { CreateCarUseCase } from './CreateCarUseCase';

export class CreateCarController {
  async create(req: Request, res: Response) {
    const { car_name, brand, price } = req.body;

    const createCarUseCase = new CreateCarUseCase();

    const newCarForRent = await createCarUseCase.create({
      car_name,
      brand,
      price,
    });

    return res.json(newCarForRent);
  }
}
