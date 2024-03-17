import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { wishlistAction, cartAction } from "../store/Cart/CartActionTypes";
import { Button, Card, Col, Row } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import style from "./CartPage.module.css";
import AddressForm from "../components/AddressForm";
import CheckoutSummary from "../components/Checkout";
import AddressList from "../components/AddressList";
import AddressModal from "../components/AddressListModal";
import CouponModal from "../components/CouponModal";

const CartPage = () => {
  let [couponDiscountPercent, setCouponDiscountPercent] = useState(0);
  const list = useSelector((state) => state.productData.cart);
  const valueList = Object.values(list);
  console.log(list);

  if (valueList.length === 0) {
    return <EmptyCart />;
  }

  let total = valueList.reduce(
    (acc, initial) => acc + initial.price * initial.quantity,
    0
  );
  total = Math.floor(total);

  return (
    <div className={style.cart_page}>
      <div>
        <AddressModal />
        <CouponModal
          total={total}
          setCouponDiscountPercent={setCouponDiscountPercent}
        />

        <h2>Cart</h2>
        {valueList.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <CheckoutSummary
        list={valueList}
        total={total}
        couponDiscountPercent={couponDiscountPercent}
      />
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

export default CartPage;
