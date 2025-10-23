export class Validators {
  static email(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static minLength(value: string, min: number): boolean {
    return value.length >= min;
  }

  static required(value: string): boolean {
    return value.trim().length > 0;
  }

  static isNumber(value: string): boolean {
    return !isNaN(Number(value));
  }

  static isPositive(value: number): boolean {
    return value > 0;
  }
}
