import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { wishlistAction, cartAction } from "../store/ActionTypes";

const CartPage = () => {
  const list = useSelector((state) => state.cart);
  const valueList = Object.values(list);
  console.log("CARTLIST: ", valueList);

  const total = valueList.reduce(
    (acc, initial) => acc + initial.price * initial.quantity,
    0
  );

  console.log(total);

  if (valueList.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart-wrapper">
      <h2>Cart</h2>
      {valueList.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}

      <div>
        <p>Total Amount : {Math.floor(total)}</p>
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <>
      <NavLink to="/wishlist">Add Items from the Wishlist</NavLink>
    </>
  );
};

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
        <div>
          <p>
            <span>{item.name} </span>
            <img src={item.imageUrl} alt="product" />
            <button onClick={() => handleCartSub(item)}>-</button>
            <span> {item.quantity}</span>
            <button onClick={() => handleCartAdd(item)}>+</button>

            <p>{Math.floor(item.quantity * item.price)}</p>
          </p>
          <button onClick={() => handleMovingToWishlist(item)}>
            <span>Move to wishlist</span>
          </button>
          <button onClick={() => handleCartDelete(item)}>
            Remove from cart
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartPage;
