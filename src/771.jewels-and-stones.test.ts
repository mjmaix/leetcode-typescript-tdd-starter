import assert from "assert";
import { numJewelsInStones } from "./771.jewels-and-stones";

describe("Longest Common Prefix", () => {
  it('Input: J = "aA", S = "aAAbbbb", Output: 3', () => {
    const expected = 3;
    const input = { J: "aA", S: "aAAbbbb" };
    const actual = numJewelsInStones(input.J, input.S);
    assert.equal(actual, expected);
  });
  it('Input: J = "z", S = "ZZ", Output: 0]', () => {
    const expected = 0;
    const input = { J: "z", S: "ZZ" };
    const actual = numJewelsInStones(input.J, input.S);
    assert.equal(actual, expected);
  });
});
