import {Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("categories")
export class Category {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}