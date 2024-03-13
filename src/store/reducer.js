// import { ActionTypes } from "./ActionTypes";
import {
  cartHandleHelper,
  wishlistHandleHelper,
} from "../utils/reducerHelpers";

const products = [
  {
    id: "SHRT001",
    name: "Classic White Shirt",
    price: 29.99,
  },
  {
    id: "SHRT002",
    name: "Striped Oxford Shirt",
    price: 39.99,
  },
  {
    id: "SHRT003",
    name: "Denim Button-Up Shirt",
    price: 49.99,
  },
  {
    id: "SHRT004",
    name: "Flannel Plaid Shirt",
    price: 34.99,
  },
  {
    id: "SHRT005",
    name: "Slim Fit Linen Shirt",
    price: 44.99,
  },
];

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
