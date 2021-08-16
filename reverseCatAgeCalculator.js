const {
  getHumanAgeInMonths,
  formatAge,
} = require("./cat-calculator");

function reverseCatAgeCalculator(catAge) {
  if (typeof catAge !== 'number') return 'this is not a valid input, please use a number';
  const humanAge = getHumanAgeInMonths(catAge);
  return formatAge(humanAge);
}

module.exports = reverseCatAgeCalculator;
