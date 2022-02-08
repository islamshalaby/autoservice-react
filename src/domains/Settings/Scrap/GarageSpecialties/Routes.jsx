import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = React.lazy(() => import("./Container"));
const FormContainer = React.lazy(() => import("./FormContainer"));

export const Routes = () => {
  return [
    <Route
      key='SpecialtiesContainerRenderer'
      path={ROUTES.GARAGES_SPECIALTIES}
      component={Container}
      exact
    />,
    <Route
      key='SpecialtiesFormRenderer'
      path={ROUTES.ADD_GARAGES_SPECIALTIES}
      component={FormContainer}
      exact
    />,
  ];
};
