import NumberTile from ".";

describe("NumberTile", () => {
  it("should render a box containing a number", () => {
    const result = NumberTile({ ordinal: 5 });

    expect(result).toMatch("5");
  });
});
