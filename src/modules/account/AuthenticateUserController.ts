import { Request, Response } from 'express';

import { AuthenticateUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Parameters not found, see docs in /docs');
    }

    const authenticateUseCase = new AuthenticateUseCase();

    const userResults = await authenticateUseCase.login({
      email,
      password,
    });

    return res.json(userResults);
  }
}
