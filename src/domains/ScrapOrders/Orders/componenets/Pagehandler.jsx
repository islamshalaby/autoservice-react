import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatCsvData } from "../../../common/utils/export";
import { ROUTES } from "../../constants";
import Page from "./Page";

const Pagehandler = (props) => {
  const { inquiries, isRtl, columns } = props;

  return (
    <Page
      data={currentList}
      csvData={formatCsvData(currentList)}
      isRtl={isRtl}
      columns={columns}
      title={"الطلبات"}
    />
  );
};

export default Pagehandler;
