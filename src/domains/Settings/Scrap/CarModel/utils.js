import { nanoid } from 'nanoid';

export const formatCarModels = (response) => response.reduce((curr, data) => ([
  ...curr,
  {
    object: data,
    id: data._id,
    cells: [{data: data.name, id: nanoid()}, {data: data.carBrand.name, id: nanoid()}, {data: data.carBrand.carOrigin, id: nanoid()}]
  }
]), [])