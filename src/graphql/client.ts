import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "../utils/constants";

const client = new ApolloClient({
    uri: API_URL,
    /*uri: "https://beta.pokeapi.co/graphql/v1beta",*/
    cache: new InMemoryCache(),
});

export default client;
