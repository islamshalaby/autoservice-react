import React, { createContext, useContext, useEffect, useState } from "react";
import MainLayout from "./Layouts/MainLayout/MainLayout";

import { CssBaseline, makeStyles } from "@material-ui/core";
import {useUserSettingsContext} from "./Context/UserSettings/useUserSettingsContext";
import { getCountries } from "./Context/Countries/api";
import { useCountriesContext } from "./Context/Countries/useCountriesContext";
import LoadingIndicator from "./domains/common/LoadingIndicator";
import { formatCountries } from "./domains/common/utils/format";

const useStyles = makeStyles(theme => ({
  isRtl: {
    direction: props => props.isRtl ? 'rtl' : 'ltr',
  }
}))

function App(props) {
  const { isRtl } = useUserSettingsContext();
  const { countryId, countries, setCountries} = useCountriesContext();
  const classes = useStyles(props = {isRtl})

  console.log(countryId)
  const fetchCountries = async () => {
    const response = await getCountries();
    setCountries(formatCountries(response.data.body));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (!countries.length) {
    return <LoadingIndicator />;
  }
  
  return (
    <div className={classes.isRtl}>
      <CssBaseline />
      <MainLayout />
    </div>
  );
}

export default App;
