import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Login, User } from '../interfaces/interfaces';

export default class UserModel {
  connection: Pool;
  
  constructor(conn: Pool) {
    this.connection = conn;
  }

  async createUser(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    ); return { id: insertId, ...user };
  }

  async getByUsernameAndPassword(login: Login) {
    const { username, password } = login;
    // console.log(username, password); 
    
    const [[user]] = await this.connection.execute<(
    Login & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
      ); return (user); 
  }
}