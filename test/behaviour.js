const { strictEqual: eq, deepStrictEqual } = require("assert");
const reverseCatAgeCalculator = require('../reverseCatAgeCalculator');

describe("Reverse cat age to human calculator", function () {
  it("should return '1 year' when you enter 15", () => {
    const catAge = reverseCatAgeCalculator(15);
    eq(catAge, '1 year');
  });

  it("should return '1 year and 6 months' when passed in 18", () => {
    const catAge = reverseCatAgeCalculator(21);
    eq(catAge, "1 year and 6 months");
  });

  it("should return '1 month' when passed in 1", () => {
    const catAge = reverseCatAgeCalculator(1);
    eq(catAge, "1 month");
  });

  it("should return '6 months' when passed in 6", () => {
    const catAge = reverseCatAgeCalculator(10);
    eq(catAge, "6 months");
  });

  it("should return '2 years' when passed in 24", () => {
    const catAge = reverseCatAgeCalculator(24);
    eq(catAge, "2 years");
  });

  it("should return '5 years' when passed in 36", () => {
    const catAge = reverseCatAgeCalculator(36);
    eq(catAge, "5 years");
  });

  it("should return '4 months' when passed in 6", () => {
    const catAge = reverseCatAgeCalculator(6);
    eq(catAge, "4 months");
  });

  it("should return '9 years' when passed in 52", () => {
    const catAge = reverseCatAgeCalculator(52);
    eq(catAge, "9 years");
  });

  it("should return '6 years and 9 months' when passed in 43", () => {
    const catAge = reverseCatAgeCalculator(43);
    eq(catAge, "6 years and 9 months");
  });

});
