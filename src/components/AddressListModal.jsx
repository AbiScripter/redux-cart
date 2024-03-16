import React, { useState } from "react";
import { Button, Modal } from "antd";
import AddressList from "./AddressList";
import { useSelector } from "react-redux";

const AddressModal = () => {
  const [isAddressListModalOpen, setIsAddressListModalOpen] = useState(false);

  // Find the address marked as default
  const addressList = useSelector((state) => state.address.addressList);
  let defaultAddress = null;
  Object.values(addressList).forEach((address) => {
    if (address.isDefault) {
      defaultAddress = address;
    }
  });

  const showModal = () => {
    setIsAddressListModalOpen(true);
  };

  const handleOk = () => {
    setIsAddressListModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddressListModalOpen(false);
  };

  return (
    <>
      <div>
        <AddressCard defaultAddress={defaultAddress} />
        <Button type="primary" onClick={showModal}>
          Change Address
        </Button>
      </div>

      <Modal
        title="Basic Modal"
        open={isAddressListModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddressList />
      </Modal>
    </>
  );
};

const AddressCard = ({ defaultAddress }) => {
  let { ...rest } = defaultAddress || {};
  return (
    <div>
      <p>
        Deliver to: {rest.name},{rest.pincode}
      </p>
      <p>
        {rest.address},{rest.city}
      </p>
    </div>
  );
};

export default AddressModal;
