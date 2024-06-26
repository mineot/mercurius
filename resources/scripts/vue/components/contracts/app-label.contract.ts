import { ClassBuilder } from "@helper/class-builder";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface LabelProps {
  text: string | undefined;
  translate?: boolean;
  fontSize?: Sizes;
}

export function getClasses(props: LabelProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.addIf(props.fontSize, `fs-${props.fontSize}`);
  return classBuilder.join();
}
