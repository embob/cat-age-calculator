const data = [
  { catMonths: 1, humanYears: 1 }, // kitten
  { catMonths: 3, humanYears: 4 },
  // here
  { catMonths: 6, humanYears: 10 },
  { catMonths: 7, humanYears: 12 }, // junior cat
  { catMonths: 12, humanYears: 15 },
  { catMonths: 18, humanYears: 21 },
  { catMonths: 24, humanYears: 24 },
  { catMonths: 36, humanYears: 28 }, // adult cat
  // 44 humanYears // mature cat
  // 60 humanYears // senior cat
  // 76 humanYears // super senior cat
  //
  // cat: 48 (4), human: 32
  // cat: 60 (5), human: 36
];


function getCatAgeInMonths(humanAge) {
  const ageMap = data.find(element => element.humanYears === humanAge);
  if (ageMap) return ageMap.catMonths;
  return;
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
  if (age > lastValue.humanYears) {
    return {
      catBefore: lastValue.catMonths,
      humanBefore: lastValue.humanYears
    }
  }
  const allBeforeValues = data.filter(element => element.humanYears < age);
  const beforeValue = allBeforeValues[allBeforeValues.length - 1];
  const afterValue = data[allBeforeValues.length];
  return {
    catBefore: beforeValue.catMonths, catAfter: afterValue.catMonths,
    humanBefore: beforeValue.humanYears, humanAfter: afterValue.humanYears
  }
}

module.exports = {
  getCatAgeInMonths,
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
