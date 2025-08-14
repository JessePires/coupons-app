import { CategoryDTO } from './categories.dto';
import { CategoriesService } from './categories.service';
import { CategoriesControllerProps } from './categories.types';

export class CategoriesController implements CategoriesControllerProps {
  service = new CategoriesService();

  async getAll(): Promise<CategoryDTO[]> {
    return await this.service.getAll();
  }

  async getById(id: number): Promise<CategoryDTO> {
    return await this.service.getById(id);
  }
}
