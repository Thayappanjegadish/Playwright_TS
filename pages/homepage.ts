import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class LoginPage extends BasePage {
  // Locators
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login');
  }

  // Actions
  async login(user: string, pass: string): Promise<void> {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginBtn);
  }
}