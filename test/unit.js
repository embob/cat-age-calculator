const { strictEqual } = require("assert");
const {
  formatMeasurement,
  formatAge,
  findValuesBeforeAndAfter,
  calculateCatMonths,
} = require("../cat-calculator");

describe("Cat calculator", () => {
  describe("calculateAgeLabels", () => {
    it("should return 'months' when passed in 4 and month", () => {
      const label = formatMeasurement(4, "month");
      strictEqual(label, "months");
    });

    it("should return 'month' when passed in 1 and month", () => {
      const label = formatMeasurement(1, "month");
      strictEqual(label, "month");
    });
    it("should return 'years' when passed in 4 and year", () => {
      const label = formatMeasurement(10, "year");
      strictEqual(label, "years");
    });

    it("should return 'year' when passed in 1 and year", () => {
      const label = formatMeasurement(1, "year");
      strictEqual(label, "year");
    });
  });

  describe("formatAge", () => {
    it("should return '1 year and 6 months' when passed in 18", () => {
      const ageInYears = formatAge(18);
      strictEqual(ageInYears, "1 year and 6 months");
    });

    it("should return '1 month' when passed in 1", () => {
      const ageInYears = formatAge(1);
      strictEqual(ageInYears, "1 month");
    });

    it("should return '6 months' when passed in 6", () => {
      const ageInYears = formatAge(6);
      strictEqual(ageInYears, "6 months");
    });

    it("should return '2 years' when passed in 24", () => {
      const ageInYears = formatAge(24);
      strictEqual(ageInYears, "2 years");
    });

    it("should return '3 years and 4 months' when passed in 40", () => {
      const ageInYears = formatAge(40);
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
});
