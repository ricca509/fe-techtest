import NumberTile from ".";

describe("NumberTile", () => {
  it("should render a box containing a number", () => {
    const result = NumberTile({ ordinal: 5 });

    expect(result).toMatch("5");
  });

  it("should add the right class and data attribute when selected", () => {
    const result = NumberTile({ ordinal: 5, isSelected: true });

    expect(result).toMatch('data-selected="true"');

    expect(result).toMatchSnapshot();
  });

  it("should render a list item and have the current markup", () => {
    const result = NumberTile({ ordinal: 5 });

    expect(result).toMatchSnapshot();
  });
});
