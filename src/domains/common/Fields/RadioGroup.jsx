import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { nanoid } from "nanoid";
import FormControl from "@material-ui/core/FormControl";
import MuiRadioGroup from "@material-ui/core/RadioGroup";
import {
  makeStyles,
  Box,
  InputLabel,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    label: {},
    hiddenInputField: {
      display: "none",
    },
    addText: {
      // marginLeft: theme.spacing(1),
      width: "100%",
      textAlign: "center",
      color: "#495057",
      fontWeight: 600,
      fontSize: 12,
    },
    addIconButton: {
      background: "#F5F5F5",
      border: "1px solid #ACB5BD",
      boxSizing: "border-box",
      borderRadius: "3px",
      width: "87px",
      height: "87px",
    },
    formControlLabel: {
      position: "static",
      transform: "none",
      marginBottom: theme.spacing(2),
    },
  }),
  { name: "CK-RadioGroup" }
);

function RadioGroup(props) {
  const {
    name,
    label,
    id = nanoid(),
    options,
    InputLabelProps,
    allowUpload,
    onUpload,
    maxAllowedSize,
    AddText,
    prevValue,
    allowNone,
    allowedUploadTypes,
    uploadType,
    ...rest
  } = props;

  const classes = useStyles(props);

  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;

  const errorMessage = React.useMemo(() => {
    if (errors && errors[name]) {
      return errors[name].message;
    }
    return null;
  }, [name, methods.formState]);

  return (
    <FormControl classes={{ root: classes.formControlWrapper }}>
      {label && (
        <InputLabel
          shrink={false}
          className={clsx(classes.formControlLabel)}
          htmlFor={id}
        >
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MuiRadioGroup
            id={id}
            classes={{ root: classes.root }}
            {...field}
            onChange={(e) => {
              field.onChange(e);
            }}
          >
            <React.Fragment>
              {options.map((option, index) => (
                <div key={option.value}>
                  <Box
                    key={option.value}
                    component='span'
                    position='relative'
                    className={classes.formGroupItem}
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          color='primary'
                          name={option.value}
                          value={option.value}
                          selected={field.value}
                          {...rest}
                        />
                      }
                      label={option.label}
                    />
                  </Box>
                </div>
              ))}
            </React.Fragment>
          </MuiRadioGroup>
        )}
        error={errorMessage}
        {...rest}
      />
    </FormControl>
  );
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    })
  ),
  allowUpload: PropTypes.bool,
  onUpload: PropTypes.func,
  maxAllowedSize: PropTypes.number,
  allowNone: PropTypes.bool,
};

RadioGroup.defaultProps = {
  label: "",
  name: "",
  options: [],
  allowUpload: false,
  onUpload: () => null,
  maxAllowedSize: "",
  allowNone: false,
};

export default RadioGroup;
