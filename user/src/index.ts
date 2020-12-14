import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { getUserConsumedRewards, getAllUsers, createUser } from "./service/UserService";
import * as dotenv from 'dotenv';

if (String(process.env.ENV) === 'local') {
  dotenv.config({ path: '.env.local' });
}else {
  dotenv.config({ path: '.env.cloud' });
}

const port = process.env.PORT;
const typeDefs = gql`
  type User {
    uid: ID!
    name: String
    email: String
    phone: String
    country: String
  }

  type Reward {
    rid: ID!
    name: String
    amount: String
    expiry_date: String
  }

  extend type Query {
    getUserConsumedRewards(id: ID!): [Reward]
    getAllUsers: [User]
  }

  type Mutation {
    createUser(name: String, email: String, phone: String, country: String):String
  }
`;

const resolvers = {
  Query: {
    getUserConsumedRewards: async (_: any, { id }: any) => {
        return await getUserConsumedRewards(id);
    },
    getAllUsers: async () => {
        return await getAllUsers();
    }
  },
  Mutation: {
    createUser: async(root: any, args: any, context: any, info: any) => {
        return await createUser(args);
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`User service ready at ${url}`);
});
