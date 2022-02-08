import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { nanoid } from "nanoid";
import get from "lodash/get";
import { InputAdornment } from "@material-ui/core";

const RHFTextField = (props) => {
  const { name, label, inputProps, id = nanoid(), icon, hint, ...rest } = props;

  const methods = useFormContext(props);
  const {
    setValue,
    control,
    trigger,
    formState: { errors },
  } = methods;

  const errorMessage = React.useMemo(() => {
    const fieldError = get(errors, name, null);
    if (fieldError) {
      return fieldError.message;
    }
    return null;
  }, [name, methods.formState, errors]);

  React.useEffect(() => {
    if (rest.defaultValue) {
      setValue(name, rest.defaultValue);
    }
  }, [rest.defaultValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiTextField
          label={label}
          id={id}
          variant='outlined'
          error={Boolean(errorMessage)}
          helperText={errorMessage || hint}
          InputProps={{
            "aria-invalid": Boolean(errorMessage),
            inputProps: inputProps,
            startAdornment: icon ? (
              <InputAdornment position='start'>{icon}</InputAdornment>
            ) : null,
          }}
          {...rest}
          {...field}
          onChange={(e) => {
            rest.onChange && rest.onChange(e);
            rest.onChange && trigger(name);
            field.onChange(e);
          }}
          inputRef={field.ref}
        />
      )}
      {...rest}
    />
  );
};

export default RHFTextField;
