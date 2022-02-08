import { nanoid } from 'nanoid'
import moment from 'moment';

export const formatGarages = (response) => response.reduce((curr, data) => ([
  ...curr,
  {
    id: data._id,
    object: data,

    cells: [{data: data.name, id: nanoid()}, {data: `${data.countryCode} ${data.mobile}`, id: nanoid()}, {data: data.appApdated, id: nanoid()}, { id: nanoid(), data: moment(data.entryDate).format('Do MMMM YYYY')  }],
  }
]), [])