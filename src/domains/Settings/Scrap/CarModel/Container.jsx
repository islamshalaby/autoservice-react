import React, { useEffect } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { columns } from "./constants";
import Page from "./components/Page";
import useCarModels from "./useCarModels";
import { formatCsvData } from "../../../common/utils/export";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const {
    data: carModels,
    fetch: fetchCarModels,
    remove: deleteCarModel,
    isFetching: isFetchingCarModels,
  } = useCarModels();

  useEffect(() => {
    fetchCarModels(userId, countryId);
  }, [userId, countryId]);

  const onDelete = (id) => {
    deleteCarModel(userId, countryId, id);
  };

  if (isFetchingCarModels) {
    return <LoadingIndicator />;
  }

  return (
    <Page
      title='موديلات السيارات'
      data={carModels}
      csvData={formatCsvData(carModels)}
      columns={columns}
      isRtl={isRtl}
      onDelete={onDelete}
    />
  );
};

export default Container;
