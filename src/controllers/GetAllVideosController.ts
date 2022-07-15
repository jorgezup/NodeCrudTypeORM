import {Request, Response} from 'express';
import {GetAllVideosService} from "../services/GetAllVideosService";

export class GetAllVideosController {
    async handle(_request: Request, response: Response): Promise<Response> {
        const service = new GetAllVideosService();

        const result = await service.execute();

        return response.json(result);
    }
}