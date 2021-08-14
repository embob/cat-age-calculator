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

  const catYearsPerHumanYear = 4;
  const twelveMonths = 12;
  const ageMinusCatBefore = age - catBefore;

  if (!humanAfter && !catAfter) {
    const numberOfCatYears = ageMinusCatBefore / catYearsPerHumanYear;
    const humanMonthsSinceBefore = numberOfCatYears * twelveMonths;
    return humanBefore + humanMonthsSinceBefore;
  }

  const humanMonthsSinceBefore = ((humanAfter - humanBefore) / (catAfter - catBefore)) * ageMinusCatBefore;
  return humanBefore + humanMonthsSinceBefore;
}

module.exports = {
  getHumanAgeInMonths,
  calculateAgeLabel,
  formatAgeString,
  findValuesBeforeAndAfter,
};
