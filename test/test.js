const { strictEqual } = require("assert");
const {
  getCatAgeObject,
  getCatAgeString
} = require("../src/index");

describe("Cat age calculator", () => {
  describe("getCatAgeObject", () => {
    it("should return { years: 0, months: 1 } when passed in 1", () => {
      const catAge = getCatAgeObject(1);
      strictEqual(catAge.years, 0);
      strictEqual(catAge.months, 1);
    });

    it("should return { years: 1, months: 0 } when you enter 15", () => {
      const catAge = getCatAgeObject(15);
      strictEqual(catAge.years, 1);
      strictEqual(catAge.months, 0);
    });

    it("should return { years: 1, months: 6 } when passed in 21", () => {
      const catAge = getCatAgeObject(21);
      strictEqual(catAge.years, 1);
      strictEqual(catAge.months, 6);
    });

    it("should return { years: 6, months: 3 } when passed in 41", () => {
      const catAge = getCatAgeObject(41);
      strictEqual(catAge.years, 6);
      strictEqual(catAge.months, 3);
    });

    it("should return { years: 25, months: 0 } when passed in 116", () => {
      const catAge = getCatAgeObject(116);
      strictEqual(catAge.years, 25);
      strictEqual(catAge.months, 0);
    });

    it("should return 'Error: 0 is not within the valid age range of 1 and 116' when passed in 0", () => {
      const catAge = getCatAgeObject(0);
      strictEqual(
        catAge,
        "Error: 0 is not within the valid age range of 1 and 116"
      );
    });

    it("should return 'Error: 117 is not within the valid age range of 1 and 116' when passed in 0", () => {
      const catAge = getCatAgeObject(117);
      strictEqual(
        catAge,
        "Error: 117 is not within the valid age range of 1 and 116"
      );
    });

    it("should return 'Error: 'three' is not an integer' when passed in 'three'", () => {
      const catAge = getCatAgeObject("three");
      strictEqual(catAge, "Error: 'three' is not an integer");
    });

    it("should return 'Error: '4.2' is not an integer' when passed in 4.2", () => {
      const catAge = getCatAgeObject(4.2);
      strictEqual(catAge, "Error: '4.2' is not an integer");
    });

    it("should return 'Error: '-7' is not an integer' when passed in -7", () => {
      const catAge = getCatAgeObject(-7);
      strictEqual(
        catAge,
        "Error: -7 is not within the valid age range of 1 and 116"
      );
    });
  });

  describe("getCatAgeString", () => {
    it("should return '1 month' when passed in 1", () => {
      const catAge = getCatAgeString(1);
      strictEqual(catAge, "1 month");
    });

    it("should return '1 year' when passed in 15", () => {
      const catAge = getCatAgeString(15);
      strictEqual(catAge, "1 year");
    });

    it("should return '1 year and 6 months' when passed in 21", () => {
      const catAge = getCatAgeString(21);
      strictEqual(catAge, "1 year and 6 months");
    });

    it("should return '6 years and 3 months' when passed in 41", () => {
      const catAge = getCatAgeString(41);
      strictEqual(catAge, "6 years and 3 months");
    });

    it("should return '25 years' when passed in 116", () => {
      const catAge = getCatAgeString(116);
      strictEqual(catAge, "25 years");
    });

    it("should return 'Error: 0 is not within the valid age range of 1 and 116' when passed in 0", () => {
      const catAge = getCatAgeString(0);
      strictEqual(
        catAge,
        "Error: 0 is not within the valid age range of 1 and 116"
      );
    });

    it("should return 'Error: 117 is not within the valid age range of 1 and 116' when passed in 0", () => {
      const catAge = getCatAgeString(117);
      strictEqual(
        catAge,
        "Error: 117 is not within the valid age range of 1 and 116"
      );
    });

    it("should return 'Error: 'three' is not an integer' when passed in 'three'", () => {
      const catAge = getCatAgeString("three");
      strictEqual(catAge, "Error: 'three' is not an integer");
    });

    it("should return 'Error: '4.2' is not an integer' when passed in 4.2", () => {
      const catAge = getCatAgeString(4.2);
      strictEqual(catAge, "Error: '4.2' is not an integer");
    });

    it("should return 'Error: '-7' is not an integer' when passed in -7", () => {
      const catAge = getCatAgeString(-7);
      strictEqual(
        catAge,
        "Error: -7 is not within the valid age range of 1 and 116"
      );
    });
  });
});
