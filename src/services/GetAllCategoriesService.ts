import dataSource from '../database/dataSource';
import { Category } from '../entities/Category';

export class GetAllCategoriesService {
    async execute(): Promise<Category[]> {
        const categoryRepository = dataSource.getRepository(Category);

        return categoryRepository.find();
    }
}