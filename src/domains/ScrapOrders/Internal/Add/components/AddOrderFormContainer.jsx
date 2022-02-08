import React from "react";
import PlainForm from "../../../../common/Fields/PlainForm";
import AddOrderForm from "./AddOrderForm";

const AddOrderFormContainer = (props) => {
  const onSubmit = (values) => console.log(values);
  return (
    <PlainForm onSubmit={onSubmit}>
      <AddOrderForm name='addOrder' />
    </PlainForm>
  );
};

export default AddOrderFormContainer;
