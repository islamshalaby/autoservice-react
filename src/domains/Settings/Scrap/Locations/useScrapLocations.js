import { useState } from "react"
import { selectFormat } from "../../../common/utils/format";
import { get, getById, post, put, del, getByCountry } from "./api";
import { formatLocations } from "./utils";

export default (initLoading = true) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(initLoading);
  const [selectData, setSelectData] = useState([])

  const fetch = async (userId, country) => {
    setIsFetching(true);
    try{
      const response = await get(userId, country);
      const formattedResponse = formatLocations(response.data.body);
      setData(formattedResponse);
    } catch(e){
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }

  const fetchById = async (userId, country, id) => {
    try {
      const response = await getById(userId, country, id);
      return response.data.body;
    } catch (e) {
      console.log(e)
    }
  }

  const add = async (userId, country, body) => {
      await post(userId, country, body);
  }

  const edit = async (userId, country, body, id) => {
    try {
      await put(userId, country, body, id);
    } catch(e){
      console.log(e);
    }
  }

  const remove = async (userId, country, id) => {
    try {
      await del(userId, country, id);
      setData(() => data.filter(data => data.id !== id));
    }catch(e){
        console.log(e)
      }
    }

  const getByCountryId = async (userId, country) => {
    setIsFetching(true);

    try{
      const response = await getByCountry(userId, country);
      setSelectData(selectFormat(response.data.body));
      setData(formatLocations(response.data.body));
    } catch(e){

    }
    setIsFetching(false);

  }

  return {
    data,
    selectData,
    fetch,
    fetchById,
    getByCountryId,
    add,
    edit,
    remove,
    isFetching,
  }
}