import axiosInstance from "../../../../axiosInstance";

export const get = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get('lookup/city/all');
export const getById = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get(`lookup/city/${id}`);
export const getByCountry = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get(`lookup/cities-by-country/${country}`);
export const post = (idToken, country, body) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).post('lookup/city', body);
export const put = (idToken, country, body, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).put(`lookup/city/${id}`, body);
export const del = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).delete(`lookup/city/${id}`);