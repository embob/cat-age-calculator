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

function getCatAge(humanYears) {
  const match = catMonthsToHumanYears.find(
    (element) => element.humanYears === humanYears
  );
  if (match) return convertToYearsAndMonths(match.catMonths);
  const catMonths = calculateCatMonths(humanYears);
  return convertToYearsAndMonths(catMonths);
}

function convertToYearsAndMonths(months) {
  if (months < 12) return { years: 0, months };
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return { years, months: remainingMonths };
}

function formatYears(value) {
  return value > 1 ? `${value} years` : `${value} year`;
}

function formatMonths(value) {
  return value > 1 ? `${value} months` : `${value} month`;
}

function formatAge(age) {
  if (!age.years) return formatMonths(age.months);
  if (!age.months) return formatYears(age.years);

  return `${formatYears(age.years)} and ${formatMonths(age.months)}`;
}

function findValuesBeforeAndAfter(age) {
  const lastValue = catMonthsToHumanYears[catMonthsToHumanYears.length - 1];
  if (age > lastValue.humanYears) {
    return {
      humanPrevious: lastValue.humanYears,
      catPrevious: lastValue.catMonths,
    };
  }
  const allBeforeValues = catMonthsToHumanYears.filter(
    (element) => element.humanYears < age
  );
  const beforeValue = allBeforeValues[allBeforeValues.length - 1];
  const afterValue = catMonthsToHumanYears[allBeforeValues.length];
  return {
    humanPrevious: beforeValue.humanYears,
    humanNext: afterValue.humanYears,
    catPrevious: beforeValue.catMonths,
    catNext: afterValue.catMonths,
  };
}

function calculateWithoutNextValues(ageMinusHumanPrevious, catPrevious) {
  const humanYearsPerCatYear = 4;
  const twelveMonths = 12;
  const numberOfHumanYears = ageMinusHumanPrevious / humanYearsPerCatYear;
  const catMonthsSincePrevious = numberOfHumanYears * twelveMonths;
  return catPrevious + catMonthsSincePrevious;
}

function calculateCatMonths(age) {
  const { humanPrevious, humanNext, catPrevious, catNext } =
    findValuesBeforeAndAfter(age);

  const ageMinusHumanPrevious = age - humanPrevious;

  const outsideOfKnownData = !humanNext && !catNext;

  if (outsideOfKnownData) {
    return calculateWithoutNextValues(ageMinusHumanPrevious, catPrevious);
  }
  const catMonthsSincePrevious = Math.round(
    ((catNext - catPrevious) / (humanNext - humanPrevious)) *
      ageMinusHumanPrevious
  );
  return catPrevious + catMonthsSincePrevious;
}

module.exports = {
  getCatAge,
  formatYears,
  formatMonths,
  formatAge,
  findValuesBeforeAndAfter,
  calculateCatMonths,
  convertToYearsAndMonths,
};
