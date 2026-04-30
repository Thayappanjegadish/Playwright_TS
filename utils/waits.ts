import { Page } from '@playwright/test';

export class WaitUtils {

  static async waitForElement(page: Page, locator: string) {
    await page.locator(locator).waitFor({
      state: 'visible'
    });
  }

  static async waitForPageLoad(page: Page) {
    await page.waitForLoadState('networkidle');
  }
}