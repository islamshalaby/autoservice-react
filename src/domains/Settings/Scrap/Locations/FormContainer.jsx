import React, { useEffect, useMemo, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import PlainForm from "../../../common/Fields/PlainForm";
import { getLanguageFields } from "../../../common/utils/format";
import FormPage from "./components/FormPage";
import useScrapLocations from "./useScrapLocations";

const FormContainer = (props) => {
  const { editObject } = props;
  const { userId } = useUserSettingsContext();
  const { countryId, countries } = useCountriesContext();
  const { fetchById, add, edit } = useScrapLocations();
  const id = useMemo(() => editObject?.id, [editObject]);
  const [item, setItem] = useState({});

  const defaultValues = {
    ...item,
  };

  const onSubmit = async (values) => {
    const formValues = {
      ...getLanguageFields(values.name),
      countryId,
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
    if (id) {
      getCurrentItem();
    }
  }, [userId, countryId, id]);

  return (
    <>
      <PlainForm onSubmit={onSubmit} defaultValues={defaultValues} {...props}>
        <FormPage countries={countries} />
      </PlainForm>
    </>
  );
};

export default FormContainer;
