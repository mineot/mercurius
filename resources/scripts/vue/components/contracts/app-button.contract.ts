import { ClassBuilder } from "@helper/class-builder";

type Type =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

export interface ButtonProps {
  label: string;
  to?: string;
  type?: Type;
}

export function getType(type?: Type): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.add("btn");
  classBuilder.add("btn-sm");
  classBuilder.add(`btn-${type || "secondary"}`);
  return classBuilder.join();
}
