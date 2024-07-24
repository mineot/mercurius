import { ClassBuilder } from "@scripts/shared/helpers/class-builder";

export interface MenuProps {
  icon: string;
  text: string;
}

export function getIcon(props: MenuProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.add(`bi bi-${props.icon}`);
  classBuilder.add("fs-1");
  return classBuilder.join();
}
