import {Video} from "../entities/Video";
import dataSource from "../database/dataSource";

export class GetAllVideosService {
    async execute() {
        const videoRepository = dataSource.getRepository(Video)

        return videoRepository.find({
            relations: ["category"],
        })
    }
}