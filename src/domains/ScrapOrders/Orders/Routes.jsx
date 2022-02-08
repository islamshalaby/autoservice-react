import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../constants";

const Container = React.lazy(() => import("./Container"));

const Routes = () => {
  return [
    <Route
      key='OrdersContainerRenderer'
      path={ROUTES.ORDERS}
      component={Container}
    />,
  ];
};

export default Routes;
