import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../common/Header/Header";
import { TABS, ADD_TABS, ADD_ROOT } from "./constants";
import { Routes as ScrapSettingsRoutes } from "./Scrap/ScrapSettings/Routes";
import { Routes as LocationsRoutes } from "./Scrap/Locations/Routes";
import { Routes as GarageSpecialtiesRoutes } from "./Scrap/GarageSpecialties/Routes";
import { Routes as GaragesRoutes } from "./Scrap/Garages/Routes";
import { Routes as CountryRoutes } from "./Scrap/Country/Routes";
import { Routes as CarTypeRoutes } from "./Scrap/CarType/Routes";
import { Routes as CarModelRoutes } from "./Scrap/CarModel/Routes";
import LoadingIndicator from "../common/LoadingIndicator";
import delay from "../../delay";

const Container = () => {
  const [currentTabs, setCurrentTabs] = useState(TABS);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const params = useParams();

  const doTabs = async (tabs) => {
    setCurrentTabs(tabs);
  };
  useEffect(() => {
    setLoading(true);
    if (location.pathname.includes(ADD_ROOT)) {
      doTabs(ADD_TABS);
    }
    setLoading(false);
  }, [location.pathname]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Header tabs={currentTabs} />
      <ScrapSettingsRoutes key='ScrapSettingsRoutes' />
      <LocationsRoutes key='LocationsRoutes' />
      <GarageSpecialtiesRoutes key='GarageSpecialtiesRoutes' />
      <GaragesRoutes key='GaragesRoutes' />
      <CountryRoutes key='CountryRoutes' />
      <CarTypeRoutes key='CarTypeRoutes' />
      <CarModelRoutes key='CarModelRoutes' />
    </>
  );
};

export default Container;
