import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

//import components
import Shop from "./components/Shop";
import Cart from "./components/Shop/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

//Apollo Client processing
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
