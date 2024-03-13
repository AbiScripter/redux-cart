import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const list = useSelector((state) => state.cart);
  const valueList = Object.values(list);
  console.log(list);

  return (
    <div className="cart-wrapper">
      <h2>Cart</h2>
      {valueList.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
  );
};

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  let isWishlisted = Boolean(wishlist[item.id]);

  const handleWishlist = (item) => {
    dispatch({ type: "WISHLIST", payload: { data: item } });
  };

  const handleCartDelete = (item) => {
    dispatch({
      type: "CART",
      payload: { data: item, operation: "delete" },
    });
  };

  return (
    <>
      {item.quantity > 0 ? (
        <div>
          <p>
            <span>{item.name} </span>
            <span> {item.quantity}</span>
          </p>
          <button onClick={() => handleWishlist(item)}>
            {isWishlisted ? (
              <span>remove from wishlist</span>
            ) : (
              <span>add to wishlist</span>
            )}
          </button>
          <button onClick={() => handleCartDelete(item)}>
            remove from cart
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
