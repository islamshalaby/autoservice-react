import { useState } from "react";
import { get, post } from "./api";

export default (initLoading = true) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(initLoading);

  const fetch = async (userId, country) => {
    setIsFetching(true);
    try{      
      const response = await get(userId, country);
      setData(response.data.body);
    } catch(e){
      console.log(e)
    } finally{
      setIsFetching(false);
    }
  };

  const add = async (userId, country, body) => {
    try {
      await post(userId, country, body);
    } catch (e){
      console.log(e);
    }
  }

  return {
    data,
    fetch, 
    add,
    isFetching,
  }


}