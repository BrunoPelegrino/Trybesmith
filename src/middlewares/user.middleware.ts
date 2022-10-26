import { NextFunction, Request, Response } from 'express';
import { userSchema } from '../utils/schemas';
import ThrowError from '../exceptions/httpExceptions';
import statusCodes from '../utils/status.code';

const userValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = userSchema.validate(body);
  if (error) {    
    throw new ThrowError(
      error.message
        .includes('required') ? statusCodes.BAD_REQUEST : statusCodes.UNPROCESSABLE_ENTITY,
      error.message, 
    );
  }

  next();
};

export default userValidation;