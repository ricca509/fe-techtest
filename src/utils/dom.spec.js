import { renderToDom, toDomNodes } from "./dom";

describe("renderToDom", () => {
  it("should render a string to a target element", () => {
    // const htmlString = "<div>Test</div>";
    // const parent = document.createElement("div");
    // expect(renderToDom(htmlString, parent).innerHTML).toEqual(htmlString);
  });

  it("should render a string[] to a target element", () => {
    // const html = ["<div>Test</div>", "<div>Test2</div>"];
    // const parent = document.createElement("div");
    // expect(renderToDom(html, parent).innerHTML).toEqual(
    //   "<div>Test</div><div>Test2</div>"
    // );
  });

  it("should render a Node to a target element", () => {
    const childNode = document.createElement("p");
    childNode.classList.add("class1");
    const parent = document.createElement("div");

    expect(renderToDom(childNode, parent).innerHTML).toEqual(
      '<p class="class1"></p>'
    );
  });

  it("should render a Node[] to a target element", () => {
    const childNode1 = document.createElement("p");
    childNode1.classList.add("class1");
    const childNode2 = document.createElement("p");
    childNode2.classList.add("class2");
    const parent = document.createElement("div");

    expect(renderToDom([childNode1, childNode2], parent).innerHTML).toEqual(
      '<p class="class1"></p><p class="class2"></p>'
    );
  });
});

describe("toDomNodes", () => {
  it("should transform a valid HTML string into a Dom node", () => {
    expect(toDomNodes("<div>text</div>") instanceof HTMLDivElement).toBe(true);
  });
});
