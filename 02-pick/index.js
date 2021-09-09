/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let res = new Object();
  fields.forEach(field => {
    if (obj.hasOwnProperty(field)) {
      res[field] = obj[field];
    }
  });
  return res;
};
