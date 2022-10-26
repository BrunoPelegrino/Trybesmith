import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../utils/status.code';

export default class UserController {
  userServicer: UserService;

  constructor() {
    this.userServicer = new UserService();
  }

  createUser = async (req: Request, res: Response) => {
    const { body } = req;
    const token = await this.userServicer.createUser(body);
    res.status(statusCodes.CREATED).json({ token });
  };
}