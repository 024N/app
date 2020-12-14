import "reflect-metadata";
import { createConnection } from "typeorm";
import { RewardedUserEntity } from "../db/entity/RewardedUserEntity";
import { RewardEntity } from "../db/entity/RewardEntity";
import { POSTGRES_REWARDED_USER_OPTIONS, POSTGRES_REWARD_OPTIONS } from "../util/dbConfig";

export async function getRewardedUsersQuery(id: any){
    const connection = await createConnection(POSTGRES_REWARDED_USER_OPTIONS);
    const response = await connection.getRepository(RewardedUserEntity)
        .createQueryBuilder("rewarded")
        .where("rewarded.rid = :rid", { rid: id })
        .getMany()
        .catch(error => {
            connection.close();
            console.log(error);
            return false;
        });
    await connection.close();
    return response;
}

export async function getReward(rid: any){
    const connection = await createConnection(POSTGRES_REWARD_OPTIONS);
    const response = await connection.getRepository(RewardEntity)
        .createQueryBuilder("reward")
        .where("reward.rid = :rid", { rid: rid })
        .getMany()
        .catch(error => {
            connection.close();
            console.log(error);
            return false;
        });
    await connection.close();
    return response;
}

export async function getRewardsByUserIdQuery(uid: any){
    const connection = await createConnection(POSTGRES_REWARDED_USER_OPTIONS);
    const response = await connection.getRepository(RewardedUserEntity)
        .createQueryBuilder("rewards")
        .where("rewards.uid = :uid", { uid: uid })
        .getMany()
        .catch(error => {
            connection.close();
            console.log(error);
            return false;
        });
    await connection.close();
    return response;
}

export async function getAllRewardsQuery(){
    const connection = await createConnection(POSTGRES_REWARD_OPTIONS);
    const rewards = await connection.manager.find(RewardEntity).catch(error => {
        console.log(error);
        connection.close();
        return false;
    });
    await connection.close();
    return rewards;
}

export async function createRewardQuery(reward: RewardEntity): Promise<boolean> {
    console.log("opt ->>>>>>>>>>>>>>")
    console.log(POSTGRES_REWARD_OPTIONS)
    const connection = await createConnection(POSTGRES_REWARD_OPTIONS);
    await connection.manager.save(reward).catch(error => {
        console.log(error);
        connection.close();
        return false;
    });
    await connection.close();
    return true;
}

export async function assignRewardQuery(reward: RewardedUserEntity): Promise<boolean> {
    console.log("opt ->>>>>>>>>>>>>>")
    console.log(POSTGRES_REWARDED_USER_OPTIONS)
    const connection = await createConnection(POSTGRES_REWARDED_USER_OPTIONS);
    await connection.manager.save(reward).catch(error => {
        console.log(error);
        connection.close();
        return false;
    });
    await connection.close();
    return true;
}