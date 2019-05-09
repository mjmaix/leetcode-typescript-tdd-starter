import assert from "assert";
import { reverse } from "./7.reverse-integer";

describe("Reverse Integer", () => {
  it("Input: 123, Output: 321", () => {
    const expected = 321;
    const input = 123;
    const rev = reverse(input);
    assert.equal(rev, expected);
  });
  it("Input: -123, Output: -321", () => {
    const expected = -321;
    const input = -123;
    const rev = reverse(input);
    assert.equal(rev, expected);
  });
  it("Input: 120, Output: 21", () => {
    const expected = 21;
    const input = 120;
    const rev = reverse(input);
    assert.equal(rev, expected);
  });
  it("Input: 99999999999, Output: 0", () => {
    const expected = 0;
    const input = 99999999999;
    const rev = reverse(input);
    assert.equal(rev, expected);
  });
});
