import { Grid } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import DatePickerField from "../../../../common/Fields/DatePickerField";
import RHFTextField from "../../../../common/Fields/RHFTextField";
import SelectField from "../../../../common/Fields/SelectField";

const FormPage = (props) => {
  const { carOrigins, carBrands } = props;

  const { control } = useFormContext();

  const carOrigin = useWatch({
    name: "carOrigin",
    control,
  });

  const currentBrands = useMemo(() => {
    return carBrands.filter((carBrand) => {
      return carBrand.data.carOrigin.id === carOrigin;
    });
  }, [carOrigin, carBrands]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <SelectField
          label={"بلد الصنع"}
          placeholder={" اسم البلد"}
          name={"carOrigin"}
          options={carOrigins}
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectField
          label={"نوع السيارة"}
          placeholder={" اسم نوع السيارة"}
          name={"carBrand"}
          options={currentBrands}
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
      <Grid item xs={6}>
        <RHFTextField
          name={`name.en`}
          label={" اسم موديل السيارة بالعربية"}
          placeholder={"اسم موديل السيارة"}
          fullWidth
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
      <Grid item xs={6}>
        <RHFTextField
          name={`name.ar`}
          label={" اسم موديل السيارة بالانجليزية"}
          placeholder={"اسم موديل السيارة"}
          fullWidth
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>

      {/* <Grid item xs={6}>
        <DatePickerField
          name={`yearStart`}
          label={"سنة بداية الموديل"}
          fullWidth
          views={["year"]}
          disableFuture
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid>
      <Grid item xs={6}>
        <DatePickerField
          name={`yearEnd`}
          label={"سنة نهاية الموديل"}
          fullWidth
          views={["year"]}
          disableFuture
          rules={{ required: "هذه الخانة مطلوبه" }}
        />
      </Grid> */}
    </Grid>
  );
};

export default FormPage;
