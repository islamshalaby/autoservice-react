import { nanoid } from 'nanoid'
import moment from 'moment';

export const formatScrapTypes = (response) =>  response.reduce((curr, data) => ([
  ...curr,
  {
    object: data,
    id: data._id,
    cells: [{data: data.name, id: nanoid()}, {data: data.status, id: nanoid()}, { id: nanoid(), data: moment(data.entryDate).format('Do MMMM YYYY')  }],
  }
]), [])