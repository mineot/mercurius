import { ClassBuilder } from "@helper/class-builder";

type Type = "row" | "column";

export interface FlexProps {
  type?: Type;
  inline?: boolean;
  wrap?: boolean;
}

export function getType(props: FlexProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.addConditional(props.inline, "d-inline-flex", "d-flex");
  classBuilder.add(`flex-${props.type || "row"}`);
  classBuilder.addIf(props.wrap, "flex-wrap");
  classBuilder.add(`gap-3`);
  return classBuilder.join();
}
