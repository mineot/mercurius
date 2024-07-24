export interface Rule {
  status: boolean;
  message: string;
  valid: () => boolean;
}

export class Validator {
  validate(): void {}

  valid(): boolean {
    return true;
  }
}
