import Title from "./";

describe("Title", () => {
  it("should render the page title", () => {
    expect(Title()).toMatchSnapshot();
  });
});
