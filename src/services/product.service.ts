import { AppError } from '../utils/AppError';

export class ProductService {
  private products = [
    { id: 1, categoryId: 1, title: 'Кобзар', price: 250 },
    { id: 2, categoryId: 2, title: 'Гаррі Поттер і філософський камінь', price: 450 },
    { id: 3, categoryId: 1, title: 'Лісова пісня', price: 200 }
  ];

  getAll() {
    return this.products;
  }

  getById(id: number) {
    const product = this.products.find(p => p.id === id);
    if (!product) throw new AppError('Книгу не знайдено', 404);
    return product;
  }
}
