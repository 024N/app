import "reflect-metadata";
import { createConnection } from "typeorm";
import { POSTGRES_OPTIONS } from "../util/dbConfig";
import { UserEntity } from "../db/entity/UserEntity";

export async function getUserRewardsQuery(id: any){
    return 1;
}

export async function getAllUsersQuery(){
    return createConnection(POSTGRES_OPTIONS).then(async connection => {
        const users = await connection.manager.find(UserEntity);
        connection.close();
        return users;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export async function createUserQuery(user: UserEntity): Promise<boolean> {
    return createConnection(POSTGRES_OPTIONS).then(async (connection) => {
        await connection.manager.save(user);
        connection.close();
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}