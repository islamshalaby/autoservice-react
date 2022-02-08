import React, { useEffect } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { formatCsvData } from "../../../common/utils/export";
import { columns } from "./constants";
import Page from "./components/Page";
import useCarBrands from "./useCarBrands";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const {
    data: carBrands,
    fetch: fetchCarBrands,
    remove: deleteCarBrand,
    isFetching: isFetchingCarBrands,
  } = useCarBrands();

  useEffect(() => {
    fetchCarBrands(userId, countryId);
  }, [userId, countryId]);

  const onDelete = (id) => {
    deleteCarBrand(userId, countryId, id);
  };

  if (isFetchingCarBrands) {
    return <LoadingIndicator />;
  }
  return (
    <Page
      title='انواع السيارات'
      data={carBrands}
      csvData={formatCsvData(carBrands)}
      columns={columns}
      isRtl={isRtl}
      onDelete={onDelete}
    />
  );
};

export default Container;
