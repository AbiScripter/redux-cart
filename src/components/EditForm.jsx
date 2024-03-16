import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

const EditForm = ({ setIsEditFormModalOpen, editId }) => {
  console.log("form", editId);
  const addressList = useSelector((state) => state.address.addressList);

  const formPrefill = addressList[editId];
  const [form] = Form.useForm(); //for form resetting
  // console.log(initalValues);
  const dispatch = useDispatch();

  const handleFormUpdate = (data) => {
    console.log("dataa...", data);

    dispatch({
      type: "ADDRESS",
      payload: { data: data, operation: "edit", editId: editId },
    });

    alert("editing daaa punda mavane");

    form.resetFields(); //reset the form
    setIsEditFormModalOpen((isModalOpen) => !isModalOpen); //close the form modal after submitting
  };

  return (
    <Form
      form={form}
      variant="filled"
      style={{ maxWidth: 600 }}
      onFinish={handleFormUpdate}
      initialValues={{ ...formPrefill }}
      // initialValues={initalValues}
    >
      <h3>Contact Details</h3>
      <Form.Item
        label="Input"
        name="name"
        rules={[{ required: true, message: "Name*" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile No"
        name="mobile"
        rules={[{ required: true, message: "Mobile No*" }]}
      >
        <Input />
      </Form.Item>

      <h3>Address</h3>
      <Form.Item
        label="pincode"
        name="pincode"
        rules={[{ required: true, message: "Pincode*" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="address"
        name="address"
        rules={[{ required: true, message: "Address*" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="city/town"
        name="city"
        rules={[{ required: true, message: "City*" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="state"
        name="state"
        rules={[{ required: true, message: "State*" }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" block htmlType="submit">
        Update Address
      </Button>
    </Form>
  );
};

export default EditForm;
