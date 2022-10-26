import { Request, Response } from 'express';
// import ThrowError from '../exceptions/httpExceptions';
import LoginService from '../services/login.service';
import statusCodes from '../utils/status.code';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  login = async (req: Request, res: Response) => {
    const { body } = req;
    const verify = await this.service.new(body);
    if (!verify) {
      return res.status(statusCodes.UNAUTHORIZED)
        .json({ message: 'Username or password invalid' });
    } 
    const token = await this.service.login(body);
    return res.status(statusCodes.OK).json({ token });
  };
}