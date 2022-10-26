import { UserToken, User } from '../interfaces/interfaces';
import { createToken } from '../utils/token';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async createUser(user: User) {
    const newUser = await this.model.createUser(user);
    
    const token = createToken(newUser as UserToken);
    return token;
  }
}