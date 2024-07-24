import { ClassBuilder } from "@scripts/shared/helpers/class-builder";

type Type = "row" | "column";

type Interval = "0" | "1" | "2" | "3" | "4" | "5";

function getInterval(prefix: string, interval: Interval): string {
  return `${prefix}-${interval}`;
}

export interface FlexProps {
  type?: Type;
  inline?: boolean;
  wrap?: boolean;
  gap?: Interval;
  mb?: Interval;
}

export function getType(props: FlexProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.addConditional(props.inline, "d-inline-flex", "d-flex");
  classBuilder.add(`flex-${props.type || "row"}`);
  classBuilder.addIf(props.wrap, "flex-wrap");
  classBuilder.add(getInterval("gap", props.gap || "3"));
  classBuilder.add(getInterval("mb", props.mb || "0"));
  return classBuilder.join();
}
