import axiosInstance from "../../../axiosInstance";

export const get = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get('lookup/language/all/speaking');
export const post = (idToken, country, body) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).post('lookup/language/all/speaking', body);
