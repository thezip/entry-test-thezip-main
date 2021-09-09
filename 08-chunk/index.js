// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  let res = [];
  while(arr.length) res.push(arr.splice(0,size));
  return res;
};
