import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullHeart, emptyHeart } from "../pictures/svgs";
const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const qty = cart[data.id]?.quantity;
  const isWishlisted = Boolean(wishlist[data.id]);

  const handleCartAdd = (item) => {
    dispatch({ type: "CART", payload: { data: item, operation: "add" } });
  };

  const handleCartSub = (item) => {
    dispatch({ type: "CART", payload: { data: item, operation: "subtract" } });
  };

  const handleWishlist = (item) => {
    dispatch({ type: "WISHLIST", payload: { data: item } });
  };

  return (
    <div className="product">
      <span onClick={() => handleWishlist(data)}>
        {isWishlisted ? fullHeart : emptyHeart}
      </span>
      <p>{data.name}</p>
      <p>{data.price}</p>
      {qty >= 1 ? (
        <div>
          <button onClick={() => handleCartSub(data)}>-</button>
          <span>{qty}</span>
          <button onClick={() => handleCartAdd(data)}>+</button>
        </div>
      ) : (
        <button onClick={() => handleCartAdd(data)}>Add to cart</button>
      )}
    </div>
  );
};

export default Product;
