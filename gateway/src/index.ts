import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const port = process.env.PORT;

const gateway = new ApolloGateway({
  serviceList: [
    { name: "user", url: "http://user:4001" },
    { name: "reward", url: "http://reward:4002" },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
