const { strictEqual } = require("assert");
const catAgeCalculator = require('../catAgeCalculator');

describe("Reverse cat age to human calculator unformatted", () => {
  it("should return { years: 1, months: 0 } when you enter 15", () => {
    const catAge = catAgeCalculator(15);
    strictEqual(catAge.years, 1);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 1, months: 6 } when you pass in 21", () => {
    const catAge = catAgeCalculator(21);
    strictEqual(catAge.years, 1);
    strictEqual(catAge.months, 6);
  });

  it("should return { years: 0, months: 1 } when you pass in 1", () => {
    const catAge = catAgeCalculator(1);
    strictEqual(catAge.years, 0);
    strictEqual(catAge.months, 1);
  });

  it("should return { years: 0, months: 6 } when you pass in 10", () => {
    const catAge = catAgeCalculator(10);
    strictEqual(catAge.years, 0);
    strictEqual(catAge.months, 6);
  });

  it("should return { years: 2, months: 0 } when you pass in 24", () => {
    const catAge = catAgeCalculator(24);
    strictEqual(catAge.years, 2);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 5, months: 0 } when you pass in 36", () => {
    const catAge = catAgeCalculator(36);
    strictEqual(catAge.years, 5);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 0, months: 4 } when you pass in 6", () => {
    const catAge = catAgeCalculator(6);
    strictEqual(catAge.years, 0);
    strictEqual(catAge.months, 4);
  });

  it("should return { years: 0, months: 4 } when you pass in 52", () => {
    const catAge = catAgeCalculator(52);
    strictEqual(catAge.years, 9);
    strictEqual(catAge.months, 0);
  });

  it("should return { years: 6, months: 9 } when you pass in 43", () => {
    const catAge = catAgeCalculator(43);
    strictEqual(catAge.years, 6);
    strictEqual(catAge.months, 9);
  });

  it("should return '6 years and 9 months' when you pass in 43 and formattedTrue", () => {
    const catAge = catAgeCalculator(43, true);
    strictEqual(catAge, '6 years and 9 months');
  });
});