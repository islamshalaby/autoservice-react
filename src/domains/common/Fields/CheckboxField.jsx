import React from "react";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CheckboxField = (props) => {
  const { name, label } = props;

  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          control={control}
          name={name}
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <Checkbox color='primary' onChange={onChange} checked={value}>
              Checkbox
            </Checkbox>
          )}
        />
      }
      label={
        <Typography color='textPrimary' variant='body2'>
          {label}
        </Typography>
      }
    />
  );
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  InputLabelProps: PropTypes.object,
};

CheckboxField.defaultProps = {
  label: "",
  InputLabelProps: {},
  onChange: () => null,
};

export default CheckboxField;
