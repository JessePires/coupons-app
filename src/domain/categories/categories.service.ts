import { CategoryDTO } from './categories.dto';

export class CategoriesService {
  private servicePrefix = process.env.CATEGORIES_URL;

  private categories: CategoryDTO[] = [
    { id: 1, name: 'BEAUTY' },
    { id: 2, name: 'SERVICES' },
    { id: 3, name: 'AUTOMOTIVE' },
    { id: 4, name: 'PET' },
    { id: 5, name: 'GYM' },
    { id: 6, name: 'VARIOUS_FIXES' },
  ];

  async getAll(): Promise<CategoryDTO[]> {
    return { data: { data: this.categories } };
  }

  async getById(id: number): Promise<CategoryDTO | null> {
    return this.categories.find((category) => category.id === id) || null;
  }
}
