import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';
import isString from '../middlewares/productString.middleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productMiddleware, isString, productController.createProducts);
productRouter.get('/', productController.getAllProducts);
export default productRouter;