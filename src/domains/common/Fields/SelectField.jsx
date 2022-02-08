import React from "react";
import { Box, Checkbox, Chip, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { nanoid } from "nanoid";
import get from "lodash/get";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(
  (theme) => ({
    listItemBox: {
      display: "flex",
      alignItems: "center",
    },
    checkboxRoot: {
      paddingLeft: 0,
      padding: [4, "!important"],
    },
    checkboxLabel: {
      marginLeft: (props) => (props.withCheckBox ? "" : theme.spacing(1)),
      color: theme.palette.grey.dark,
      fontWeight: 600,
    },
    optionSelected: {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  }),
  { name: "CK-SelectField" }
);

function SelectField(props) {
  const {
    name,
    options,
    label,
    id = nanoid(),
    clearable,
    inputProps,
    placeholder,
    postChange,
    fieldIcon,
    multiple,
    withCheckBox,
    ...rest
  } = props;

  const methods = useFormContext(props);
  const {
    control,
    formState: { errors },
    setValue,
    clearErrors,
    trigger,
    watch,
  } = methods;

  const classes = useStyles({ withCheckBox });

  // Register Component as form Field
  // const { ref, ...restOfRegister } = register(name);

  const value = rest.value || watch(name);

  const currentValue = React.useMemo(() => {
    return options.find((option) => option.value === value) || null;
  }, [value, options, props.defaultValue]);

  React.useEffect(() => {
    if (rest?.defaultValue) {
      setValue(name, rest.defaultValue);
    }
  }, [rest.defaultValue]);

  const errorMessage = React.useMemo(() => {
    const fieldError = get(errors, name, null);

    if (fieldError) {
      return fieldError.message;
    }
    return null;
  }, [name, methods.formState]);

  const handleChange = (_, newValue) => {
    if (multiple) {
      const { value } = newValue.pop() || {};

      // prevent sending a value through the search.
      if (value === undefined || value === null) return;

      newValue.includes(value)
        ? newValue.splice(newValue.indexOf(value), 1)
        : newValue.push(value);
      setValue(name, newValue, { shouldDirty: true });
    } else {
      setValue(name, newValue?.value || null, { shouldDirty: true });
    }

    if (postChange) postChange(newValue);
    if (props.onChange) props.onChange(newValue);

    trigger(name);
    clearErrors(name);
    return newValue;
  };

  const renderOption = (option) => {
    if (multiple) {
      return (
        <Box className={classes.listItemBox}>
          {!withCheckBox && (
            <Checkbox
              classes={{ root: classes.checkboxRoot }}
              size={"small"}
              color={"primary"}
              checked={value.includes(option.value)}
            />
          )}
          <span className={classes.checkboxLabel}>{option.label}</span>
        </Box>
      );
    }

    return option.icon ? (
      <Box display='flex' alignContent='center' justifyContent='center'>
        <Box mr={3}>{option.icon}</Box>
        <span>{option.label}</span>
      </Box>
    ) : (
      option.label
    );
  };

  return (
    <Controller
      render={(props) => (
        <Autocomplete
          {...props}
          options={options}
          getOptionLabel={(option) => option.label}
          getOptionDisabled={(option) => option.disabled}
          value={currentValue}
          onChange={handleChange}
          renderOption={renderOption}
          multiple={multiple}
          {...rest}
          disableClearable={!clearable}
          renderInput={(params) => (
            <TextField
              {...inputProps}
              {...params}
              placeholder={placeholder}
              label={label}
              variant='outlined'
              error={Boolean(errorMessage)}
              helperText={errorMessage || (inputProps && inputProps.helperText)}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <React.Fragment>
                    {Boolean(currentValue?.icon || fieldIcon) && (
                      <InputAdornment position='start'>
                        {fieldIcon || currentValue.icon}
                      </InputAdornment>
                    )}
                    {multiple ? "" : params.InputProps.startAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      )}
      {...rest}
      name={name}
      control={control}
      {...rest}
    />
  );
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  clearable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  withCheckBox: PropTypes.bool,
};

SelectField.defaultProps = {
  label: "",
  options: [],
  clearable: false,
  withCheckBox: false,
};

export default SelectField;
