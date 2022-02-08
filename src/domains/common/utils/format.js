import { SUPPORTED_COUNTRIES } from "../constants/countries";

export const selectFormat = (response => (response || []).reduce((curr, data) => ([
  ...curr,
  {
    label: data.name,
    value: data._id,
    data: data,
  }
]), []))

export const formatCountries = (response) => response.reduce((curr, country) => {
  if(SUPPORTED_COUNTRIES.includes(country.id)){
    return [
      ...curr,
      {
        label: country.name,
        value: country._id
      }
    ]
  }
  return curr;
}, [])

export const getLanguageFields = obj => ({
  names: Object.values(obj),
  langs: Object.keys(obj),
})