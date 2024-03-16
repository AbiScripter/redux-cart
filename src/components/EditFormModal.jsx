import React, { useState } from "react";
import { Button, Modal } from "antd";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import Title from "antd/es/skeleton/Title";

const EditFormModal = ({
  isEditFormModalOpen,
  setIsEditFormModalOpen,
  editId,
}) => {
  // const showModal = () => {
  //   setIsEditFormModalOpen(true);
  // };

  const handleOk = () => {
    setIsEditFormModalOpen(false);
  };

  const handleCancel = () => {
    setIsEditFormModalOpen(false);
  };

  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Edit
      </Button> */}
      {/* <Button>{userId}</Button> */}
      <Modal
        title="Address Modal"
        open={isEditFormModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditForm
          setIsEditFormModalOpen={setIsEditFormModalOpen}
          editId={editId}
          // initalValues={initialValues}
          // userId={userId}
        />
      </Modal>
    </div>
  );
};

export default EditFormModal;
