import { Request, Response } from 'express';

import { DeleteCarUseCase } from './DeleteCarUSeCase';

export class DeleteCarController {
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    const deleteCarUseCase = new DeleteCarUseCase();

    const deleteCar = await deleteCarUseCase.delete({ id });

    return res.json(deleteCar);
  }
}
