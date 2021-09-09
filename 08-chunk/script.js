const chunk = (arr = [], size = 0) => {
  let res = [];
  while(arr.length) res.push(arr.splice(0,size));
  console.log(res);
};

chunk(['a', 'b', 'c', 'd'], 2);
chunk(['a', 'b', 'c', 'd'], 3);
chunk([], 4);
chunk(['a'], 2);
chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);