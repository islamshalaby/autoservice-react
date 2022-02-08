
export const exportToCsv = (values, data, titles) => {
  const cols = titles;
  const chosenCols = values.reduce((curr, [key,value]) => {
    if(value === true){
      return [...curr, key];
    } else {
      return curr
    }
  }, []);
  let chosenIndexes = [];
  for(let i = 0; i < chosenCols.length; i++){
    for(let j = 0; j < cols.length; j++){
      if(chosenCols[i] === cols[j]){
        chosenIndexes.push(j);
      }
    }
  }
  return data.reduce((curr, data) => ([
    ...curr, 
    data.filter((row, index) => chosenIndexes.includes(index))
  ])
  , [titles.filter((row, index) => chosenIndexes.includes(index))])
}

export const formatCsvData = response => response.reduce((curr, row) => ([
  ...curr,
  row.cells.map(cell => cell.data),
]), [])