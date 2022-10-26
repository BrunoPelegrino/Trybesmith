import { NextFunction, Request, Response } from 'express';
import ThrowError from '../exceptions/httpExceptions';
import statusCodes from '../utils/status.code';

const isString = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  
  if (typeof name !== 'string') { 
    throw new ThrowError(statusCodes.UNPROCESSABLE_ENTITY, '"name" must be a string'); 
  }
  if (typeof amount !== 'string') { 
    throw new ThrowError(statusCodes.UNPROCESSABLE_ENTITY, '"amount" must be a string'); 
  }
  next();
};

export default isString;