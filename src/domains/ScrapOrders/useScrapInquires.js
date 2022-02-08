import { useState } from "react";
import { get, getById, del, getChatById } from "./api";
import { formatInquiriesData } from "./utils";

export default (initLoading = true) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(initLoading);

  const fetch = async (userId, country) => {
    setIsFetching(true);
    try{      
      const response = await get(userId, country);
      setData(formatInquiriesData(response.data.body));
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
    } catch (e){
      console.log(e)
    }
  }

  const fetchChat = async (userId, country, id) => {
    try {
      const response = await getChatById(userId, country, id);
      return response.data.body;
    } catch (e){
      console.log(e)
    }
  }

  const remove = async (userId, country, id) => {
    try {
      await del(userId, country, id);
      console.log(data)
      setData(() => ({
        ...data,
        allInquiries: data.allInquiries.filter(data => data.id !== id),
        currentInquiries: data.currentInquiries.filter(data => data.id !== id),
        receivedInquiries: data.receivedInquiries.filter(data => data.id !== id),
      }));
    } catch (e){
      console.log(e)
    }
  }

  return {
    data,
    fetch, 
    fetchById,
    remove,
    fetchChat,
    isFetching,
  }


}