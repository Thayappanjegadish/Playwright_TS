export class TestData {
  static randomString(length: number = 6): string {
    return Math.random().toString(36).substring(2, 2 + length);
  }

  static randomEmail(): string {
    return `user_${this.randomString()}@test.com`;
  }

  static randomNumber(length: number = 5): string {
    return Math.floor(Math.random() * Math.pow(10, length)).toString();
  }
}