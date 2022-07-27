import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error('Parameters not found, see docs in /docs');
    }

    const createUserUseCase = new CreateUserUseCase();

    const userResults = await createUserUseCase.create({
      name,
      email,
      password,
    });

    return res.json(userResults);
  }
}
