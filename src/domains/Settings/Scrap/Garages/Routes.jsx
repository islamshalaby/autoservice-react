import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));
const FormContainer = React.lazy(() => import("./FormContainer"));

export const Routes = () => {
  return [
    <Route
      key='GaragesRenderer'
      path={ROUTES.GARAGES}
      component={Container}
      exact
    />,
    <Route
      key='GaragesFormRenderer'
      path={ROUTES.ADD_GARAGES}
      component={FormContainer}
      exact
    />,
  ];
};
