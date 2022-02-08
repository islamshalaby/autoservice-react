import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));

const Routes = () => {
  return [
    <Route
      key='InternalContainerRenderer'
      path={ROUTES.INTERNAL_ADD}
      component={Container}
      exact
    />,
  ];
};

export default Routes;
