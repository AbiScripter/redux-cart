import React, { useState } from "react";
import { Button, Modal } from "antd";
import CouponForm from "./CouponForm";

const CouponModal = ({ total, setCouponDiscountPercent }) => {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  const showModal = () => {
    setIsCouponModalOpen(true);
  };

  const handleOk = () => {
    setIsCouponModalOpen(false);
  };

  const handleCancel = () => {
    setIsCouponModalOpen(false);
  };

  return (
    <>
      <Button block danger type="primary" onClick={showModal}>
        Apply Coupon
      </Button>
      <Modal
        title="Coupon Modal"
        open={isCouponModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CouponForm
          total={total}
          setCouponDiscountPercent={setCouponDiscountPercent}
          setIsCouponModalOpen={setIsCouponModalOpen}
        />
      </Modal>
    </>
  );
};

export default CouponModal;
