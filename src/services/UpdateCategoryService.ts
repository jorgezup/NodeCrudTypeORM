import {Category} from "../entities/Category";
import dataSource from "../database/dataSource";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async  execute({id, name, description}: CategoryUpdateRequest): Promise<Category | Error> {
        const categoryRepository = dataSource.getRepository(Category);

        const category = await categoryRepository.findOneBy({ id });

        if (!category) {
            return new Error("Category not found");
        }

        const updatedCategory = categoryRepository.merge(category, {
            name,
            description,
        })

        return categoryRepository.save(updatedCategory);
    }
}