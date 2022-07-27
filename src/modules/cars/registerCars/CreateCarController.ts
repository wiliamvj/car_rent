import { Request, Response } from 'express';

import { CreateCarUseCase } from './CreateCarUseCase';

export class CreateCarController {
  async create(req: Request, res: Response) {
    const { title, specs, price } = req.body;

    if (!title || !specs || !price) {
      throw new Error('Parameters not found, see docs in /docs');
    }

    if (
      !specs.brand ||
      !specs.model ||
      !specs.km ||
      !specs.type ||
      !specs.description
    ) {
      throw new Error('specs not found, see docs in /docs');
    }

    const createCarUseCase = new CreateCarUseCase();

    const newCarForRent = await createCarUseCase.create({
      title,
      specs,
      price,
    });

    return res.json(newCarForRent);
  }
}
