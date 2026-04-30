import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class homepage extends BasePage {
  // Locators
  readonly teams: Locator;
  readonly team: Locator;
  readonly schedule: Locator;

  constructor(page: Page) {
    super(page);
    this.teams = page.locator("//a[text()='Teams']");
    this.team = page.locator("//span[text()='England']");
    this.schedule = page.locator("//a[@title='Schedule' and text()='Schedule']");
  }

  // Actions
  async schedulePageNavigation(user: string, pass: string): Promise<void> {
    await this.navigateTo("https://www.cricbuzz.com/");
    await this.click(this.teams);
    await this.click(this.team);
    await this.click(this.schedule);
  }
}