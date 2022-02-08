import React from "react";
import Header from "../../common/Header/Header";
import { INTERNAL_TABS } from "../constants";
import AddRoutes from "./Add/Routes";
import DataRoutes from "./InternalOrders/Routes";

const Container = () => {
  return (
    <>
      <Header tabs={INTERNAL_TABS} />
      <AddRoutes key='AddRoutesInternal' />
      <DataRoutes key='DataRoutes' />
    </>
  );
};

export default Container;
