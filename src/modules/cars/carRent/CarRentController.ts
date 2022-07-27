import { Request, Response } from 'express';

import { CarRentUseCase } from './CarRentUseCase';

export class CarRentController {
  async rent(req: Request, res: Response) {
    const { id } = req.body;
    const { id_user_rent } = req;

    const carRentUseCase = new CarRentUseCase();

    const carRent = await carRentUseCase.rent({ id, id_user_rent });

    return res.json(carRent);
  }

  async cancelRent(req: Request, res: Response) {
    const { id } = req.body;
    const { id_user_rent } = req;

    const carRentUseCase = new CarRentUseCase();

    const cancelRent = await carRentUseCase.cancelRent({ id, id_user_rent });

    return res.json(cancelRent);
  }
}
