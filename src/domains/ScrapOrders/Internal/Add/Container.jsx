import React, { useEffect } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import LoadingIndicator from "../../../common/LoadingIndicator";
import useScrapInquires from "../../useScrapInquires";
import AddOrderFormContainer from "./components/AddOrderFormContainer";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId } = useUserSettingsContext();
  const { data, fetch, isFetching } = useScrapInquires();

  useEffect(() => {
    fetch(userId, countryId);
  }, []);

  if (isFetching) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      <AddOrderFormContainer />
    </div>
  );
};

export default Container;
