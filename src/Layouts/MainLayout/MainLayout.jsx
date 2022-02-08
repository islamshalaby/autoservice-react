import React from "react";
import LoadingIndicator from "../../domains/common/LoadingIndicator";
import SettingsRoutes from "../../domains/Settings/Routes";
import ScrapOrdersRoutes from "../../domains/ScrapOrders/Routes";
import Sidebar from "../../domains/common/Sidebar/Sidebar";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import {
  ADD_ROOT as SETTINGS_ADD_ROOT,
  ROOT as SETTINGS_ROOT,
  ROUTES as SETTINGS_ROUTES,
} from "../../domains/Settings/constants";
import {
  ROOT as SCRAP_ORDERS_ROOT,
  ROUTES as SCRAP_ORDERS_ROUTES,
} from "../../domains/ScrapOrders/constants";

const MainLayout = () => {
  return (
    <React.Suspense fallback={<LoadingIndicator />}>
      <Sidebar>
        <Switch>
          <Route path='/' exact>
            <Redirect to={SETTINGS_ROUTES.COUNTRY} />
          </Route>
          <Route path={SETTINGS_ADD_ROOT} exact>
            <Redirect to={SETTINGS_ROUTES.ADD_COUNTRY} />
          </Route>
          <Route path={SETTINGS_ROOT} exact>
            <Redirect to={SETTINGS_ROUTES.COUNTRY} />
          </Route>
          <Route
            path={[
              ...Object.values(SETTINGS_ROUTES),
              SETTINGS_ROOT,
              SETTINGS_ADD_ROOT,
            ]}
            key='SettingsDomainRoutesExactWrapper'
            exact
          >
            <SettingsRoutes key='SettingsRoutes' />
          </Route>

          <Route
            path={[...Object.values(SCRAP_ORDERS_ROUTES), SCRAP_ORDERS_ROOT]}
            key='ScrapOrdersRoutesExactWrapper'
            exact
          >
            <ScrapOrdersRoutes key='ScrapOrdersRoutes' />
            <Route path={SCRAP_ORDERS_ROUTES.INTERNAL}>
              <Redirect to={SCRAP_ORDERS_ROUTES.INTERNAL_ADD} />
            </Route>
            <Route path={SCRAP_ORDERS_ROUTES.ORDERS}>
              <Redirect to={SCRAP_ORDERS_ROUTES.NEW} />
            </Route>
          </Route>
        </Switch>
      </Sidebar>
    </React.Suspense>
  );
};

export default MainLayout;
