
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authGuard = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({
      status: 'error',
      message: 'Токен відсутній або некоректний'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);

    if (
      typeof payload === 'string' ||
      typeof payload.sub !== 'number' ||
      typeof payload.role !== 'string'
    ) {
      return res.status(401).json({
        status: 'error',
        message: 'Некоректні дані токена'
      });
    }

    (req as any).user = {
      id: payload.sub,
      role: payload.role
    };

    next();
  } catch (error) {
    return res.status(401).json({
      status: 'error',
      message: 'Токен недійсний або прострочений'
    });
  }
};
