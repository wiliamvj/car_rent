import { Request, Response } from 'express';
import { CarRentUseCase } from './CarRentUseCase';

export class CarRentController {
  async rent(req: Request, res: Response) {
    const { id, in_rent, until_rent } = req.body;
    const { id_user_rent } = req;

    // validate format date

    // const regex =
    //   /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/;

    // if (in_rent !== regex) {
    //   console.log('Ok');
    // }

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
