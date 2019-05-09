import assert from "assert";
import { romanToInt } from "./13.roman-to-integer";

describe("Roman to Integer", () => {
  it("Input: III, Output: 3", () => {
    const expected = 3;
    const input = "III";
    const actual = romanToInt(input);
    assert.equal(actual, expected);
  });
  it("Input: IV, Output: 4", () => {
    const expected = 4;
    const input = "IV";
    const actual = romanToInt(input);
    assert.equal(actual, expected);
  });
  it("Input: IX, Output: 9", () => {
    const expected = 9;
    const input = "IX";
    const actual = romanToInt(input);
    assert.equal(actual, expected);
  });
  it("Input: LVIII, Output: 58", () => {
    const expected = 58;
    const input = "LVIII";
    const actual = romanToInt(input);
    assert.equal(actual, expected);
  });
  it("Input: MCMXCIV, Output: 1994", () => {
    const expected = 1994;
    const input = "MCMXCIV";
    const actual = romanToInt(input);
    assert.equal(actual, expected);
  });
});
