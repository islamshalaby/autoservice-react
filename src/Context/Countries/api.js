import axiosInstance from "../../axiosInstance";

const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwMDIyMjA5OSIsImlhdCI6MTYzNTg5NTg0MSwiZXhwIjoxOTUxMjU1ODQxfQ.eu8D7aUZ_u-U6zoH41Y4XbRq0wfkBu7kYtVNt1m08c8'
export const getCountries = () => axiosInstance({'accept': '*/*', 'Authorization': tempToken}, 0).get('lookup/country/all');