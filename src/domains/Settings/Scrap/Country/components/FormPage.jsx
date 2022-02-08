import { Grid } from "@material-ui/core";
import React from "react";
import RHFTextField from "../../../../common/Fields/RHFTextField";

const FormPage = (props) => {
  const { name } = props;
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <RHFTextField
          name={`name.ar`}
          label={"اسم البلد بالعربية"}
          placeholder={" اسم البلد"}
          fullWidth
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
      <Grid item xs={6}>
        <RHFTextField
          name={`name.en`}
          label={"اسم البلد بالانجليزية"}
          placeholder={" اسم البلد"}
          fullWidth
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
    </Grid>
  );
};

export default FormPage;
