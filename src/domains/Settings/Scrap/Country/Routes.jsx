import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));
const FormContainer = React.lazy(() => import("./FormContainer"));

export const Routes = () => {
  return [
    <Route
      key='CountriesContainerRenderer'
      path={ROUTES.COUNTRY}
      component={Container}
      exact
    />,
    <Route
      key='CountriesFormRenderer'
      path={ROUTES.ADD_COUNTRY}
      component={FormContainer}
      exact
    />,
  ];
};
