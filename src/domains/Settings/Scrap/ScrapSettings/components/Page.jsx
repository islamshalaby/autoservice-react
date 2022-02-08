import { Card, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import PlainForm from "../../../../common/Fields/PlainForm";
import RHFTextField from "../../../../common/Fields/RHFTextField";

const useStyles = makeStyles((theme) => ({}));

const Page = (props) => {
  const { name } = props;
  const classes = useStyles(props);
  return (
    <PlainForm>
      <RHFTextField
        name={`${name}.arName`}
        label='رسالة المصاريف بالعربية'
        fullWidth
      />
      <RHFTextField
        name={`${name}.enName`}
        label='رسالة المصاريف بالانجليزية'
        fullWidth
      />
      <RHFTextField name={`${name}.cost`} label='مصاريف التوصيل' fullWidth />
    </PlainForm>
  );
};

export default Page;
