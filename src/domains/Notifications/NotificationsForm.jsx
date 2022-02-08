import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import RHFTextField from "../common/Fields/RHFTextField";

const useStyles = makeStyles((theme) => ({}));

const NotificationsForm = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container>
      <Grid item xs={6}>
        <RHFTextField name='Data.title' />
      </Grid>
      <Grid item xs={6}>
        <RHFTextField name={"Data.body"} />
      </Grid>
    </Grid>
  );
};

export default NotificationsForm;
