import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { createReward, getRewardedUsers, getAllRewards, assignReward, getRewardsByUserId } from "./service/RewardService";
import * as dotenv from 'dotenv';

if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

const port = process.env.PORT;
const typeDefs = gql`
  type Reward {
    rid: ID!
    name: String
    amount: String
    expiry_date: String
  }

  type RewardedUsers @key(fields: "id") {
    id: ID!
    uid: String
    rid: String
  }

  type User {
    uid: ID!
    name: String
    email: String
    phone: String
    country: String
  }

  extend type Query {
    getRewardedUsers(id: ID!): [User]
    getAllRewards: [Reward]
    getRewardsByUserId(id: ID!): [RewardedUsers]
  }

  type Mutation {
    createReward(name: String, amount: String, expiry_date: String):String
    assignReward(uid: String, rid: String):String
  }
`;

const resolvers = {
  Query: {
    getRewardedUsers: async (_: any, { id }: any) => {
        return await getRewardedUsers(id);
    },
    getAllRewards: async () => {
        return await getAllRewards();
    },
    getRewardsByUserId: async (_: any, { id }: any) => {
      return await getRewardsByUserId(id);
    }
  },

  Mutation: {
    createReward: async(root: any, args: any, context: any, info: any) => {
        return await createReward(args);
    },
    assignReward: async(root: any, args: any, context: any, info: any) => {
        return await assignReward(args);
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`Reward service ready at ${url}`);
});
