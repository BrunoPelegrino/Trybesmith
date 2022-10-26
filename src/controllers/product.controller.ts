import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../utils/status.code';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  createProducts = async (req: Request, res: Response) => {
    const { body } = req;
    const newProduct = await this.productService.createProducts(body);
    res.status(statusCodes.CREATED).json(newProduct);
  };

  getAllProducts = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.getAllProducts();
    res.status(statusCodes.OK).json(allProducts);
  };
}