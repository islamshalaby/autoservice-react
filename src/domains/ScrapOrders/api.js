import axiosInstance from "../../axiosInstance";

export const get = (idToken, country) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country}).get('scrap/inquiry/all');
export const getById = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country}).get(`scrap/inquiry/${id}`);
export const getChatById = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country}).get(`chat/inquiry/chat-session/${id}`);
export const del = (idToken, country, id) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country}).delete(`scrap/inquiry/${id}`);