import { useDispatch } from "react-redux";
import { Button, Popover, Flex } from "antd";
import { addressAction } from "../../store/Address/addressActionTypes";

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
    <div className="address_card">
      <p>{user.name}</p>
      <p>
        {user.address},{user.city} {user.pincode}
      </p>
      <p>
        {user.city}, {user.state}{" "}
      </p>
      <p>Mobile: {user.mobile}</p>
      <Flex gap={5}>
        <Button
          size="small"
          onClick={handleDelivery}
          className={user.isDefault ? "default_delivery" : ""}
        >
          {user.isDefault ? "DELIVERING HERE" : "DELIVER HERE "}
        </Button>
        <Popover
          placement="right"
          content={user.isDefault ? "Can't Delete Default Address" : null}
        >
          <Button
            size="small"
            disabled={user.isDefault ? true : false}
            onClick={handleDelete}
            danger
          >
            DELETE
          </Button>
        </Popover>

        <Button size="small" onClick={handleEdit}>
          EDIT
        </Button>
      </Flex>
    </div>
  );
};

export default AddressCard;
