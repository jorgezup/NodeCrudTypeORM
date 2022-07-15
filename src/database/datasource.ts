import { DataSource } from "typeorm";

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "node_crud",
    // entities: [User],
    migrations: ["src/database/migrations/*.ts"],
    logging: true,
    synchronize: true,
});


export default myDataSource;