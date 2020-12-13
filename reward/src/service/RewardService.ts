import "reflect-metadata";
import { RewardedUserEntity } from "../db/entity/RewardedUserEntity";
import { RewardEntity } from "../db/entity/RewardEntity";
import { createRewardQuery, getRewardedUsersQuery, getAllRewardsQuery, assignRewardQuery } from "../repository/RewardRepository";

export async function getRewardedUsers(id: any){
    console.log(`Reward ID: ${id}`);
    const response = await getRewardedUsersQuery(id);
    return response;
}

export async function getAllRewards(){
    console.log("Loading rewards from the database...");
    const response = await getAllRewardsQuery();
    response ? console.log("Loaded rewards: ", response) : console.log("Database Error");
    return response;
}

export async function createReward(body: RewardEntity) {
    if(body.name && body.amount && body.expiry_date){
        console.log("Inserting a new reward into the database...");
        const reward = new RewardEntity(body.name, body.amount, body.expiry_date);
        console.log(`Reward info ${JSON.stringify(reward)}`);
        const response = await createRewardQuery(reward);
        response ? console.log("Created Successfully") : console.log("Database Error");
        return response ? 'Created' : 'Not Created';
    }
    return 'Wrong parameters';
}

export async function assignReward(body: RewardedUserEntity) {
    if(body.uid && body.rid){
        console.log("Assign a new reward to user...");
        const reward = new RewardedUserEntity(body.uid, body.rid);
        console.log(`Reward and User info ${JSON.stringify(reward)}`);
        const response = await assignRewardQuery(reward);
        response ? console.log("Created Successfully") : console.log("Database Error");
        return response ? 'Created' : 'Not Created';
    }
    return 'Wrong parameters';
}