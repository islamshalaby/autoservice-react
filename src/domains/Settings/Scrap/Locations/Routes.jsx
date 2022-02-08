import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));
const FormContainer = React.lazy(() => import("./FormContainer"));

export const Routes = () => {
  return [
    <Route
      key='LocationsContainerRenderer'
      path={ROUTES.LOCATIONS}
      component={Container}
      exact
    />,
    <Route
      key='LocationsFormRenderer'
      path={ROUTES.ADD_LOCATIONS}
      component={FormContainer}
      exact
    />,
  ];
};
