import dataSource from "../database/dataSource";
import {Video} from "../entities/Video";

type CreateVideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
    async execute({
        name,
        description,
        duration,
        category_id,
    }: CreateVideoRequest): Promise<Video | Error> {
        const videoRepository = dataSource.getRepository(Video);

        if (await videoRepository.findOneBy({ name })) {
            return new Error("Video already exists");
        }

        const video = videoRepository.create({
            name,
            description,
            duration,
            category_id,
        })

        await videoRepository.save(video);

        return video;
    }
}