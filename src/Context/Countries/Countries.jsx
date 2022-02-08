import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCountries } from "./api";
import LoadingIndicator from "../../domains/common/LoadingIndicator";
import { CountriesContext } from "./context";

const Countries = (props = {}) => {
  const { children } = props;
  const [countries, setCountries] = useState({});
  const [countryId, setCountryId] = useState("");

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        countryId,
        setCountryId,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

Countries.propTypes = {
  children: PropTypes.node,
};

Countries.defaultProps = {
  children: null,
};

export default Countries;
