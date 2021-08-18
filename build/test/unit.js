const { strictEqual } = require("assert");
const {
  formatYears,
  formatMonths,
  formatAge,
  calculateCatMonths,
  convertToYearsAndMonths,
  findValuesBeforeAndAfter,
} = require("../getCatAge");

describe("formatMonths", () => {
  it("should return 'months' when passed in 4 and month", () => {
    const months = formatMonths(4);
    strictEqual(months, "4 months");
  });

  it("should return 'month' when passed in 1 and month", () => {
    const months = formatMonths(1);
    strictEqual(months, "1 month");
  });
});

describe("formatYears", () => {
  it("should return '4 years' when passed in 4", () => {
    const years = formatYears(4);
    strictEqual(years, "4 years");
  });

  it("should return '1 year' when passed in 1 and year", () => {
    const years = formatYears(1);
    strictEqual(years, "1 year");
  });
});

describe("convertToYearsAndMonths", () => {
  it("should return { years: 1, months: 6 } when passed in 18", () => {
    const ageInYears = convertToYearsAndMonths(18);
    strictEqual(ageInYears.years, 1);
    strictEqual(ageInYears.months, 6);
  });
});

describe("formatAge", () => {
  it("should return '1 year and 6 months' when passed in { years: 1, months: 6 }", () => {
    const ageInYears = formatAge({ years: 1, months: 6 });
    strictEqual(ageInYears, "1 year and 6 months");
  });

  it("should return '1 month' when passed in { years: 1 }", () => {
    const ageInYears = formatAge({ months: 1 });
    strictEqual(ageInYears, "1 month");
  });

  it("should return '6 months' when passed in { months: 6 }", () => {
    const ageInYears = formatAge({ months: 6 });
    strictEqual(ageInYears, "6 months");
  });

  it("should return '2 years' when passed in { years: 2 }", () => {
    const ageInYears = formatAge({ years: 2 });
    strictEqual(ageInYears, "2 years");
  });

  it("should return '3 years and 4 months' when passed in { years: 3, months: 4 }", () => {
    const ageInYears = formatAge({ years: 3, months: 4 });
    strictEqual(ageInYears, "3 years and 4 months");
  });
});

describe("findValuesBeforeAndAfter", () => {
  it("should return correct values when passed in 7", () => {
    const { humanPrevious, humanNext, catPrevious, catNext } =
      findValuesBeforeAndAfter(7);
    strictEqual(humanPrevious, 4);
    strictEqual(humanNext, 10);
    strictEqual(catPrevious, 3);
    strictEqual(catNext, 6);
  });

  it("should return correct values when passed in 30", () => {
    const { humanPrevious, humanNext, catPrevious, catNext } =
      findValuesBeforeAndAfter(30);
    strictEqual(humanPrevious, 28);
    strictEqual(humanNext, undefined);
    strictEqual(catPrevious, 36);
    strictEqual(catNext, undefined);
  });
});

describe("calculateCatMonths", () => {
  it("should return months as whole numbers", () => {
    const knownValues = [1, 4, 10, 12, 15, 21, 24, 28];
    for (let i = 1; i < 20; i++) {
      if (!knownValues.includes(i)) {
        strictEqual(Number.isInteger(calculateCatMonths(i)), true);
      }
    }
  });
});
