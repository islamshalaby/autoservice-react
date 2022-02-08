import React, { useEffect, useMemo, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import PlainForm from "../../../common/Fields/PlainForm";
import { getLanguageFields } from "../../../common/utils/format";
import useCarOrigins from "../Country/useCarOrigins";
import FormPage from "./components/FormPage";
import useCarBrands from "./useCarBrands";

const FormContainer = (props) => {
  const { editObject } = props;
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const { selectData, fetch, isFetching } = useCarOrigins();
  const { fetchById, add, edit } = useCarBrands();
  const id = useMemo(() => editObject?.id, [editObject]);
  const [item, setItem] = useState({});

  const defaultValues = {
    ...item,
  };

  const onSubmit = async (values) => {
    const formValues = {
      ...getLanguageFields(values.name),
      carOrigin: values.carOrigin,
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
    fetch(userId, countryId);
    if (id) {
      getCurrentItem();
    }
  }, [userId, countryId, id]);

  return (
    <>
      <PlainForm onSubmit={onSubmit} defaultValues={defaultValues} {...props}>
        <FormPage selectData={selectData} isFetching={isFetching} />
      </PlainForm>
    </>
  );
};

export default FormContainer;
