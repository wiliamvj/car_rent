import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handleUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const userResults = await createUserUseCase.create({
      name,
      email,
      password,
    });

    try {
      return res.json(userResults);
    } catch (err) {
      return err;
    }
  }
}
