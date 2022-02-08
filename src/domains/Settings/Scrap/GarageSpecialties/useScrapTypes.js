import { useState } from "react";
import { selectFormat } from "../../../common/utils/format";
import { get, getById, post, put, del } from "./api";
import { formatScrapTypes } from "./utils";

export default (initLoading = true) => {
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  const [isFetching, setIsFetching] = useState(initLoading);

  const fetch = async (userId, country) => {
    setIsFetching(true);
    try{      
      const response = await get(userId, country);
      const formattedResponse = formatScrapTypes(response.data.body);
      const formattedSelect = selectFormat(response.data.body);
      setSelectData(formattedSelect);
      setData(formattedResponse);
    } catch(e){
      console.log(e)
    } finally{
      setIsFetching(false);
    }
  };

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

  return {
    data,
    selectData,
    fetch, 
    fetchById,
    add,
    edit,
    remove,
    isFetching,
  }

}