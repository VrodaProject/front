import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
const httpLink = new HttpLink({ uri: "http://localhost:8081/v1/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
