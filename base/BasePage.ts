import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // -------------------------------
  // Navigation
  // -------------------------------
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // -------------------------------
  // Element Actions
  // -------------------------------
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async clickWithWait(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async fillWithClear(locator: Locator, value: string): Promise<void> {
    await locator.clear();
    await locator.fill(value);
  }

  async type(locator: Locator, value: string): Promise<void> {
    await locator.type(value);
  }

  // -------------------------------
  // Element State / Info
  // -------------------------------
  async getText(locator: Locator): Promise<string> {
    const text = await locator.textContent();
    return text ? text.trim() : '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  // -------------------------------
  // Waits
  // -------------------------------
  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  async waitForHidden(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'hidden' });
  }

  // -------------------------------
  // Assertions (optional wrappers)
  // -------------------------------
  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, expectedText: string): Promise<void> {
    await expect(locator).toHaveText(expectedText);
  }

  // -------------------------------
  // Utility Helpers
  // -------------------------------
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }
}