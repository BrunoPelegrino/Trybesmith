import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Auth } from '../interfaces/interfaces';
import OrderService from '../services/order.service';
import statusCodes from '../utils/status.code';

const SECRET = process.env.JWT_SECRET as string;

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getOrders = async (_req: Request, res: Response) => {
    const orders = await this.service.getOrders();
    res.status(statusCodes.OK).json(orders);
  };

  createOrders = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const decoded = jwt.verify(authorization as string, SECRET) as Auth;
    const { productsIds } = req.body;
    const { body } = req;
    // const { body } = req;
    // const { token } = req.body;
    console.log('cade eu', body);
    await this.service.createOrder(decoded.id, productsIds);
    res.status(statusCodes.CREATED).json({ userId: decoded.id, productsIds });
  };
}