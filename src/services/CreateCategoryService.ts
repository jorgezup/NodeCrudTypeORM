import {Category} from "../entities/Category";
import dataSource from "../database/dataSource";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({
        name,
        description,
    }: CategoryRequest): Promise<Category> {
        const categoryRepository = dataSource.getRepository(Category);

        if (await categoryRepository.findOneBy({ name })) {
            throw new Error("Category already exists");
        }

        const category = categoryRepository.create({
            name,
            description,
        })

        await categoryRepository.save(category);

        return category;
    }
}