import { Box } from "@material-ui/core";
import React from "react";
import RHFTextField from "../../../../common/Fields/RHFTextField";

const AddOrderForm = (props) => {
  const { name } = props;
  return (
    <Box>
      <RHFTextField name={name} />
    </Box>
  );
};

export default AddOrderForm;
