import { mount } from "@cypress/react";
import HomePage from "../HomePage";

describe("HomePage", () => {
  it("renders", () => {
    mount(<HomePage />);
    cy.findByText("HOME_GREETING").should("be.visible");
  });
});
