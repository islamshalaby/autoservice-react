import React, { useEffect } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { formatCsvData } from "../../../common/utils/export";
import Page from "./components/Page";
import { columns } from "./constants";
import useScrapTypes from "./useScrapTypes";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId } = useUserSettingsContext();
  const {
    data: scrapTypes,
    fetch: fetchScrapTypes,
    remove: deleteScrapType,
    isFetching: isFetchingScrapTypes,
  } = useScrapTypes();

  useEffect(() => {
    fetchScrapTypes(userId, countryId);
  }, [userId, countryId]);

  const onDelete = (id) => {
    deleteScrapType(userId, countryId, id);
  };

  if (isFetchingScrapTypes) {
    return <LoadingIndicator />;
  }

  return (
    <Page
      title='تخصصات الكراجات'
      data={scrapTypes}
      csvData={formatCsvData(scrapTypes)}
      columns={columns}
      onDelete={onDelete}
    />
  );
};

export default Container;
