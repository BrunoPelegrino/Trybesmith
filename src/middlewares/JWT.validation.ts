import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Auth } from '../interfaces/interfaces';
import statusCodes from '../utils/status.code';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(statusCodes.UNAUTHORIZED)
      .json({ message: 'Token not found' });
  }
  
  try {
    const decoded = jwt.verify(authorization as string, SECRET) as Auth;
    // req.body.userId = decoded.id;
    console.log(decoded);
   
    next();
  } catch (error) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};