const {
  getHumanAgeInMonths,
  formatAge,
} = require("./cat-calculator");

function reverseCatAgeCalculator(catAge) {
  // add catch for NaN age
  const humanAge = getHumanAgeInMonths(catAge);
  return formatAge(humanAge);
}

module.exports = reverseCatAgeCalculator;
