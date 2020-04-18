import getMultiplesOf from "./multiples";

describe("getMultiplesOf", () => {
  it("should return an array of all multiples of a number up to a max number", () => {
    // (Multiples are what we get after multiplying the number by an integer (not a fraction))
    const expected = [2, 4, 6, 8, 10];
    const result = getMultiplesOf(2, 10);

    expect(result).toEqual(expected);
  });
});
