import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { createReward, getRewardedUsers, getAllRewards, assignReward } from "./service/RewardService";

const port = process.env.PORT;
const typeDefs = gql`
  type Reward @key(fields: "rid") {
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

  extend type Query {
    getRewardedUsers(id: ID!): [RewardedUsers]
    getAllRewards: [Reward]
  }

  type Mutation {
    createReward(name: String, amount: String, expiry_date: String):String
    assignReward(uid: String, rid: String):String
  }
`;

const resolvers = {
//   User: {
//     __resolveReference(object: any) {
//       return userdb.find((user: any) => user.uid === object.id);
//     },
//   },
 
  Query: {
    getRewardedUsers: async (_: any, { id }: any) => {
        return await getRewardedUsers(id);
    },
    getAllRewards: async () => {
        return await getAllRewards();
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
