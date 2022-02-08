import React, { useEffect, useMemo, useState } from "react";
import { useCountriesContext } from "../../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../../Context/UserSettings/useUserSettingsContext";
import delay from "../../../../delay";
import PlainForm from "../../../common/Fields/PlainForm";
import FormPage from "./components/FormPage";
import useScrapTypes from "./useScrapTypes";
import { Box, makeStyles } from "@material-ui/core";
import Modal from "../../../common/Modal";
import { getLanguageFields } from "../../../common/utils/format";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: 0,
  },
}));

const FormContainer = (props) => {
  const { editObject } = props;
  const classes = useStyles(props);
  const { userId } = useUserSettingsContext();
  const { countryId } = useCountriesContext();
  const { fetchById, add, edit } = useScrapTypes();
  const id = useMemo(() => editObject?.id, [editObject]);
  const [item, setItem] = useState({});

  const defaultValues = {
    item,
  };

  const onSubmit = async (values) => {
    const formValues = {
      // ...values,
      ...getLanguageFields(values.name),
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
        <FormPage />
      </PlainForm>
    </>
  );
};

export default FormContainer;
