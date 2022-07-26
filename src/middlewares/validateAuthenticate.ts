import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function validateAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authInHeader = req.headers.authorization;

  if (!authInHeader) {
    return res.status(401).json({
      message: 'Token not found!',
    });
  }

  const [, token] = authInHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      '8276184d16d361b3e60cf2071af9e40b'
    ) as IPayload;

    req.id_user_rent = sub;

    return next();
  } catch {
    return res.status(401).json({
      message: 'Invalid Token',
    });
  }
}
