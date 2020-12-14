import "reflect-metadata";
import { RewardedUserEntity } from "../db/entity/RewardedUserEntity";
import { RewardEntity } from "../db/entity/RewardEntity";
import { createRewardQuery, getRewardedUsersQuery, getAllRewardsQuery, assignRewardQuery, getReward, getRewardsByUserIdQuery } from "../repository/RewardRepository";
import { getAllUsers } from "./RequestService";
import * as dotenv from 'dotenv';

if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

export async function getRewardedUsers(id: any){
    // Find user id list for reward id
    console.log(`Reward ID: ${id}`);
    const list: any = await getRewardedUsersQuery(id);
    const uidList = await list.filter(function(users: any) {
        return users.uid;
    }).map((users:any) => users.uid);

    // Get all users
    const allUsersInfo = await getAllUsers();
 
    // Get Users who consumed this reward
    const rewardedUserList = await allUsersInfo.getAllUsers.filter(function(users: any) {
        return uidList.includes(users.uid);
    })
    console.log(`List of Users have this reward: ${JSON.stringify(rewardedUserList)}`)
    return rewardedUserList;
}

export async function getAllRewards(){
    console.log("Loading rewards from the database...");
    const response = await getAllRewardsQuery();
    response ? console.log("Loaded rewards: ", response) : console.log("Database Error");
    return response;
}

export async function getRewardsByUserId(uid: any){
    console.log("Loading user' rewards from the database...");
    const response = await getRewardsByUserIdQuery(uid);
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
        // Get reward info
        const rewardInfo: any = await getReward(body.rid);
        if(await checkExpiryDate(rewardInfo[0].expiry_date)){
            console.log("Assign a new reward to user...");
            const reward = new RewardedUserEntity(body.uid, body.rid);
            console.log(`Reward and User info ${JSON.stringify(reward)}`);
            const response = await assignRewardQuery(reward);
            response ? console.log("Created Successfully") : console.log("Database Error");
            return response ? 'Created' : 'Not Created';
        }
        console.log("Reward date expired")
        return 'Reward date expired'
    }
    console.log("Wrong parameters")
    return 'Wrong parameters';
}

export async function checkExpiryDate(ExpiryDate: any){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const expiry = ExpiryDate.split('/', 3);

    if(expiry[2] > year){
        return true;
    }else if(expiry[1] > month){
        return true;
    }else if(expiry[0] > day){
        return true;
    }
    return false;
}
