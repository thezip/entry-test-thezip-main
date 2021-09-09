/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  let str1 = '';

  for(let i=0; i < str.length; i++) {
    str1 += str[i].toUpperCase();

    for(let k=2; k <= i+1; k++){
      str1+=str[i];
    }

    if (i != str.length - 1) {
      str1+='-';
    }
  }
  return str1;
}
