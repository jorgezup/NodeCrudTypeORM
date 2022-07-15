import { DataSource } from "typeorm";
import {Category} from "../entities/Category";

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "node_crud",
    entities: [Category],
    migrations: ["src/database/migrations/*.ts"],
    logging: true,
    synchronize: true,
});

myDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default myDataSource;