import React from "react";
import { useDispatch } from "react-redux";
import { wishlistAction, cartAction } from "../store/Cart/CartActionTypes";
import { Button, Card, Flex } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import style from "../pages/CartPage.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  // const wishlist = useSelector((state) => state.wishlist);
  // let isWishlisted = Boolean(wishlist[item.id]);

  const handleMovingToWishlist = (item) => {
    //first add to wishlist
    dispatch(wishlistAction(item, "add"));
    //delete item from the cart
    dispatch(cartAction(item, "delete"));
  };

  const handleCartDelete = (item) => {
    dispatch(cartAction(item, "delete"));
  };

  const handleCartAdd = (item) => {
    dispatch(cartAction(item, "add"));
  };

  const handleCartSub = (item) => {
    //if its the last item
    if (item.quantity === 1) {
      dispatch(cartAction(item, "delete"));
      return;
    }
    dispatch(cartAction(item, "subtract"));
  };

  return (
    <div>
      {item.quantity > 0 ? (
        <Card
          className={style.card}
          cover={<img src={item.imageUrl} alt="product" />}
        >
          <div>
            <h3>{item.name}</h3>

            <Button size="small" onClick={() => handleCartSub(item)}>
              <MinusOutlined />
            </Button>
            <span> {item.quantity} </span>
            <Button size="small" onClick={() => handleCartAdd(item)}>
              {/* <span class="material-symbols-outlined">add</span> */}
              <PlusOutlined />
            </Button>

            <p>₹{Math.floor(item.quantity * item.price)}</p>
          </div>

          <Flex gap="small">
            <Button
              size="small"
              type="primary"
              onClick={() => handleMovingToWishlist(item)}
            >
              <span>Move to Wishlist</span>
            </Button>
            <Button
              size="small"
              danger
              type="primary"
              onClick={() => handleCartDelete(item)}
            >
              Delete from Cart
            </Button>
          </Flex>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartItem;
