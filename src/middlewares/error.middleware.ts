import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import ThrowError from '../exceptions/httpExceptions';

const errorMiddleware: ErrorRequestHandler = (
  err: ThrowError, 
  _req: Request, 
  res: Response, 
  _next: NextFunction,
) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ message });
};

export default errorMiddleware; 