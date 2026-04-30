import { test, expect } from '@playwright/test';
import { homepage } from '../pages/homepage';
import { BasePage } from '../base/BasePage';
import { Page } from '@playwright/test';

class TeamSearch extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToTeamSearch(url: string): Promise<void> {
    await this.navigateTo(url);
  }
}

test.describe('Home Page Tests', () => {

test('Verify user lands on home page after login', async ({ page }) => {
     
  
 
  });
});

test.describe('Team Search Tests', () => {
  test('Navigate to Team Search page', async ({ page }) => {
    const teamSearch = new TeamSearch(page);
    await teamSearch.navigateToTeamSearch('https://example.com/team-search');
  });
});