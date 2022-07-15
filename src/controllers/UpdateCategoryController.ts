import {Response, Request} from "express";
import {UpdateCategoryService} from "../services/UpdateCategoryService";

export class UpdateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const {name, description} = request.body;

        const service = new UpdateCategoryService();

        const result = await service.execute({id, name, description})

        if (result instanceof Error) {
            return response.status(400).json({"message":result.message});
        }

        return response.json(result);
    }
}