import { UserEntity } from "../db/entity/UserEntity";
import { createUserQuery, getAllUsersQuery } from "../repository/UserRepository";
import { request, gql } from 'graphql-request'
import * as dotenv from 'dotenv';
if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

export async function getUserConsumedRewards(id: any){
    // Find reward id list for id
    console.log(`getUserRewards ID: ${id}`);
    let query = await getRewarsId(id);
    const rewardsId = await sendRequest(query);
    const ridIdList = await rewardsId.getRewardsByUserId.filter(function(users: any) {
      return users.rid;
    }).map((users:any) => users.rid);

    // Find Consumed Rewards List for id
    query = await getAllRewards();
    const allRewards = await sendRequest(query);
    const consumedRewards = await allRewards.getAllRewards.filter(function(rewards: any) {
      return ridIdList.includes(rewards.rid);
    })
    console.log(`Consumed Rewards List: ${JSON.stringify(consumedRewards)}`)
    return consumedRewards;
}

export async function getAllUsers(){
    console.log("Loading users from the database...");
    const response = await getAllUsersQuery();
    response ? console.log("Loaded users: ", response) : console.log("Database Error");
    return response;
}

export async function createUser(body: UserEntity) {
    if(body.name && body.email && body.phone && body.country){
        console.log("Inserting a new user into the database...");
        const user = new UserEntity(body.name, body.email, body.phone, body.country);
        console.log(`User info ${JSON.stringify(user)}`);
        const response = await createUserQuery(user);
        response ? console.log("Created Successfully") : console.log("Database Error");
        return response ? 'Created' : 'Not Created';
    }
    return 'Wrong parameters';
}

async function sendRequest(query: any){
    const url: any = process.env.REWARD_SERVICE_URL;
    return request(url, query).then((data) => data).catch(console.log)
}

async function getRewarsId(uid: any){
  return gql`{
    getRewardsByUserId(id: ${uid}){
      id
      uid
      rid
    }
  }`
}

async function getAllRewards(){
  return gql`{
    getAllRewards{
      rid
      name
      amount
      expiry_date
      }
  }`
} 
