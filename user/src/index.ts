import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { createUser, getAllUsers, getUserRewards } from "./service/UserService";

const port = process.env.PORT;
const typeDefs = gql`
  type User @key(fields: "uid") {
    uid: ID!
    name: String
    email: String
    phone: String
    country: String
  }

  extend type Query {
    getUserRewards(id: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(name: String, email: String, phone: String, country: String):String
  }
`;

const resolvers = {
//   User: {
//     __resolveReference(object: any) {
//       return userdb.find((user: any) => user.uid === object.id);
//     },
//   },
 
  Query: {
    getUserRewards: async (_: any, { id }: any) => {
        return await getUserRewards(id);
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
