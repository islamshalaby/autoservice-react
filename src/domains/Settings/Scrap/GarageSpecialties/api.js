import axiosInstance from "../../../../axiosInstance";

export const get = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get('lookup/scrap-type/all');
export const getById = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get(`lookup/scrap-type/${id}`);
export const post = (idToken, country, body) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).post('lookup/scrap-type', body);
export const put = (idToken, country, body, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).put(`lookup/scrap-type/${id}`, body);
export const del = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).delete(`lookup/scrap-type/${id}`);