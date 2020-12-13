import "reflect-metadata";
import { createConnection } from "typeorm";
import { RewardedUserEntity } from "../db/entity/RewardedUserEntity";
import { RewardEntity } from "../db/entity/RewardEntity";
import { POSTGRES_REWARDED_USER_OPTIONS, POSTGRES_REWARD_OPTIONS } from "../util/dbConfig";

export async function getRewardedUsersQuery(id: any){
    const connection = await createConnection(POSTGRES_REWARD_OPTIONS);
    const response = await connection.getRepository(RewardedUserEntity)
        .createQueryBuilder("rewarded")
        .where("rewarded.uid = :uid", { uid: id })
        .getMany()
        .catch(error => {
            console.log(error);
            return false;
        });
    connection.close();
    return response;
}

export async function getAllRewardsQuery(){
    return createConnection(POSTGRES_REWARD_OPTIONS).then(async connection => {
        const rewards = await connection.manager.find(RewardEntity);
        connection.close();
        return rewards;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export async function createRewardQuery(reward: RewardEntity): Promise<boolean> {
    return createConnection(POSTGRES_REWARD_OPTIONS).then(async (connection) => {
        await connection.manager.save(reward);
        connection.close();
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export async function assignRewardQuery(reward: RewardedUserEntity): Promise<boolean> {
    return createConnection(POSTGRES_REWARDED_USER_OPTIONS).then(async (connection) => {
        await connection.manager.save(reward);
        connection.close();
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}