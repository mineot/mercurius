export class ClassBuilder {
  private classes: string[] = [];

  add(type: string): void {
    this.classes.push(type);
  }

  join(): string {
    return this.classes.join(" ");
  }
}
