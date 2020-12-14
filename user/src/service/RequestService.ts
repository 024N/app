import { request, gql } from 'graphql-request'

async function sendRequest(query: any){
    const url: any = process.env.REWARD_SERVICE_URL;
    return request(url, query).then((data) => data).catch(console.log)
}

export async function getRewarsId(uid: any){
   const query = gql`{
    getRewardsByUserId(id: ${uid}){
      id
      uid
      rid
    }
  }`
  return await sendRequest(query);
}

export async function getAllRewards(){
   const query = gql`{
    getAllRewards{
      rid
      name
      amount
      expiry_date
      }
  }`
  return await sendRequest(query);
} 
