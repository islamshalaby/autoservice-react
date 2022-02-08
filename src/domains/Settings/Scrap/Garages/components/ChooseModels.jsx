import { Box, Chip, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import RadioGroup from "../../../../common/Fields/RadioGroup";
import SelectField from "../../../../common/Fields/SelectField";

const useStyles = makeStyles((theme) => ({
  radioContainer: {
    display: "flex",
    flexDirection: "row",
  },
  placeholderHandler: {},
}));

const ChooseModels = (props) => {
  const { carOrigins, carBrands, carModels, activeCarModels } = props;
  const classes = useStyles(props);
  const { control, setValue, getValues } = useFormContext();

  const category = useWatch({
    name: "category",
    control,
    defaultValue: "add",
  });

  const origin = useWatch({
    name: "carOrigin",
    control,
  });

  const type = useWatch({
    name: "carBrand",
    control,
    defaultValue: "",
  });

  const modelValue = useWatch({
    name: "carModels",
    control,
    defaultValue: getValues("carModels") || [],
  });

  const currentModels = useMemo(
    () =>
      carModels.filter(
        (model) =>
          model.data.carBrand.carOrigin === origin &&
          model.data.carBrand.id === type
      ),
    [carModels, origin, type]
  );
  const currentBrands = useMemo(
    () => carBrands.filter((brand) => brand.data.carOrigin.id === origin),
    [carBrands, origin]
  );

  useEffect(() => {
    setValue("carBrand", currentBrands[0]);
  }, []);

  return (
    <>
      <Grid container>
        {activeCarModels && activeCarModels.length ? (
          <Grid item xs={12}>
            <RadioGroup
              name='category'
              options={[
                { label: "اختيار الموديلات", value: "add" },
                { label: "الموديلات المفعلة", value: "active" },
              ]}
              defaultValue={"add"}
              classes={{ root: classes.radioContainer }}
            />
          </Grid>
        ) : (
          <Typography variant='h6'>اختيار الموديلات</Typography>
        )}
      </Grid>
      {category === "add" ? (
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <SelectField
              name={"carOrigin"}
              label='بلد الصنع'
              options={carOrigins}
              placeholder=' اخار بلد الصنع'
            />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              name={"carBrand"}
              label='نوع السيارة'
              options={currentBrands}
              placeholder={" اختار نوع السيارة"}
            />
          </Grid>
          {type && (
            <Grid item xs={12}>
              <SelectField
                multiple={true}
                name={"carModels"}
                label='موديلات السيارات'
                options={currentModels}
                value={modelValue}
                clearable
                disableCloseOnSelect
                placeholder={
                  modelValue.length
                    ? carModels.reduce((curr, type) => {
                        if (modelValue.includes(type.value)) {
                          return [...curr, `${type.label} `];
                        }
                        return curr;
                      }, [])
                    : "  اختار الموديلات"
                }
                className={clsx({
                  [classes.placeholderHandler]: modelValue.length > 0,
                })}
                rules={{ required: "هذه الخانة مطلوبه" }}
              />
            </Grid>
          )}
        </Grid>
      ) : (
        (activeCarModels || []).map((model) => <Box>{model.name}</Box>)
      )}
    </>
  );
};

export default ChooseModels;
