import assert from "assert";
import { longestCommonPrefix } from "./14.longest-common-prefix";

describe("Longest Common Prefix", () => {
  it('Input: ["flower", "flow", "flight"], Output: fl', () => {
    const expected = "fl";
    const input = ["flower", "flow", "flight"];
    const actual = longestCommonPrefix(input);
    assert.equal(actual, expected);
  });
  it('Input: ["dog", "racecar", "car"], Output: ""]', () => {
    const expected = "";
    const input = ["dog", "racecar", "car"];
    const actual = longestCommonPrefix(input);
    assert.equal(actual, expected);
  });
  it('Input: [], Output: ""]', () => {
    const expected = "";
    const input: string[] = [];
    const actual = longestCommonPrefix(input);
    assert.equal(actual, expected);
  });
});
