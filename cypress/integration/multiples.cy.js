describe("The mutiples application", () => {
  describe("when a number is selected", () => {
    it("should select all its multiples", () => {
      cy.visit("http://localhost:8080");
      cy.contains("10").click();

      [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140].forEach(
        (number) => {
          cy.contains(number).should("have.class", "selected");
        }
      );

      cy.get("[data-selected=true]").should("have.length", 14);
    });
  });

  describe("when a previously selected number is clicked again", () => {
    it("should de-select all the numbers", () => {
      cy.visit("http://localhost:8080");
      cy.contains("10").click();
      cy.contains("10").click();

      cy.get("[data-selected=true]").should("have.length", 0);
    });
  });
});
