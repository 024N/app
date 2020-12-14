import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import * as dotenv from 'dotenv';

if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

const port = process.env.PORT;
const user = process.env.USER_URL;
const reward = process.env.REWARD_URL;

const gateway = new ApolloGateway({
  serviceList: [
    { name: "user", url: user },
    { name: "reward", url: reward },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
