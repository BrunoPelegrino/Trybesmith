import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces/interfaces';

export default class OrderModel {
  connection: Pool;
  
  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getOrders(): Promise<Order[]> {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds  
      FROM Trybesmith.Orders AS o 
      INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
      GROUP BY o.id`,
    ); return orders as Order[];
  }

  async insertOrders(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders(userId) VALUES (?)',
      [userId],
    );
    // console.log(insertId);
    return insertId;
  }

  async UpdateProducts(orderId:number, productsIds: number): Promise<void> {
    await this.connection.execute(
      ' UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productsIds],
    );
  }
}