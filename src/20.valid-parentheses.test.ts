import assert from "assert";
import { isValid } from "./20.valid-parentheses";

describe("Valid Parentheses", () => {
  it("Input: (), Output: true", () => {
    const expected = true;
    const input = "()";
    const actual = isValid(input);
    assert.equal(actual, expected);
  });
  it("Input: ()[]{}, Output: true", () => {
    const expected = true;
    const input = "()[]{}";
    const actual = isValid(input);
    assert.equal(actual, expected);
  });
  it("Input: (], Output: false", () => {
    const expected = false;
    const input = "(]";
    const actual = isValid(input);
    assert.equal(actual, expected);
  });
  it("Input: ([)], Output: false", () => {
    const expected = false;
    const input = "([)]";
    const actual = isValid(input);
    assert.equal(actual, expected);
  });
  it("Input: {[]}, Output: true", () => {
    const expected = true;
    const input = "{[]}";
    const actual = isValid(input);
    assert.equal(actual, expected);
  });
});
