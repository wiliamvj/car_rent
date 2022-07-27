import { Request, Response } from 'express';

import { UpdateCarUseCase } from './UpdateCarUseCase';

export class UpdateCarController {
  async update(req: Request, res: Response) {
    const { id, title, specs, price } = req.body;

    if (!id || !title || !specs || !price) {
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

    const udateCarUseCase = new UpdateCarUseCase();

    const newCarForRent = await udateCarUseCase.update({
      id,
      title,
      specs,
      price,
    });

    return res.json(newCarForRent);
  }
}
