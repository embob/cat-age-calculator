// import { humanToCatData, humanToCatDataFormatted } from "./humanToCatData";
const { humanToCatData, humanToCatDataFormatted } = require("./humanToCatData");

const getCatAgeObject = year => {
  if (!Number.isInteger(year)) return `Error: '${year}' is not an integer`;
  if (year < 1 || year > 116)
    return `Error: ${year} is not within the valid age range of 1 and 116`;
  return humanToCatData[year];
};

const getCatAgeString = year => {
  if (!Number.isInteger(year)) return `Error: '${year}' is not an integer`;
  if (year < 1 || year > 116)
    return `Error: ${year} is not within the valid age range of 1 and 116`;
  return humanToCatDataFormatted[year];
};

module.exports = { getCatAgeObject, getCatAgeString };
// export default { getCatAgeObject, getCatAgeString };