import dataSource from '../database/dataSource';
import { Video } from '../entities/Video';

type CreateVideoRequest = {
    name: string;
    description: string;
    duration: number;
    categoryId: string;
}

export class CreateVideoService {
    async execute({
        name,
        description,
        duration,
        categoryId,
    }: CreateVideoRequest): Promise<Video | Error> {
        const videoRepository = dataSource.getRepository(Video);

        if (await videoRepository.findOneBy({ name })) {
            return new Error('Video already exists');
        }

        const video = videoRepository.create({
            name,
            description,
            duration,
            categoryId,
        });

        await videoRepository.save(video);

        return video;
    }
}