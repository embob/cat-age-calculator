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

  it.skip("should return '3 years and 4 months' when passed in 40", () => {
    const catAge = reverseCatAgeCalculator(40);
    eq(catAge, "3 years and 4 months");
  });
});
