
import { OrderRepository } from '../repositories/order.repository';
import { AppError } from '../utils/AppError';

const orderRepository = new OrderRepository();

export class OrderService {
  async create(
    userId: number,
    items: Array<{ productId: number; quantity: number }>
  ) {
    if (!Number.isInteger(userId) || userId <= 0) {
      throw new AppError('Некоректний ID користувача', 400);
    }

    if (!Array.isArray(items) || items.length === 0) {
      throw new AppError('Замовлення має містити товари', 400);
    }

    for (const item of items) {
      if (
        !Number.isInteger(item.productId) ||
        item.productId <= 0 ||
        !Number.isInteger(item.quantity) ||
        item.quantity <= 0
      ) {
        throw new AppError('Некоректні дані товару', 400);
      }
    }

    return orderRepository.createOrderTx(userId, items);
  }
}
