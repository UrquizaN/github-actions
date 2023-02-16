import Counter from "./Counter";

describe("<Counter />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />);

    cy.get("button").contains("+").click();
    cy.get("span").should("contain", "1");
    cy.get("button").contains("-").click();
    cy.get("span").should("contain", "0");
  });
});
