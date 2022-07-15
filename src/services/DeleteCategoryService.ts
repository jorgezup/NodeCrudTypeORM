import dataSource from "../database/dataSource";
import {Category} from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string): Promise<void | Error> {
        const categoryRepository = dataSource.getRepository(Category);

        const category = await categoryRepository.findOneBy({ id });

        if (!category) {
            return new Error("Category not found");
        }

        await categoryRepository.remove(category);
    }
}