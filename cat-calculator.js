const data = [
  { humanMonths: 1, catYears: 1 }, // kitten
  { humanMonths: 3, catYears: 4 },
  // here
  { humanMonths: 6, catYears: 10 },
  { humanMonths: 7, catYears: 12 }, // junior cat
  { humanMonths: 12, catYears: 15 },

  { humanMonths: 18, catYears: 21 },
  { humanMonths: 24, catYears: 24 },
  { humanMonths: 36, catYears: 28 }, // adult cat
  // 44 catYears // mature cat
  // 60 humanYears // senior cat
  // 76 humanYears // super senior cat
  //
  // cat: 48 (4), human: 32
  // cat: 60 (5), human: 36
];

function getHumanAgeInMonths(catYears) {
  const ageMap = data.find((element) => element.catYears === catYears);
  if (ageMap) return ageMap.humanMonths;
  const humanMonths = calculateHumanMonths(catYears);
  return humanMonths;
}

function calculateAgeLabel(value, type) {
  return value > 1 ? `${type}s` : type;
}

function formatAgeString(months) {
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

function findValuesBeforeAndAfter(age) {
  const lastValue = data[data.length - 1];
  if (age > lastValue.catYears) {
    return {
      humanBefore: lastValue.humanMonths,
      catBefore: lastValue.catYears,
    };
  }
  const allBeforeValues = data.filter((element) => element.catYears < age);
  const beforeValue = allBeforeValues[allBeforeValues.length - 1];
  const afterValue = data[allBeforeValues.length];
  return {
    humanBefore: beforeValue.humanMonths,
    humanAfter: afterValue.humanMonths,
    catBefore: beforeValue.catYears,
    catAfter: afterValue.catYears,
  };
}

function calculateHumanMonths(age) {
  const { humanBefore, humanAfter, catBefore, catAfter } =
    findValuesBeforeAndAfter(age);

  const catYearsInAHumanYear = 4;
  const oneHumanYearInMonths = 12;

  if (!humanAfter && !catAfter) {
    const catYearsSinceBefore = (age - catBefore) / catYearsInAHumanYear;
    const humanYearsSinceBefore = catYearsSinceBefore * oneHumanYearInMonths;
    return humanBefore + humanYearsSinceBefore;
  }

  const humanYearsDifference = humanAfter - humanBefore;
  const catYearsDifference = catAfter - catBefore;
  const catYearsFromAgeToBefore = age - catBefore;
  const humanMonthsFromAgeToBefore = (humanYearsDifference / catYearsDifference) * catYearsFromAgeToBefore;
  return humanBefore + humanMonthsFromAgeToBefore;

  // const catDifference = catAfter - catBefore;
  // const humanDifference = humanAfter - humanBefore;
  // const ratio = humanDifference / catDifference;

  // const a = age - catBefore;
  // const b = ratio * a;
  // return humanBefore + b;

// diff between human years   10 - 4 = 6
// diff between cat years   6 - 3 = 3
//  ratio 3/6
// take human year want to seek and minus lower year value from it so 6 years - 4years = 2
               // take human year want to seek and minus it from higher year value from it so 10 years - 6years = 4
// for lower no calc: multiple 3/6 * 2 and add to lower no. of cat value
// for higher no calc: multiply 3/6 * 4 and minus from higher no of cat value.

  // do calc with all 4 values.
}

module.exports = {
  getHumanAgeInMonths,
  calculateAgeLabel,
  formatAgeString,
  findValuesBeforeAndAfter,
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
// cats go up by 12 so multiply 12 by 1.25 = 15
// add 15 to cats before = 51 months
