import React, { useEffect } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { formatCsvData } from "../../../common/utils/export";
import Page from "./components/Page";
import { columns } from "./constants";
import useScrapLocations from "./useScrapLocations";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const {
    data: scrapLocations,
    getByCountryId,
    remove: removeLocation,
    isFetching: isFetchingScrapLocations,
  } = useScrapLocations();

  useEffect(() => {
    getByCountryId(userId, countryId);
  }, [userId, countryId]);

  const onDelete = (id) => {
    removeLocation(userId, countryId, id);
  };

  if (isFetchingScrapLocations) {
    return <LoadingIndicator />;
  }

  return (
    <Page
      title='مواقع السكراب'
      data={scrapLocations}
      columns={columns}
      csvData={formatCsvData(scrapLocations)}
      isRtl={isRtl}
      onDelete={onDelete}
    />
  );
};

export default Container;
