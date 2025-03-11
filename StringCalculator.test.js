const StringCalculator = require("./StringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself if only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  test("should handle new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calculator.add("//;\n1;-2;-3")).toThrow("negative numbers not allowed -2,-3");
  });
});