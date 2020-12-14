import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as dotenv from 'dotenv';

if (String(process.env.ENV) === 'local') {
    dotenv.config({ path: '.env.local' });  
}else {
    dotenv.config({ path: '.env.cloud' });
}

export const POSTGRES_OPTIONS: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    entities: [ "src/db/entity/**/*.ts"]
}