const { strictEqual } = require("assert");
const reverseCatAgeCalculator = require('../reverseCatAgeCalculator');

describe("Reverse cat age to human calculator unformatted", () => {
  it("should return { years: 1, months: 0 } when you enter 15", () => {
    const catAge = reverseCatAgeCalculator(15);
    strictEqual(catAge.years, 1);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 1, months: 6 } when passed in 21", () => {
    const catAge = reverseCatAgeCalculator(21);
    strictEqual(catAge.years, 1);
    strictEqual(catAge.months, 6);
  });

  it("should return { years: 0, months: 1 } when passed in 1", () => {
    const catAge = reverseCatAgeCalculator(1);
    strictEqual(catAge.years, 0);
    strictEqual(catAge.months, 1);
  });

  it("should return { years: 0, months: 6 } when passed in 10", () => {
    const catAge = reverseCatAgeCalculator(10);
    strictEqual(catAge.years, 0);
    strictEqual(catAge.months, 6);
  });

  it("should return { years: 2, months: 0 } when passed in 24", () => {
    const catAge = reverseCatAgeCalculator(24);
    strictEqual(catAge.years, 2);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 5, months: 0 } when passed in 36", () => {
    const catAge = reverseCatAgeCalculator(36);
    strictEqual(catAge.years, 5);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 0, months: 4 } when passed in 6", () => {
    const catAge = reverseCatAgeCalculator(6);
    strictEqual(catAge.years, 0);
    strictEqual(catAge.months, 4);
  });

  it("should return { years: 0, months: 4 } when passed in 52", () => {
    const catAge = reverseCatAgeCalculator(52);
    strictEqual(catAge.years, 9);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 6, months: 9 } when passed in 43", () => {
    const catAge = reverseCatAgeCalculator(43);
    strictEqual(catAge.years, 6);
    strictEqual(catAge.months, 9);
  });

  it("should return 'this is not a valid input, please use a number' when passed in 'three'", () => {
    const catAge = reverseCatAgeCalculator('three');
    strictEqual(catAge, "this is not a valid input, please use a number");
  });
});


describe("Reverse cat age to human calculator formatted", () => {

});