import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullHeart, emptyHeart } from "../asset/svgs";
import { cartAction, wishlistAction } from "../store/ActionTypes";
const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const qty = cart[data.id]?.quantity;
  const isWishlisted = Boolean(wishlist[data.id]);

  // const imageUrl = `${window.location.origin}/${data.imageUrl}`;

  const handleCartAdd = (item) => {
    dispatch(cartAction(item, "add"));
  };

  const handleCartSub = (item) => {
    dispatch(cartAction(item, "subtract"));
  };

  const handleAddWishlist = (item) => {
    dispatch(wishlistAction(item, "add"));
  };

  const handleDeleteWishlist = (item) => {
    dispatch(wishlistAction(item, "delete"));
  };

  return (
    <div className="product">
      {isWishlisted ? (
        <span onClick={() => handleDeleteWishlist(data)}>{fullHeart}</span>
      ) : (
        <span onClick={() => handleAddWishlist(data)}>{emptyHeart}</span>
      )}
      <p>{data.name}</p>
      <p>{data.price}</p>
      <img src={data.imageUrl} alt="product" className="product-image" />
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
