const { strictEqual: eq, deepStrictEqual } = require("assert");
const {
  getIndexOfHumanValue,
  checkValidDataIndex,
  getCatAge,
  convertMonthsToYears,
  calculateAgeLabel,
  calculateAge,
  findIndexesBeforeAndAfter,
} = require("../cat-calculator");

describe("Cat calculator", function () {
  describe("getIndexOfHumanValue", function () {
    it("should return the index of 3 if passed in 15", () => {
      const valueExists = getIndexOfHumanValue(15);
      eq(valueExists, 3);
    });

    it("should return -1 if passed in 6", () => {
      const valueExists = getIndexOfHumanValue(6);
      eq(valueExists, -1);
    });
  });

  describe("checkValidDataIndex", function () {
    it("should return 2 when passed in 10", () => {
      const catValue = checkValidDataIndex(10);
      eq(catValue, 2);
    });

    it("should return false if passed in 6", () => {
      const catValue = checkValidDataIndex(7);
      eq(catValue, false);
    });
  });

  describe("getCatAge", function () {
    it("should return 6 when passed in 10", () => {
      const catAge = getCatAge(10);
      eq(catAge, 6);
    });

    it("should return 'undefined' when passed in 7", () => {
      const catAge = getCatAge(7);
      eq(catAge, undefined);
    });
  });

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

  describe("convertMonthsToYears", function () {
    it("should return '1 year and 6 months' when passed in 18", () => {
      const ageInYears = convertMonthsToYears(18);
      eq(ageInYears, "1 year and 6 months");
    });

    it("should return '1 month' when passed in 1", () => {
      const ageInYears = convertMonthsToYears(1);
      eq(ageInYears, "1 month");
    });

    it("should return '6 months' when passed in 6", () => {
      const ageInYears = convertMonthsToYears(6);
      eq(ageInYears, "6 months");
    });

    it("should return '2 years' when passed in 24", () => {
      const ageInYears = convertMonthsToYears(24);
      eq(ageInYears, "2 years");
    });

    it("should return '3 years and 4 months' when passed in 40", () => {
      const ageInYears = convertMonthsToYears(40);
      eq(ageInYears, "3 years and 4 months");
    });
  });

  describe("calculateAge", function () {
    it("should return '1 year and 6 months' when passed in 21", () => {
      const age = calculateAge(21);
      eq(age, "1 year and 6 months");
    });

    it("should return '3 months' when passed in 4", () => {
      const age = calculateAge(4);
      eq(age, "3 months");
    });

    it("should return 'this age does not exist in the data' when passed in 7", () => {
      const age = calculateAge(7);
      eq(age, "this age does not exist in the data");
    });
  });

  describe("findIndexesBeforeAndAfter", function () {
    it("should return 1 and 2 when passed in 7", () => {
      const {indexBefore, indexAfter} = findIndexesBeforeAndAfter(7);
      eq(indexBefore, 5);
      eq(indexAfter, 4);
    });

    it("should return 'null' and 0 when passed in 30", () => {
      const {indexBefore, indexAfter} = findIndexesBeforeAndAfter(7);
      eq(indexBefore, 0);
      eq(indexAfter, null);
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
