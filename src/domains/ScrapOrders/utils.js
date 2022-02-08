import { nanoid } from 'nanoid'
import moment from 'moment';

export const formatInquiriesData = (response) =>  {
  let allInquiries = [], currentInquiries = [], receivedInquiries = [], accumulatedInquiries = [];
  response.reduce((curr, data) => {
  const currentData = 
      {
        id: data._id,
        cells: [
          {
            data: `#${data.inquiryCode}`, 
            id: nanoid()
          }, 
          {
            data: data.owner?.name, 
            id: nanoid()
          }, 
          {
            data: data.owner?.countryCode && data.owner?.mobile ? `${data.owner?.countryCode} ${data.owner?.mobile}` : "",
            id: nanoid()
          }, 
          {
            data: data.carModel?.name,
            id: nanoid()
          }, 
          { 
            data: data.carModel?.carBrand?.name,
            id: nanoid(),
          },
          { 
            data: data.carModel?.carBrand?.carOrigin?.name,
            id: nanoid(),
          },
          { 
            data: data.scrapType?.name,
            id: nanoid(),
          },
          // { 
          //   data:data.deliveryDate ? moment(data.deliveryDate).format('Do MMMM YYYY') : "",
          //   id: nanoid(),
          // },
          { 
            data: data.entryDate ? moment(data.entryDate).format('Do MMMM YYYY') : "",
            id: nanoid(),
          },
        ],
      }
    
  switch(data.inquiryStatus){
    case 1:
      allInquiries.push(currentData);
      currentInquiries.push(currentData);
      break;
    case 2:
      allInquiries.push(currentData);
      receivedInquiries.push(currentData);
      break;
    case 3:
      allInquiries.push(currentData);
      accumulatedInquiries.push(currentData);
      break;
    default:
      allInquiries.push(currentData);
      break;
  }
  return [...curr, ...allInquiries]},[])
  return {
    allInquiries,
    currentInquiries,
    receivedInquiries,
    accumulatedInquiries,
  }
};
