import assert from "assert";
import { isPalindrome } from "./9.palindrome-number";

describe("Palindrome Number", () => {
  it("Input: 121, Output: true", () => {
    const expected = true;
    const input = 121;
    const actual = isPalindrome(input);
    assert.equal(actual, expected);
  });
  it("Input: -121, Output: false", () => {
    const expected = false;
    const input = -121;
    const actual = isPalindrome(input);
    assert.equal(actual, expected);
  });
  it("Input: 10, Output: false", () => {
    const expected = false;
    const input = 10;
    const actual = isPalindrome(input);
    assert.equal(actual, expected);
  });
});
