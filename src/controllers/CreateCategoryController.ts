import {CreateCategoryService} from "../services/CreateCategoryService";
import {Response, Request} from "express";

export class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, description} = request.body;

        const service = new CreateCategoryService();

        const result = await service.execute({name, description})

        if (result instanceof Error) {
            return response.status(400).json({"message":result.message});
        }

        return response.json(result);
    }
}