import app from "./app";
import { renderToDom } from "./utils/dom";
import Title from "./components/title";
import NumberGrid from "./components/number-grid";
import NumberTile from "./components/number-tile";

jest.mock("./utils/dom");
jest.mock("./components/title");
jest.mock("./components/number-grid");

describe("The application component", () => {
  beforeEach(() => {
    Title.mockImplementation(() => "<Title></Title>");
    NumberGrid.mockImplementation(() => "<NumberGrid></NumberGrid>");
    renderToDom.mockImplementation((inputs) => inputs);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a title and a grid of boxes with numbers to a target element", () => {
    app(2);

    expect(renderToDom).toHaveBeenCalledTimes(1);
    expect(renderToDom).toHaveBeenCalledWith(
      ["<Title></Title>", "<NumberGrid></NumberGrid>"],
      null
    );
    expect(NumberGrid).toHaveBeenCalledWith({
      numbersToShow: 2,
      selectedNumbers: [],
      onSelection: expect.any(Function),
    });
  });

  it("when a number is clicked, it should select all its multiples", () => {});

  it("when a previously selected number is clicked again, it should de-select it and all its multiples", () => {});
});
