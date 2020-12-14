import { request, gql } from 'graphql-request';
import * as dotenv from 'dotenv';

if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

async function sendRequest(query: any){
    const url: any = process.env.USER_SERVICE_URL;
    return request(url, query).then((data) => data).catch(console.log)
}

export async function getAllUsers(){
   const query = gql`{
    getAllUsers{
        uid
        name
        email
        phone
        country
    }
  }`
  return await sendRequest(query);
}