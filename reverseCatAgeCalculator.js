const {
  getHumanAgeInMonths,
  formatAgeString,
} = require("./cat-calculator");

function reverseCatAgeCalculator(catAge) {
  const humanAge = getHumanAgeInMonths(catAge);
  return formatAgeString(humanAge);
}

module.exports = reverseCatAgeCalculator;
