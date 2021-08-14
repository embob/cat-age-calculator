const monthToCatYears = [
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
  const match = monthToCatYears.find(
    (element) => element.catYears === catYears
  );
  if (match) return match.humanMonths;
  const humanMonths = calculateHumanMonths(catYears);
  return humanMonths;
}

function formatMeasurement(value, type) {
  return value > 1 ? `${type}s` : type;
}

function formatAge(months) {
  if (months < 12) return `${months} ${formatMeasurement(months, "month")}`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0)
    return `${years} ${formatMeasurement(years, "year")}`;

  return `${years} ${formatMeasurement(
    years,
    "year"
  )} and ${remainingMonths} ${formatMeasurement(remainingMonths, "month")}`;
}

function findValuesBeforeAndAfter(age) {
  const lastValue = monthToCatYears[monthToCatYears.length - 1];
  if (age > lastValue.catYears) {
    return {
      humanBefore: lastValue.humanMonths,
      catBefore: lastValue.catYears,
    };
  }
  const allBeforeValues = monthToCatYears.filter(
    (element) => element.catYears < age
  );
  const beforeValue = allBeforeValues[allBeforeValues.length - 1];
  const afterValue = monthToCatYears[allBeforeValues.length];
  return {
    humanBefore: beforeValue.humanMonths,
    humanAfter: afterValue.humanMonths,
    catBefore: beforeValue.catYears,
    catAfter: afterValue.catYears,
  };
}

function calculateWithoutNextValues(ageMinusCatBefore, humanBefore) {
  const catYearsPerHumanYear = 4;
  const twelveMonths = 12;
  const numberOfCatYears = ageMinusCatBefore / catYearsPerHumanYear;
  const humanMonthsSinceBefore = numberOfCatYears * twelveMonths;
  return humanBefore + humanMonthsSinceBefore;
}

function calculateHumanMonths(age) {
  const { humanBefore, humanAfter, catBefore, catAfter } =
    findValuesBeforeAndAfter(age);

  const ageMinusCatBefore = age - catBefore;

  const outsideOfKnownData = !humanAfter && !catAfter;

  if (outsideOfKnownData) {
    return calculateWithoutNextValues(ageMinusCatBefore, humanBefore);
  }
  const humanMonthsSinceBefore =
    ((humanAfter - humanBefore) / (catAfter - catBefore)) * ageMinusCatBefore;
  return humanBefore + humanMonthsSinceBefore;
}

module.exports = {
  getHumanAgeInMonths,
  formatMeasurement,
  formatAge,
  findValuesBeforeAndAfter,
  calculateHumanMonths
};
