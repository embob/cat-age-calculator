const {
  getCatAge,
  formatAge,
} = require("./getCatAge");

function catAgeCalculator(humanAge, formatted = false) {
  try {
    if (formatted) return formatAge(getCatAge(humanAge));
    return getCatAge(humanAge);
  } catch (error) {
    console.error(error);
  }
}

module.exports = catAgeCalculator;