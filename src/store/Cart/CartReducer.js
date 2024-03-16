import {
  cartHandleHelper,
  wishlistHandleHelper,
} from "../../utils/cartReducerHelpers";
import { products } from "../../data/productsData";

const initialState = {
  products: products,
  cart: {},
  wishlist: {},
};

const cartReducer = (state = initialState, action) => {
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

export default cartReducer;
