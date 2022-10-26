import { Order } from '../interfaces/interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getOrders(): Promise<Order[]> {
    const orders = await this.model.getOrders();
    return orders;
  }

  async createOrder(userId: number, productsIds: number[]) {
    // const { productsIds, userId } = order;
    console.log(userId);
    console.log(productsIds);
    
    const orderId = await this.model.insertOrders(userId);
    console.log(orderId);
    
    await Promise.all(productsIds.map((id) => this.model.UpdateProducts(orderId, id)));
  }
}