// import { ActionTypes } from "./ActionTypes";
import {
  cartHandleHelper,
  wishlistHandleHelper,
} from "../utils/reducerHelpers";
import { products } from "../data/productsData";

const initialState = {
  products: products,
  cart: {},
  wishlist: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART": {
      return cartHandleHelper(state, action);
    }

    case "WISHLIST": {
      return wishlistHandleHelper(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
