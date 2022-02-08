import axiosInstance from "../../../../axiosInstance";

export const get = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get('lookup/car-brand/all');

export const getById = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get(`lookup/car-brand/${id}`);

export const post = (idToken, country, body) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).post('lookup/car-brand', body);

export const put = (idToken, country, body, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).post(`lookup/car-brand/${id}`, body);

export const del = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).delete(`lookup/car-brand/${id}`);