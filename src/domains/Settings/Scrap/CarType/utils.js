import { nanoid } from 'nanoid';
import moment from 'moment';

export const formatCarBrand = (response) => response.reduce((curr, data) => ([
  ...curr,
  {
    id: data._id,
    object: data,

    cells: [
      {
        id: nanoid(),
        data: data.name, 
      }, 
      {
        id: nanoid(),
        data: data.carOrigin.name, 
      },
      {
        id: nanoid(),
        data: data.carModels.length, 
      },
      { 
        id: nanoid(), 
        data: moment(data.entryDate).format('Do MMMM YYYY')  
      },
    ]
  }
]), [])