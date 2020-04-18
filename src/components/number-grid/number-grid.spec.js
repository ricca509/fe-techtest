import NumberGrid from "./";
import NumberTile from "../number-tile";

jest.mock("../number-tile");

describe("NumberGrid", () => {
  beforeEach(() => {
    NumberTile.mockImplementation(() => "NumberTile");
  });

  it("should render a list of NumberTiles up to a specific number", () => {});

  it("should pass to NumberTile the selection status true/false", () => {});
});
