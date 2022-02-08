import React, { useEffect, useMemo, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import PlainForm from "../../../common/Fields/PlainForm";
import LoadingIndicator from "../../../common/LoadingIndicator";
import { getLanguageFields } from "../../../common/utils/format";
import useCarBrands from "../CarType/useCarBrands";
import useCarOrigins from "../Country/useCarOrigins";
import FormPage from "./components/FormPage";
import useCarModels from "./useCarModels";

const FormContainer = (props) => {
  const { editObject } = props;
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
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
  const { fetchById, add, edit } = useCarModels();
  const id = useMemo(() => editObject?.id, [editObject]);
  const [item, setItem] = useState({});

  const defaultValues = {
    ...item,
  };
  const onSubmit = async (values) => {
    const formValues = {
      ...getLanguageFields(values.name),
      carBrand: values.carBrand,
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
    if (id) {
      getCurrentItem();
    }
  }, [userId, countryId, id]);

  if (isFetchingCarBrands || isFetchingCarOrigins) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <PlainForm onSubmit={onSubmit} defaultValues={defaultValues} {...props}>
        <FormPage carOrigins={carOrigins} carBrands={carBrands} />
      </PlainForm>
    </>
  );
};

export default FormContainer;
