import { NextFunction, Request, Response } from 'express';
import ThrowError from '../exceptions/httpExceptions';
import statusCodes from '../utils/status.code';

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) throw new ThrowError(statusCodes.BAD_REQUEST, '"username" is required');
  if (!password) throw new ThrowError(statusCodes.BAD_REQUEST, '"password" is required');
  next();
};

export default loginMiddleware;