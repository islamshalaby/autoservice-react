import React, { useEffect, useMemo, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import PlainForm from "../../../common/Fields/PlainForm";
import LoadingIndicator from "../../../common/LoadingIndicator";
import useSpeakingLangs from "../../../common/spokenLanguages/useSpeakingLangs";
import { getLanguageFields } from "../../../common/utils/format";
import useCarModels from "../CarModel/useCarModels";
import useCarBrands from "../CarType/useCarBrands";
import useCarOrigins from "../Country/useCarOrigins";
import useScrapTypes from "../GarageSpecialties/useScrapTypes";
import useScrapLocations from "../Locations/useScrapLocations";
import FormPage from "./components/FormPage";
import useGarages from "./useGarages";

const FormContainer = (props) => {
  const { editObject } = props;
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const {
    selectData: locations,
    getByCountryId: getLocations,
    isFetching: isFetchingLocations,
  } = useScrapLocations();
  const {
    selectData: carOrigins,
    fetch: fetchCarOrigins,
    isFetching: isFetchingCarOrigins,
  } = useCarOrigins();
  const {
    selectData: carBrands,
    fetch: fetchCarBrands,
    isFetching: isFetchingCarBrands,
  } = useCarBrands();
  const {
    selectData: carModels,
    fetch: fetchCarModels,
    isFetching: isFetchingCarModels,
  } = useCarModels();
  const {
    selectData: scrapTypes,
    fetch: fetchScrapTypes,
    isFetching: isFetchingScrapTypes,
  } = useScrapTypes();
  const {
    data: speakingLangs,
    fetch: fetchSpeakingLangs,
    isFetching: isFetchingSpeakingLangs,
  } = useSpeakingLangs();

  const { fetchById, add, edit } = useGarages();
  const id = useMemo(() => editObject?.id, [editObject]);

  const [item, setItem] = useState({});

  const defaultValues = {
    ...item,
  };

  const onSubmit = async (values) => {
    const {
      name,
      speakingLangs,
      countryCode,
      mobile,
      scrapTypes,
      carModels,
      fullName,
      commission,
      city,
    } = values;
    const formValues = {
      ...getLanguageFields(name),
      speakingLangs: [speakingLangs],
      countryCode,
      mobile,
      scrapTypes,
      carModels,
      fullName,
      city,
      commission,
    };
    if (editObject) {
      await edit(userId, countryId, formValues, id);
    } else {
      await add(userId, countryId, formValues);
    }
  };

  const getCurrentItem = async () => {
    const current = await fetchById(userId, countryId, id);
    setItem(current);
  };

  useEffect(() => {
    fetchCarOrigins(userId, countryId);
    fetchCarBrands(userId, countryId);
    fetchCarModels(userId, countryId);
    fetchScrapTypes(userId, countryId);
    fetchSpeakingLangs(userId, countryId);
    getLocations(userId, countryId);
    if (id) {
      getCurrentItem();
    }
  }, [userId, countryId, id]);

  if (
    isFetchingCarOrigins ||
    isFetchingCarBrands ||
    isFetchingCarModels ||
    isFetchingScrapTypes ||
    isFetchingSpeakingLangs ||
    isFetchingLocations
  ) {
    return <LoadingIndicator />;
  }

  return (
    <PlainForm onSubmit={onSubmit} defaultValues={defaultValues} {...props}>
      <FormPage
        carOrigins={carOrigins}
        carBrands={carBrands}
        carModels={carModels}
        scrapTypes={scrapTypes}
        speakingLangs={speakingLangs}
        locations={locations}
        activeCarModels={editObject?.object?.carModels}
      />
    </PlainForm>
  );
};

export default FormContainer;
