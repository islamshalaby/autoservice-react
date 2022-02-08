import React from "react";
import { Route } from "react-router-dom";
import { ROOT } from "./constants";
import OrdersRoutes from "./Orders/Routes";
import InternalRoutes from "./Internal/Routes";

const Routes = () => {
  return [
    <Route key='ScrapOrdersAllRoutes' path={ROOT}>
      <OrdersRoutes key='OrdersRoutes' />
      <InternalRoutes key='InternalRoutes' />
    </Route>,
  ];
};

export default Routes;
