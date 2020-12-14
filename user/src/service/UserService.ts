import { UserEntity } from "../db/entity/UserEntity";
import { createUserQuery, getAllUsersQuery } from "../repository/UserRepository";
// import { request, gql } from 'graphql-request'
import * as dotenv from 'dotenv';
import { getAllRewards, getRewarsId } from "./RequestService";
if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

export async function getUserConsumedRewards(id: any){
    // Find reward id list for id
    console.log(`getUserRewards ID: ${id}`);
    const rewardsId = await getRewarsId(id);
    const ridIdList = await rewardsId.getRewardsByUserId.filter(function(users: any) {
      return users.rid;
    }).map((users:any) => users.rid);

    // Find Consumed Rewards List for id
    const allRewards = await getAllRewards();
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

// async function sendRequest(query: any){
//     const url: any = process.env.REWARD_SERVICE_URL;
//     return request(url, query).then((data) => data).catch(console.log)
// }

// export async function getRewarsId(uid: any){
//    const query = gql`{
//     getRewardsByUserId(id: ${uid}){
//       id
//       uid
//       rid
//     }
//   }`
//   return await sendRequest(query);
// }

// export async function getAllRewards(){
//    const query = gql`{
//     getAllRewards{
//       rid
//       name
//       amount
//       expiry_date
//       }
//   }`
//   return await sendRequest(query);
// } 
