import "reflect-metadata";
import { createConnection } from "typeorm";
import { POSTGRES_OPTIONS } from "../util/dbConfig";
import { UserEntity } from "../db/entity/UserEntity";

export async function getAllUsersQuery(){
    const connection = await createConnection(POSTGRES_OPTIONS);
    const response = await connection.manager.find(UserEntity).catch(error => {
        connection.close();
        console.log(error);
        return false;
    });
    await connection.close();
    return response;
}

export async function createUserQuery(user: UserEntity): Promise<boolean> {
    const connection = await createConnection(POSTGRES_OPTIONS);
    await connection.manager.save(user).catch(error => {
        connection.close();
        console.log(error);
        return false;
    });
    await connection.close();
    return true;
}