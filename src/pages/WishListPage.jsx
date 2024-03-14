import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, wishlistAction } from "../store/ActionTypes";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishlist);
  const valueList = Object.values(list);

  const handleDeleteWishlist = (item) => {
    dispatch(wishlistAction(item, "delete"));
  };

  const handleMovingToCart = (item) => {
    dispatch(wishlistAction(item, "delete"));
    dispatch(cartAction(item, "add"));
  };

  return (
    <div className="wishlist-wrapper">
      <h2>wishlist</h2>
      {valueList.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.imageUrl} alt="product" />
            <button onClick={() => handleDeleteWishlist(item)}>
              remove from wishlist
            </button>
            <button onClick={() => handleMovingToCart(item)}>
              Move to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default WishlistPage;
