import React, { useEffect, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { formatCsvData } from "../../../common/utils/export";
import Page from "./components/Page.jsx";
import { columns } from "./constants";
import useCarOrigins from "./useCarOrigins";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const {
    data: carOrigins,
    fetch: fetchCarOrigins,
    remove: deleteCarOrigin,
    isFetching: isFetchingCarOrigins,
  } = useCarOrigins();

  useEffect(() => {
    fetchCarOrigins(userId, countryId);
  }, [userId, countryId]);

  const onDelete = (id) => {
    deleteCarOrigin(userId, countryId, id);
  };

  if (isFetchingCarOrigins) {
    return <LoadingIndicator />;
  }

  return (
    <Page
      title='بلاد الصنع'
      data={carOrigins}
      columns={columns}
      csvData={formatCsvData(carOrigins)}
      isRtl={isRtl}
      onDelete={onDelete}
    />
  );
};

export default Container;
