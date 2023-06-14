import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as GlobalStyled from './GlobalStyle'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_DOMAIN,
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <GlobalStyled.Root />
      <App />
  </ApolloProvider>
)



