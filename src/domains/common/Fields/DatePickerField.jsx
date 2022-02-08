import React from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { Controller, useFormContext } from "react-hook-form";
import { nanoid } from "nanoid";
import { InputAdornment, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import get from "lodash/get";

const useStyles = makeStyles(
  (theme) => ({
    gutterBottom: {
      marginBottom: theme.spacing(2),
    },
  }),
  { name: "CK-DatePickerField" }
);

function DatePickerField(props) {
  const {
    name,
    label,
    inputProps,
    id = nanoid(),
    gutterBottom,
    icon,
    ...rest
  } = props;

  const classes = useStyles(props);

  const methods = useFormContext(props);
  const {
    register,
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

  // Register Component as form Field

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={label}
            id={id}
            variant='inline'
            inputVariant={"outlined"}
            PopoverProps={{ size: "small" }}
            error={Boolean(errorMessage)}
            helperText={errorMessage}
            InputProps={{
              "aria-invalid": Boolean(errorMessage),
              inputProps: inputProps,
              startAdornment: icon ? (
                <InputAdornment position='start'>{icon}</InputAdornment>
              ) : null,
            }}
            className={clsx({ [classes.gutterBottom]: gutterBottom })}
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
    </MuiPickersUtilsProvider>
  );
}

DatePickerField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  gutterBottom: PropTypes.bool,
  inputProps: PropTypes.shape({}),
};

DatePickerField.defaultProps = {
  label: "",
  gutterBottom: false,
  inputProps: {},
};

export default DatePickerField;
