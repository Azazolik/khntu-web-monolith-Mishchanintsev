
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dto/product.dto';
import { AppError } from '../utils/AppError';

const productRepository = new ProductRepository();

export class ProductService {
  async getAll(page: number = 1, limit: number = 10) {
    return productRepository.findPaginated(page, limit);
  }

  async getById(id: number) {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new AppError('Книгу не знайдено', 404);
    }

    return product;
  }

  async create(data: CreateProductDto) {
    return productRepository.create(data);
  }
}
