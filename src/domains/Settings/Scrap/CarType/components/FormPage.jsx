import { Grid } from "@material-ui/core";
import React from "react";
import RHFTextField from "../../../../common/Fields/RHFTextField";
import SelectField from "../../../../common/Fields/SelectField";

const FormPage = (props) => {
  const { selectData } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SelectField
            label={"بلد الصنع"}
            placeholder={" اسم البلد"}
            name={"carOrigin"}
            options={selectData}
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <RHFTextField
            name={`name.ar`}
            label={"اسم نوع السيارة"}
            placeholder={"  اسم نوع السيارة بالعربية"}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
        <Grid item xs={6}>
          <RHFTextField
            name={`name.en`}
            label={"اسم نوع السيارة"}
            placeholder={" اسم نوع السيارة بالانجليزية"}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormPage;
