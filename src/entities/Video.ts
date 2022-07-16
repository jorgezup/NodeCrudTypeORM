import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './Category';

@Entity('videos')
export class Video {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column() // para relacionar videos com categorias
    categoryId: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}