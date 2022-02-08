import React, { useContext } from "react";
import { UserSettingsContext } from "./context";

export const useUserSettingsContext = () => {
  const context = useContext(UserSettingsContext);
  if (!context) {
    // Error message should be more descriptive
    throw new Error("No context found for AuthFormContext");
  }
  return context;
};
