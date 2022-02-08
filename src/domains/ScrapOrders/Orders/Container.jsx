import React, { useEffect, useState } from "react";
import { useCountriesContext } from "../../../Context/Countries/useCountriesContext";
import { useUserSettingsContext } from "../../../Context/UserSettings/useUserSettingsContext";
import Header from "../../common/Header/Header";
import { COLUMNS, ROUTES, TABS } from "../constants";
import Page from "./componenets/Page";
import useScrapInquiries from "../useScrapInquires";
import { formatCsvData } from "../../common/utils/export";
import LoadingIndicator from "../../common/LoadingIndicator";
import { useLocation } from "react-router-dom";

const Container = () => {
  const { countryId } = useCountriesContext();
  const { userId, isRtl } = useUserSettingsContext();
  const {
    data: inquiries,
    fetch: fetchInquiries,
    fetchById: fetchInquiryById,
    remove: deleteInquiry,
    fetchChat,
    isFetching: isFetchingInquiries,
  } = useScrapInquiries();

  const [currentList, setCurrentList] = useState(inquiries.allInquiries);
  const location = useLocation();

  const fetchItem = async (id) => {
    const item = await fetchInquiryById(userId, countryId, id);
    const chat = await fetchChat(userId, countryId, item.chatSessions[0]);
    return {
      inquiry: item,
      chat: chat,
    };
  };

  const deleteItem = async (id) => {
    await deleteInquiry(userId, countryId, id);
  };

  useEffect(() => {
    if (countryId) {
      fetchInquiries(userId, countryId);
    }
  }, [countryId, location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case ROUTES.CURRENT:
        setCurrentList(inquiries.currentInquiries);
        break;
      case ROUTES.RECEIVED:
        setCurrentList(inquiries.receivedInquiries);
        break;
      case ROUTES.ACCUMULATED:
        setCurrentList(inquiries.accumulatedInquiries);
        break;
      default:
        setCurrentList(inquiries.allInquiries);
        break;
    }
  }, [inquiries, location.pathname]);

  return (
    <>
      <Header tabs={TABS} />
      {isFetchingInquiries ? (
        <LoadingIndicator position='static' />
      ) : (
        <Page
          data={currentList}
          csvData={formatCsvData(currentList)}
          isRtl={isRtl}
          columns={COLUMNS}
          title={"الطلبات"}
          isFetchingInquiries={isFetchingInquiries}
          fetchItem={fetchItem}
          deleteItem={deleteItem}
        />
      )}
    </>
  );
};

export default Container;
