// cat age in human years age / cat age in cat years

// 1 month = 1 year
// 3 months = 4 years
// 6 months = 10 years
// 7 months =  12 years become junior cat
// 12 months = 15 years
// 18months  = 21 years
// 24months = 24 years
// 36 months =  28 years adult cat
// then +4 every year
// 72 months = 40 years mature cat
// 132 months = 60 years senior cat
// then + 4 again
// 15 years  super senior cat

const data = [
  { cat: 1, human: 1 },
  { cat: 3, human: 4 },
  { cat: 6, human: 10 },
  { cat: 12, human: 15 },
  { cat: 18, human: 21 },
  { cat: 24, human: 24 },
  { cat: 36, human: 28 },
];

function getIndexOfHumanValue(age) {
  return data.findIndex((object) => object.human === age);
}

function checkValidDataIndex(age) {
  const index = getIndexOfHumanValue(age);
  if (index > data.length - 1 || index < 0) return false;
  return index;
}

function getCatAge(humanAge) {
  const validIndex = checkValidDataIndex(humanAge);
  if (!validIndex) return;
  return data[validIndex].cat;
}

function calculateAgeLabel(value, type) {
  return value > 1 ? `${type}s` : type;
}

function convertMonthsToYears(months) {
  if (typeof months !== 'number') return 'this age does not exist in the data';
  if (months < 12) return `${months} ${calculateAgeLabel(months, "month")}`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0)
    return `${years} ${calculateAgeLabel(years, "year")}`;

    return `${years} ${calculateAgeLabel(
    years,
    "year"
  )} and ${remainingMonths} ${calculateAgeLabel(remainingMonths, "month")}`;
}

function calculateAge(age) {
  return convertMonthsToYears(getCatAge(age));
}

module.exports = {
  data,
  getIndexOfHumanValue,
  checkValidDataIndex,
  getCatAge,
  calculateAgeLabel,
  convertMonthsToYears,
  calculateAge
};

// Logic notes
// diff between human years   10 - 4 = 6
// diff between cat years   6 - 3 = 3
//  ratio 3/6
// take human year want to seek and minus lower year value from it so 6 years - 4years = 2
// take human year want to seek and minus it from higher year value from it so 10 years - 6years = 4
// for lower no calc: multiple 3/6 * 2 and add to lower no. of cat value
// for higher no calc: multiply 3/6 * 4 and minus from higher no of cat value.

// for upwards 28

// age inputted - 28; 33 - 28 = 5
// we know cats age by 4 years every time so going to divide age difference by 4; 5/4 = 1.25
// now to calculate
