import NumberGrid from "./";
import NumberTile from "../number-tile";

jest.mock("../number-tile");

describe("NumberGrid", () => {
  beforeEach(() => {
    NumberTile.mockImplementation(() => "NumberTile");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render a list of NumberTiles (with the right parameters) up to a specific number", () => {
    const result = NumberGrid({ numbersToShow: 4 });

    expect(NumberTile).toHaveBeenCalledTimes(4);
    expect(NumberTile.mock.calls).toEqual([
      [{ ordinal: 1 }],
      [{ ordinal: 2 }],
      [{ ordinal: 3 }],
      [{ ordinal: 4 }],
    ]);
  });

  it("should pass to NumberTile the selection status true/false", () => {
    expect(true).toBe(false);
  });
});
