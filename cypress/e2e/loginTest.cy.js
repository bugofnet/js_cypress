import { LoginPage } from "../../pageObjects/loginPage";
import {
  VALID_CREDENTIALS,
  INVALID_CREDENTIALS,
} from "../../constants/credentials";
import { INVENTORY_PAGE } from "../../constants/urls";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  it("should login with valid credentials", () => {
    loginPage.visit();
    loginPage.login(VALID_CREDENTIALS.username, VALID_CREDENTIALS.password);
    cy.url().should("include", INVENTORY_PAGE);
  });

  it("should show error with invalid credentials", () => {
    loginPage.visit();
    loginPage.login(INVALID_CREDENTIALS.username, INVALID_CREDENTIALS.password);
    loginPage.getErrorMessage().should("be.visible");
  });
});
