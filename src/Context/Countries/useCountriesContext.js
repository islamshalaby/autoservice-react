import React, { useContext } from "react";
import { CountriesContext } from "./context";

export const useCountriesContext = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    // Error message should be more descriptive
    throw new Error("No context found for AuthFormContext");
  }
  return context;
};