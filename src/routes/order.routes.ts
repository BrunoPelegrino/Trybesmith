import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import JWTValidation from '../middlewares/JWT.validation';
import orderValidation from '../middlewares/order.middleware';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getOrders);
orderRouter.post('/', JWTValidation, orderValidation, orderController.createOrders);
export default orderRouter;