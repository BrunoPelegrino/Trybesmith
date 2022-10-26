import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Products } from '../interfaces/interfaces';
// import connection from './connection';

export default class ProductModel {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async createProducts(product: Products): Promise<Products> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  async getAllProducts(): Promise<Products[]> {
    const [products] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as Products[];
  }
}