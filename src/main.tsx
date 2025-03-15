import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
