import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../utils/schemas';
import ThrowError from '../exceptions/httpExceptions';
import statusCodes from '../utils/status.code';

const orderValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = orderSchema.validate(body);
  if (error) {    
    if (error.message.includes('contain at least')) {
      throw new ThrowError(
        statusCodes.UNPROCESSABLE_ENTITY,
        '"productsIds" must include only numbers', 
      );
    }
    throw new ThrowError(
      error.message
        .includes('required') ? statusCodes.BAD_REQUEST : statusCodes.UNPROCESSABLE_ENTITY,
      error.message, 
    );
  }

  next();
};

export default orderValidation;