const { strictEqual: eq, deepStrictEqual } = require("assert");
const {
  getHumanAgeInMonths,
  formatMeasurement,
  formatAge,
  findValuesBeforeAndAfter,
  calculateHumanMonths
} = require("../cat-calculator");

describe("Cat calculator", function () {

  describe("calculateAgeLabels", function () {
    it("should return 'months' when passed in 4 and month", () => {
      const label = formatMeasurement(4, "month");
      eq(label, "months");
    });

    it("should return 'month' when passed in 1 and month", () => {
      const label = formatMeasurement(1, "month");
      eq(label, "month");
    });
    it("should return 'years' when passed in 4 and year", () => {
      const label = formatMeasurement(10, "year");
      eq(label, "years");
    });

    it("should return 'year' when passed in 1 and year", () => {
      const label = formatMeasurement(1, "year");
      eq(label, "year");
    });
  });

  describe("formatAge", function () {
    it("should return '1 year and 6 months' when passed in 18", () => {
      const ageInYears = formatAge(18);
      eq(ageInYears, "1 year and 6 months");
    });

    it("should return '1 month' when passed in 1", () => {
      const ageInYears = formatAge(1);
      eq(ageInYears, "1 month");
    });

    it("should return '6 months' when passed in 6", () => {
      const ageInYears = formatAge(6);
      eq(ageInYears, "6 months");
    });

    it("should return '2 years' when passed in 24", () => {
      const ageInYears = formatAge(24);
      eq(ageInYears, "2 years");
    });

    it("should return '3 years and 4 months' when passed in 40", () => {
      const ageInYears = formatAge(40);
      eq(ageInYears, "3 years and 4 months");
    });
  });

  describe("findValuesBeforeAndAfter", function () {
    it("should return correct values when passed in 7", () => {
      const {
        humanBefore, humanAfter, catBefore, catAfter
      } = findValuesBeforeAndAfter(7);
      eq(humanBefore, 3);
      eq(humanAfter, 6);
      eq(catBefore, 4);
      eq(catAfter, 10);
    });

    it("should return correct values when passed in 30", () => {
      const {
        humanBefore, humanAfter, catBefore, catAfter
      } = findValuesBeforeAndAfter(30);
      eq(humanBefore, 36);
      eq(humanAfter, undefined);
      eq(catBefore, 28);
      eq(catAfter, undefined);
    });
  });

});
