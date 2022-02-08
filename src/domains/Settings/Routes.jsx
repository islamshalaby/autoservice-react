import React from "react";
import { Route } from "react-router-dom";
import { ADD_ROOT, ROOT } from "./constants";

const Container = React.lazy(() => import("./Container"));

const Routes = () => {
  return [
    <Route key='SettingsContainerRenderer' path={ROOT} component={Container} />,
  ];
};

export default Routes;
