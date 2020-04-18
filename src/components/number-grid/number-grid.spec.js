import NumberGrid from "./";
import NumberTile from "../number-tile";

jest.mock("../number-tile");

describe("NumberGrid", () => {
  beforeEach(() => {
    NumberTile.mockImplementation(() => "<NumberTile />");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a list of NumberTiles (with the right parameters) up to a specific number", () => {
    const result = NumberGrid({ numbersToShow: 4 });

    expect(NumberTile).toHaveBeenCalledTimes(4);
    expect(NumberTile.mock.calls).toEqual([
      [{ ordinal: 1, isSelected: false }],
      [{ ordinal: 2, isSelected: false }],
      [{ ordinal: 3, isSelected: false }],
      [{ ordinal: 4, isSelected: false }],
    ]);

    expect(result).toMatchSnapshot();
  });

  it("should pass to NumberTile the selection status true/false", () => {
    const result = NumberGrid({ numbersToShow: 4, selectedNumbers: [2, 4] });

    expect(NumberTile.mock.calls).toEqual([
      [{ ordinal: 1, isSelected: false }],
      [{ ordinal: 2, isSelected: true }],
      [{ ordinal: 3, isSelected: false }],
      [{ ordinal: 4, isSelected: true }],
    ]);
  });
});
