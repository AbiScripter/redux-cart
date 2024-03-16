import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullHeart, emptyHeart } from "../asset/svgs";
import { cartAction, wishlistAction } from "../store/Cart/CartActionTypes";
import { Button, Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productData.cart);
  const wishlist = useSelector((state) => state.productData.wishlist);
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
    <Card cover={<img src={data.imageUrl} alt="product" />}>
      {isWishlisted ? (
        <span onClick={() => handleDeleteWishlist(data)}>{fullHeart}</span>
      ) : (
        <span onClick={() => handleAddWishlist(data)}>{emptyHeart}</span>
      )}
      <p>{data.name}</p>
      <p>{data.price}</p>

      {qty >= 1 ? (
        <div>
          <Button size="small" onClick={() => handleCartSub(data)}>
            <MinusOutlined />
          </Button>
          <span>{qty}</span>

          <Button size="small" onClick={() => handleCartAdd(data)}>
            <PlusOutlined />
          </Button>
        </div>
      ) : (
        <Button onClick={() => handleCartAdd(data)}>Add to cart</Button>
      )}
    </Card>
  );
};

export default Product;
