import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, wishlistAction } from "../store/Cart/CartActionTypes";
import { Button, Card } from "antd";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.productData.wishlist);
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
          <Card key={item.id} cover={<img src={item.imageUrl} alt="product" />}>
            <p>{item.name}</p>
            <Button onClick={() => handleDeleteWishlist(item)}>
              remove from wishlist
            </Button>
            <Button onClick={() => handleMovingToCart(item)}>
              Move to Cart
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default WishlistPage;
