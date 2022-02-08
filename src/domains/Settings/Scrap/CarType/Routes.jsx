import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));
const FormContainer = React.lazy(() => import("./FormContainer"));

export const Routes = () => {
  return [
    <Route
      key='CarTypeContainerRenderer'
      path={ROUTES.TYPES}
      component={Container}
      exact
    />,
    <Route
      key='CarTypeFormRenderer'
      path={ROUTES.ADD_TYPES}
      component={FormContainer}
      exact
    />,
  ];
};
