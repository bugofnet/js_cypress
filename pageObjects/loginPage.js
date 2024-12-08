// pageObjects/loginPage.js
class LoginPage {
  constructor() {
    this.url = "https://www.saucedemo.com/";
    this.usernameInput = '[data-test="username"]'; // Селектор поля ввода логина
    this.passwordInput = '[data-test="password"]'; // Селектор поля ввода пароля
    this.loginButton = '[data-test="login-button"]'; // Селектор кнопки входа
    this.errorMessage = '[data-test="error"]'; // Селектор сообщения об ошибке
  }

  visit() {
    cy.visit(this.url);
  }

  login(username, password) {
    cy.get(this.usernameInput).type(username); // Ввод логина
    cy.get(this.passwordInput).type(password); // Ввод пароля
    cy.get(this.loginButton).click(); // Нажатие на кнопку входа
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export { LoginPage };
