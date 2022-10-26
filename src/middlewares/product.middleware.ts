import { NextFunction, Request, Response } from 'express';
import ThrowError from '../exceptions/httpExceptions';
import statusCodes from '../utils/status.code';
// import schemaProduct from '../schemas/product.schema';

const productMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  if (!name) throw new ThrowError(statusCodes.BAD_REQUEST, '"name" is required');
  if (name.length < 3) {
    throw new ThrowError(
      statusCodes.UNPROCESSABLE_ENTITY,
      '"name" length must be at least 3 characters long',
    );
  }
  if (!amount) throw new ThrowError(statusCodes.BAD_REQUEST, '"amount" is required');
  if (amount.length < 3) {
    throw new ThrowError(
      statusCodes.UNPROCESSABLE_ENTITY,
      '"amount" length must be at least 3 characters long',
    );
  }
  next();
};

export default productMiddleware;