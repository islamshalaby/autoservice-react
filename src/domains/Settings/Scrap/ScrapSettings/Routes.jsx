import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));

export const Routes = () => {
  return (
    <Route
      key='SettingsContainerRenderer'
      path={ROUTES.SETTINGS}
      component={Container}
      exact
    />
  );
};
