import axiosInstance from "../../../axiosInstance";
import { UPLOAD_IMAGE_LINK } from "./constants";

export const post = (idToken, country, fileName) => axiosInstance({'accept': '*/*', 'Authorization': idToken, 'country': country}).post(`${UPLOAD_IMAGE_LINK}${fileName}`)