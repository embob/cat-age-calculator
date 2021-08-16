const catMonthsToHumanYears = [
  { catMonths: 1, humanYears: 1 }, // kitten
  { catMonths: 3, humanYears: 4 },
  { catMonths: 6, humanYears: 10 },
  { catMonths: 7, humanYears: 12 }, // junior cat
  { catMonths: 12, humanYears: 15 },
  { catMonths: 18, humanYears: 21 },
  { catMonths: 24, humanYears: 24 },
  { catMonths: 36, humanYears: 28 }, // adult cat
];

function getHumanAgeInMonths(humanYears) {
  const match = catMonthsToHumanYears.find(
    (element) => element.humanYears === humanYears
  );
  if (match) return match.catMonths;
  const catMonths = calculateCatMonths(humanYears);
  return catMonths;
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
  const lastValue = catMonthsToHumanYears[catMonthsToHumanYears.length - 1];
  if (age > lastValue.humanYears) {
    return {
      humanBefore: lastValue.humanYears,
      catBefore: lastValue.catMonths,
    };
  }
  const allBeforeValues = catMonthsToHumanYears.filter(
    (element) => element.humanYears < age
  );
  const beforeValue = allBeforeValues[allBeforeValues.length - 1];
  const afterValue = catMonthsToHumanYears[allBeforeValues.length];
  return {
    humanBefore: beforeValue.humanYears,
    humanAfter: afterValue.humanYears,
    catBefore: beforeValue.catMonths,
    catAfter: afterValue.catMonths,
  };
}

function calculateWithoutNextValues(ageMinusHumanBefore, catBefore) {
  const humanYearsPerCatYear = 4;
  const twelveMonths = 12;
  const numberOfHumanYears = ageMinusHumanBefore / humanYearsPerCatYear;
  const catMonthsSinceBefore = numberOfHumanYears * twelveMonths;
  return catBefore + catMonthsSinceBefore;
}

function calculateCatMonths(age) {
  const { humanBefore, humanAfter, catBefore, catAfter } =
    findValuesBeforeAndAfter(age);

  const ageMinusHumanBefore = age - humanBefore;

  const outsideOfKnownData = !humanAfter && !catAfter;

  if (outsideOfKnownData) {
    return calculateWithoutNextValues(ageMinusHumanBefore, catBefore);
  }
  const catMonthsSinceBefore =
  Math.round
(((catAfter - catBefore) / (humanAfter - humanBefore)) * ageMinusHumanBefore);
  return catBefore + catMonthsSinceBefore;
}

module.exports = {
  getHumanAgeInMonths,
  formatMeasurement,
  formatAge,
  findValuesBeforeAndAfter,
  calculateCatMonths
};
