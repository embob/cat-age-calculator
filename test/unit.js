const { strictEqual: eq, deepStrictEqual } = require("assert");
const {
  formatAgeString,
  calculateAgeLabel,
  findValuesBeforeAndAfter,
} = require("../cat-calculator");

describe("Cat calculator", function () {

  describe("calculateAgeLabels", function () {
    it("should return 'months' when passed in 4 and month", () => {
      const label = calculateAgeLabel(4, "month");
      eq(label, "months");
    });

    it("should return 'month' when passed in 1 and month", () => {
      const label = calculateAgeLabel(1, "month");
      eq(label, "month");
    });
    it("should return 'years' when passed in 4 and year", () => {
      const label = calculateAgeLabel(10, "year");
      eq(label, "years");
    });

    it("should return 'year' when passed in 1 and year", () => {
      const label = calculateAgeLabel(1, "year");
      eq(label, "year");
    });
  });

  describe("formatAgeString", function () {
    it("should return '1 year and 6 months' when passed in 18", () => {
      const ageInYears = formatAgeString(18);
      eq(ageInYears, "1 year and 6 months");
    });

    it("should return '1 month' when passed in 1", () => {
      const ageInYears = formatAgeString(1);
      eq(ageInYears, "1 month");
    });

    it("should return '6 months' when passed in 6", () => {
      const ageInYears = formatAgeString(6);
      eq(ageInYears, "6 months");
    });

    it("should return '2 years' when passed in 24", () => {
      const ageInYears = formatAgeString(24);
      eq(ageInYears, "2 years");
    });

    it("should return '3 years and 4 months' when passed in 40", () => {
      const ageInYears = formatAgeString(40);
      eq(ageInYears, "3 years and 4 months");
    });
  });

  describe("findValuesBeforeAndAfter", function () {
    it("should return correct values when passed in 7", () => {
      const {
        catBefore, catAfter, humanBefore, humanAfter
      } = findValuesBeforeAndAfter(7);
      eq(catBefore, 3);
      eq(catAfter, 6);
      eq(humanBefore, 4);
      eq(humanAfter, 10);
    });

    it("should return correct values when passed in 30", () => {
      const {
        catBefore, catAfter, humanBefore, humanAfter
      } = findValuesBeforeAndAfter(30);
      eq(catBefore, 36);
      eq(catAfter, undefined);
      eq(humanBefore, 28);
      eq(humanAfter, undefined);
    });
  });

});

//   it('passing in 1 year should return 1 month', () => {
//     eq(catAge, '1');
//   });
//   it('passing in 4 years should return 3 months', () => {
//     eq(catAge, '3');
//   });
//   it('passing in 10 years should return 6 months', () => {
//     eq(catAge, '6');
//   });
//   it('passing in 12 years should return 7 months', () => {
//     eq(catAge, '7');
//   });
//   it('passing in 15 years should return 1 year', () => {
//     eq(catAge, '12');
//   });
//   it('passing in 21 years should return 1 year 6 months', () => {
//     eq(catAge, '18');
//   });
//   it('passing in 24 years should return 2 years', () => {
//     eq(catAge, '2');
//   });
//   it('passing in 28 years should return 3 years', () => {
//     eq(catAge, '3');
//   });
