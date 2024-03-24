import React from "react";
import "./WishListPage.css";

import { useDispatch, useSelector } from "react-redux";
import { cartAction, wishlistAction } from "../store/Cart/CartActionTypes";
import { Button, Card, Flex } from "antd";
import emptyWishlist from "../asset/empty-wishlist.png";
import { NavLink } from "react-router-dom";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.productData.wishlist);
  const valueList = Object.values(list);

  if (valueList.length === 0) {
    return <EmptyWishlist />;
  }

  const handleDeleteWishlist = (item) => {
    dispatch(wishlistAction(item, "delete"));
  };

  const handleMovingToCart = (item) => {
    dispatch(wishlistAction(item, "delete"));
    dispatch(cartAction(item, "add"));
  };

  return (
    <div className="wishlist_container">
      {valueList.map((item) => {
        return (
          <div className="wishlist_product">
            <Card
              key={item.id}
              cover={<img src={item.imageUrl} alt="product" />}
            >
              <p>
                <span>{item.name}</span>
                <br />
                <span> Rs. {item.price}</span>
              </p>
              <Flex gap={5} justify="center">
                <Button onClick={() => handleMovingToCart(item)}>
                  MOVE TO BAG
                </Button>
                <Button danger onClick={() => handleDeleteWishlist(item)}>
                  REMOVE
                </Button>
              </Flex>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const EmptyWishlist = () => {
  return (
    <div className="empty_wishlist">
      <img src={emptyWishlist} alt="empty-wishlist" />
      <p>Your Wish list is empty</p>
      <Button>
        <NavLink to="/">Explore More</NavLink>
      </Button>
    </div>
  );
};

export default WishlistPage;
