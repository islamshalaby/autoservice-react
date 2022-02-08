import { ARABIC_NUMBERS } from "./constants";

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const descendingComparator = (a, b, orderBy) => {
  if (b.cells[orderBy].data < a.cells[orderBy].data) {
    return -1;
  }
  if (b.cells[orderBy].data > a.cells[orderBy].data) {
    return 1;
  }
  return 0;
}

export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const convertNumberToLetter = (num) => {
  let result = ""
  const str = num.toString();
  for(let c of str){
    result += ARABIC_NUMBERS.charAt(c)
  }
  return result
}

export const itemRender = (current, type, originalElement) => {
  if (type === 'page') {
    return <a>{convertNumberToLetter(current)}</a>;
  }
  return originalElement;
}