export const sameParityFilter = (arr = []) => {
  if (arr[0] % 2 == 0){
    return arr.filter(elem => elem % 2 == 0);
  } else {
    return arr.filter(elem => elem % 2 != 0);
  }
}
