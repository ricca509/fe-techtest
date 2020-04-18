import classNames from "./class-names";

describe("classNames", () => {
  describe("given an object containing classnames as keys and boolean as values", () => {
    it("should return a string containing only the classnames whose value is true", () => {
      const expected = "classA classC";
      const result = classNames({
        classA: true,
        classB: false,
        classC: true,
        classD: false,
      });

      expect(result).toEqual(expected);
    });
  });
});
