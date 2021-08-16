const { strictEqual } = require("assert");
const reverseCatAgeCalculator = require('../reverseCatAgeCalculator');

describe("Reverse cat age to human calculator", function () {
  it("should return '1 year' when you enter 15", () => {
    const catAge = reverseCatAgeCalculator(15);
    strictEqual(catAge, '1 year');
  });

  it("should return '1 year and 6 months' when passed in 18", () => {
    const catAge = reverseCatAgeCalculator(21);
    strictEqual(catAge, "1 year and 6 months");
  });

  it("should return '1 month' when passed in 1", () => {
    const catAge = reverseCatAgeCalculator(1);
    strictEqual(catAge, "1 month");
  });

  it("should return '6 months' when passed in 6", () => {
    const catAge = reverseCatAgeCalculator(10);
    strictEqual(catAge, "6 months");
  });

  it("should return '2 years' when passed in 24", () => {
    const catAge = reverseCatAgeCalculator(24);
    strictEqual(catAge, "2 years");
  });

  it("should return '5 years' when passed in 36", () => {
    const catAge = reverseCatAgeCalculator(36);
    strictEqual(catAge, "5 years");
  });

  it("should return '4 months' when passed in 6", () => {
    const catAge = reverseCatAgeCalculator(6);
    strictEqual(catAge, "4 months");
  });

  it("should return '9 years' when passed in 52", () => {
    const catAge = reverseCatAgeCalculator(52);
    strictEqual(catAge, "9 years");
  });

  it("should return '6 years and 9 months' when passed in 43", () => {
    const catAge = reverseCatAgeCalculator(43);
    strictEqual(catAge, "6 years and 9 months");
  });

  it("should return 'this is not a valid input, please use a number' when passed in 'three'", () => {
    const catAge = reverseCatAgeCalculator('three');
    strictEqual(catAge, "this is not a valid input, please use a number");
  });
});
