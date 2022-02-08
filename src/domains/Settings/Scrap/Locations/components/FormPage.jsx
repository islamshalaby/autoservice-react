import { Grid } from "@material-ui/core";
import React, { useMemo } from "react";
import RHFTextField from "../../../../common/Fields/RHFTextField";
import SelectField from "../../../../common/Fields/SelectField";

const FormPage = (props) => {
  const { name, countries } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <RHFTextField
          name={`name.ar`}
          label={" اسم مكان السكراب بالعربية"}
          placeholder={" اسم المكان"}
          fullWidth
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
      <Grid item xs={6}>
        <RHFTextField
          name={`name.en`}
          label={" اسم مكان السكراب بالانجليزية"}
          placeholder={" اسم المكان"}
          fullWidth
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
    </Grid>
  );
};

export default FormPage;
