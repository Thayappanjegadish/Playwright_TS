import { APIRequestContext } from '@playwright/test';

export class ApiUtils {

  static async getUsers(request: APIRequestContext) {
    const response = await request.get('/users');
    return await response.json();
  }
}