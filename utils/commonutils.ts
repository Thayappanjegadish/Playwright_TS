import { Page } from '@playwright/test';

export class CommonUtils {

  static async clickElement(page: Page, locator: string) {
    await page.locator(locator).click();
  }

  static async enterText(page: Page, locator: string, value: string) {
    await page.locator(locator).fill(value);
  }

  static async getText(page: Page, locator: string): Promise<string> {
    return await page.locator(locator).textContent() || '';
  }
  
}