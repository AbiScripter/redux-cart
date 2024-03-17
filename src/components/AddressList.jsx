import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Row } from "antd";
import AddressFormModal from "./AddressFormModal";
import EditFormModal from "./EditFormModal";
import { addressAction } from "../store/Address/addressActionTypes";

const AddressList = () => {
  const list = useSelector((state) => state.address.addressList);
  // console.log(list);
  const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const valueList = Object.values(list);
  return (
    <div>
      <h3>Select Delivery Address</h3>

      <h3>Saved Address</h3>
      {valueList.map((user) => {
        return (
          <AddressCard
            key={user.id}
            user={user}
            isEditFormModalOpen={isEditFormModalOpen}
            setIsEditFormModalOpen={setIsEditFormModalOpen}
            setEditId={setEditId}
          />
        );
      })}
      {/* opens the address form when add address button clicked */}
      <AddressFormModal />
      <EditFormModal
        isEditFormModalOpen={isEditFormModalOpen}
        setIsEditFormModalOpen={setIsEditFormModalOpen}
        editId={editId}
      />
    </div>
  );
};

const AddressCard = ({
  user,
  isEditFormModalOpen,
  setIsEditFormModalOpen,
  setEditId,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(addressAction(user, "delete"));
  };

  const handleEdit = () => {
    setIsEditFormModalOpen((isOpen) => !isOpen);
    setEditId(() => user.id);
  };

  const handleDelivery = () => {
    dispatch(addressAction(user, "delivery"));
  };

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.id}</p>
      <p>
        {user.address},{user.city} {user.pincode}
      </p>
      <p>
        {user.city}, {user.state}{" "}
      </p>
      <p>Mobile: {user.mobile}</p>
      <Button onClick={handleDelivery}>
        {user.isDefault ? "Delivering HERE" : "Deliver Here "}
      </Button>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleEdit}>Edit</Button>
    </div>
  );
};

export default AddressList;
