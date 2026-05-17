'use client';

import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphql-pokemon2.vercel.app'
    }),
    cache: new InMemoryCache()
});

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}