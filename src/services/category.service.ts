import { AppError } from '../utils/AppError';

export class CategoryService {
  private categories = [
    { id: 1, name: 'Українська література' },
    { id: 2, name: 'Фентезі' }
  ];

  getAll() {
    return this.categories;
  }

  getById(id: number) {
    const category = this.categories.find(c => c.id === id);
    if (!category) throw new AppError('Категорію не знайдено', 404);
    return category;
  }
}
