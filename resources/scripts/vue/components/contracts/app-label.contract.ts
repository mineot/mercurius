import { ClassBuilder } from "@helper/class-builder";

type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type FontWeight =
  | "bold"
  | "bolder"
  | "italic"
  | "light"
  | "lighter"
  | "medium"
  | "normal"
  | "semibold";

function getFontSize(type?: FontSize): string {
  switch (type) {
    case "xs":
      return "fs-6";
    case "sm":
      return "fs-5";
    case "md":
      return "fs-4";
    case "lg":
      return "fs-3";
    case "xl":
      return "fs-2";
    case "xxl":
      return "fs-1";
    default:
      return "fs-6";
  }
}

function getFontWeight(type?: FontWeight): string {
  if (type === "italic") {
    return "fst-italic";
  }
  return `fw-${type}`;
}

export interface LabelProps {
  text: string | undefined;
  translate?: boolean;
  center?: boolean;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

export function getClasses(props: LabelProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.addIf(props.fontSize, getFontSize(props.fontSize));
  classBuilder.addIf(props.fontWeight, getFontWeight(props.fontWeight));
  classBuilder.addIf(props.center, "text-center");
  return classBuilder.join();
}

export function getCentered(props: LabelProps) {
  return props.center ? "text-center" : "";
}
