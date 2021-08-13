const {
  getCatAgeInMonths,
  formatAgeString,
} = require("./cat-calculator");

function reverseCatAgeCalculator(humanAge) {
  const catAge = getCatAgeInMonths(humanAge);
  return formatAgeString(catAge);
}

module.exports = reverseCatAgeCalculator;
