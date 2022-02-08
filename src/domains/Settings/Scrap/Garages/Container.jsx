import React, { useEffect, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { formatCsvData } from "../../../common/utils/export";
import Page from "./components/Page";
import { columns } from "./constants";
import useGarages from "./useGarages";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId } = useUserSettingsContext();
  const {
    data: garages,
    fetch: fetchGarages,
    remove: deleteGarage,
    isFetching: isFetchingGarages,
    isUpdating,
    update: updateGarage,
  } = useGarages();

  useEffect(() => {
    fetchGarages(userId, countryId);
  }, [userId, countryId]);

  const onDelete = (id) => {
    deleteGarage(userId, countryId, id);
  };

  const handleUpdateGarage = (updated, id) => {
    updateGarage(userId, countryId, { updated }, id);
  };
  if (isFetchingGarages) {
    return <LoadingIndicator />;
  }

  return (
    <Page
      title='الكراجات'
      data={garages}
      columns={columns}
      csvData={formatCsvData(garages)}
      onDelete={onDelete}
      updateGarage={handleUpdateGarage}
      isUpdating={isUpdating}
    />
  );
};

export default Container;
