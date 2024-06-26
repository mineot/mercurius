export class ClassBuilder {
  private classes: string[] = [];

  add(type: string): void {
    this.classes.push(type);
  }

  addConditional(conditional: any, whenTrue: string, whenFalse: string): void {
    this.classes.push(conditional ? whenTrue : whenFalse);
  }

  addIf(conditional: any, whenTrue: string): void {
    if (conditional) {
      this.classes.push(whenTrue);
    }
  }

  join(): string {
    return this.classes.join(" ");
  }
}
