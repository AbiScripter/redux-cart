import React from "react";
import { Col, Row } from "antd";

const CheckoutSummary = ({ list, total, couponDiscountPercent }) => {
  const platformFee = 20;
  let shippingCost = 0;
  let finalTotal = 0;
  const couponDiscount = Math.floor((couponDiscountPercent / 100) * total);

  const isShippingFree = Boolean(total > 1000);

  function totalCalcHelper(total, isShippingFree) {
    const cartDiscount = Math.floor((10 / 100) * total);
    if (isShippingFree) {
      shippingCost = 20;
    }
    return total - cartDiscount + platformFee + shippingCost - couponDiscount;
  }

  finalTotal = totalCalcHelper(total, isShippingFree);

  return (
    <div>
      <p>price details</p>
      <Row>
        <Col span={12}>Total MRP</Col>
        <Col span={12}>₹{Math.floor(total)}</Col>
      </Row>
      <Row>
        <Col span={12}>Discount on MRP (10%) </Col>
        <Col span={12}>₹{Math.floor((10 / 100) * total)}</Col>
      </Row>

      <Row>
        <Col span={12}>Coupon Discount </Col>
        <Col span={12}>₹{couponDiscount}</Col>
      </Row>
      <Row>
        <Col span={12}>Platform Fee</Col>
        <Col span={12}>₹20</Col>
      </Row>
      <Row>
        <Col span={12}>Shipping Fee</Col>
        <Col span={12}>₹{isShippingFree ? "free" : 20}</Col>
      </Row>
      <Row>
        <Col span={12}>Total Amount</Col>
        <Col span={12}>₹{finalTotal}</Col>
      </Row>
    </div>
  );
};

export default CheckoutSummary;