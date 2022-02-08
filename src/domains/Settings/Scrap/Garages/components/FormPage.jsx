import React, { useEffect, useMemo } from "react";
import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import RHFTextField from "../../../../common/Fields/RHFTextField";
import ChooseModels from "./ChooseModels";
import SelectField from "../../../../common/Fields/SelectField";
import { useFormContext, useWatch } from "react-hook-form";
import { useCountriesContext } from "../../../../../Context/Countries/useCountriesContext";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  mobile: {
    "& input": {
      direction: "ltr",
      textAlign: "right",
    },
    "& input[disabled]": {
      color: theme.colors.black.medium,
    },
  },
  placeholderHandler: {
    // overwrite placeholder styles.
    "& input.MuiInputBase-input::placeholder": {
      opacity: "1 !important",
      fontStyle: "normal !important",
      color: "#495057 !important",
      fontWeight: "600 !important",
    },
  },
}));

const FormPage = (props) => {
  const {
    carOrigins,
    carBrands,
    carModels,
    scrapTypes,
    speakingLangs,
    activeCarModels,
    locations,
  } = props;
  const { countryId } = useCountriesContext();

  const classes = useStyles(props);

  const { control, getValues, setValue } = useFormContext();

  useEffect(() => {
    if (countryId === "6184aea034e78407518074e8") {
      setValue("countryCode", "+965");
    } else {
      setValue("countryCode", "+971");
    }
  }, [countryId]);

  const speakingLangsOptions = useMemo(
    () => speakingLangs.map((lang) => ({ label: lang.name, value: lang._id })),
    []
  );

  const scrapsValue = useWatch({
    name: "scrapTypes",
    control,
    defaultValue: getValues("scrapTypes") || [],
  });

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <RHFTextField
            name={`name.ar`}
            label={"اسم الكراج بالعربية"}
            placeholder={" اسم الكراج بالعربية"}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
        <Grid item xs={6}>
          <RHFTextField
            name={`name.en`}
            label={"اسم الكراج بالانجليزية"}
            placeholder={" اسم الكراج بالانجليزية"}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <RHFTextField
            name={`mobile`}
            label={"رقم الهاتف"}
            placeholder={"رقم الهاتف"}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
            className={classes.mobile}
          />
        </Grid>
        <Grid item xs={2}>
          <RHFTextField
            name={`countryCode`}
            label={"الرقم الدولي"}
            disabled={true}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
            className={classes.mobile}
          />
        </Grid>
        <Grid item xs={6}>
          <RHFTextField
            name={`fullName`}
            placeholder={" الاسم الكامل"}
            label={"اسم مالك الكراج"}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectField
            name={`speakingLangs`}
            label={"اللغة"}
            placeholder={" اختار لغة الكراج"}
            options={speakingLangsOptions}
            fullWidth
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SelectField
            name={`city`}
            label={"مكان السكراب"}
            placeholder={" مكان السكراب"}
            fullWidth
            options={locations}
            rules={{ required: "هذه الخانة مطلوبه" }}
          />
        </Grid>
        <Grid item xs={6}>
          <RHFTextField
            name={`commission`}
            label={"العمولة"}
            fullWidth
            defaultValue={0}
            type={"Number"}
            placeholder=' العمولة ما بين ٠٪ و ٢٥٪'
            inputProps={{ min: 0, max: 25 }}
            rules={{
              max: {
                value: 25,
                message: "لا يمكن تعدي ٢٥٪",
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}></Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SelectField
            name={`scrapTypes`}
            label={"تخصص الكراج"}
            placeholder={"تخصص الكراج"}
            multiple
            value={scrapsValue}
            placeholder={
              scrapsValue.length
                ? scrapTypes.reduce((curr, type) => {
                    if (scrapsValue.includes(type.value)) {
                      return [...curr, `${type.label} `];
                    }
                    return curr;
                  }, [])
                : "  اختار التخصصات"
            }
            disableCloseOnSelect
            fullWidth
            options={scrapTypes}
            rules={{ required: "هذه الخانة مطلوبه" }}
            className={clsx({
              [classes.placeholderHandler]: scrapsValue.length > 0,
            })}
          />
        </Grid>
      </Grid>
      <ChooseModels
        carOrigins={carOrigins}
        carBrands={carBrands}
        carModels={carModels}
        activeCarModels={activeCarModels}
        classes={classes}
      />
    </>
  );
};

export default FormPage;
