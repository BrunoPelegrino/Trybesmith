// import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Products } from '../interfaces/interfaces';
import connection from '../models/connection';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }
  
  async createProducts(product: Products): Promise<Products> {
    const products = this.model.createProducts(product);
    return products;
  }

  async getAllProducts(): Promise<Products[]> {
    const allProducts = this.model.getAllProducts();
    return allProducts;
  }
}