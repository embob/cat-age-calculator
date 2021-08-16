const {
  getCatAge,
  formatAge,
} = require("./cat-calculator");

function reverseCatAgeCalculator(humanAge, formatted) {
  if (typeof humanAge !== 'number') return 'this is not a valid input, please use a number';
  if (formatted) return formatAge(getCatAge(humanAge));
  return getCatAge(humanAge);
}

module.exports = reverseCatAgeCalculator;