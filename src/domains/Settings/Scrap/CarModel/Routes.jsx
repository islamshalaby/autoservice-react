import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));
const FormContainer = React.lazy(() => import("./FormContainer"));

export const Routes = () => {
  return [
    <Route
      key='CarModelContainerRenderer'
      path={ROUTES.MODELS}
      component={Container}
      exact
    />,
    <Route
      key='CarModelFormRenderer'
      path={ROUTES.ADD_MODELS}
      component={FormContainer}
      exact
    />,
  ];
};
