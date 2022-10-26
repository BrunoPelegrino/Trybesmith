import { Login } from '../interfaces/interfaces';
import { createToken } from '../utils/token';
import connection from '../models/connection';
import UserModel from '../models/user.model';
// import ThrowError from '../exceptions/httpExceptions';
// import statusCodes from '../utils/status.code';

export default class LoginService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async login(login: Login) {
    const newLogin = await this.model.getByUsernameAndPassword(login);
    const { id, username } = newLogin;
    const token = createToken({ id, username });
    return token;
  }
  
  async new(login: Login) {
    const newLogin = await this.model.getByUsernameAndPassword(login);
    return newLogin;
  }
}