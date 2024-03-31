import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import CheckoutSummary from "../components/Checkout";
import AddressModal from "../components/Address/AddressListModal";
import CouponModal from "../components/Coupon/CouponModal";
import emptybag from "../asset/empty-bag.webp";
import "./CartPage.css";

const CartPage = () => {
  let [couponDiscountPercent, setCouponDiscountPercent] = useState(0);
  const list = useSelector((state) => state.productData.cart);
  const valueList = Object.values(list);
  // console.log(list);

  if (valueList.length === 0) {
    return <EmptyCart />;
  }

  let total = valueList.reduce(
    (acc, initial) => acc + initial.price * initial.quantity,
    0
  );
  total = Math.floor(total);

  return (
    <div className="cart_page">
      <div className="cart_page_left">
        <AddressModal />

        <div>
          {valueList.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="cart_page_right">
        <CouponModal
          total={total}
          setCouponDiscountPercent={setCouponDiscountPercent}
          couponDiscountPercent={couponDiscountPercent}
        />
        <CheckoutSummary
          list={valueList}
          total={total}
          couponDiscountPercent={couponDiscountPercent}
        />
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="emptybag">
      <img src={emptybag} alt="empty_bag" />
      <p> There is nothing in your bag. Let's add some items.</p>
      <Button>
        <NavLink to="/wishlist">Add Items from the Wishlist</NavLink>
      </Button>
    </div>
  );
};

export default CartPage;
