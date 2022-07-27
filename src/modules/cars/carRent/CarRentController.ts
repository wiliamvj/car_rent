import { Request, Response } from 'express';
import { CarRentUseCase } from './CarRentUseCase';

export class CarRentController {
  async rent(req: Request, res: Response) {
    const { id, in_rent, until_rent } = req.body;
    const { id_user_rent } = req;

    if (!id || !in_rent || !until_rent) {
      throw new Error('Parameters not found, see docs in /docs');
    }

    const regexDate =
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    const regexIn = regexDate.test(in_rent);
    const regexUntil = regexDate.test(until_rent);

    if (!regexUntil || !regexIn) {
      throw new Error('Date is invalid! Use this format DD/MM/YYYY');
    }

    const carRentUseCase = new CarRentUseCase();

    const carRent = await carRentUseCase.rent({
      id,
      id_user_rent,
      in_rent,
      until_rent,
    });

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
