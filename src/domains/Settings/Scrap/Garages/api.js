import axiosInstance from "../../../../axiosInstance";

export const get = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get('merchant/all');
export const getById = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).get(`merchant/${id}`);
export const post = (idToken, country, body) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).post('merchant', body);
export const put = (idToken, country, body, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).put(`merchant/${id}`, body);
export const updateApp = (idToken, country, body, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).put(`merchant/app-updated/${id}`, body);
export const del = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country, "languageCode": 'ar'}).delete(`merchant/${id}`);