import { useState } from "react";
import { get, getById, post, put, del, updateApp } from "./api";
import { formatGarages } from "./utils";

export default (initLoading = true) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(initLoading);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetch = async (userId, country, withLoading = true) => {
    setIsFetching(withLoading);
    try{      
      const response = await get(userId, country);
      const formattedResponse = formatGarages(response.data.body);
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

    const update = async (userId, country, body, id) => {
      setIsUpdating(true);
      try{
        await updateApp(userId, country, body, id)
        await fetch(userId, country, false)
      } catch(e){

      } finally{
        setIsUpdating(false)
      }
    }

  return {
    data,
    fetch, 
    fetchById,
    add,
    edit,
    update,
    remove,
    isFetching,
    isUpdating,
  }


}