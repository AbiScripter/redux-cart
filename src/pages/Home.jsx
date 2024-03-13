import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { Provider } from "react-redux";
import store from "../store";

const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <Products />
        <Cart />
        <Wishlist />
      </div>
    </Provider>
  );
};

export default Home;
