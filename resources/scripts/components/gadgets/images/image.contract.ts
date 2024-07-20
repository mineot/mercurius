import { ClassBuilder } from "@scripts/miscellaneous/helpers/class-builder";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

function getHide(size?: Size): string {
  switch (size) {
    case "xs":
      return "d-none d-sm-block";
    case "sm":
      return "d-none d-md-block";
    case "md":
      return "d-none d-lg-block";
    case "lg":
      return "d-none d-xl-block";
    case "xl":
      return "d-none d-xxl-block";
    case "xxl":
      return "d-none d-xxl-block";
    default:
      return "";
  }
}

export interface ImageProps {
  image: string | undefined;
  alt: string | undefined;
  size?: number | string;
  thumbnail?: boolean;
  responsive?: boolean;
  center?: boolean;
  hideOn?: Size;
}

export function getSize(props: ImageProps): string {
  return props.size ? props.size.toString() : "";
}

export function getClasses(props: ImageProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.addIf(props.thumbnail, "img-thumbnail");
  classBuilder.addIf(props.responsive, "img-fluid");
  classBuilder.addIf(props.center, "mx-auto d-block");
  classBuilder.addIf(props.hideOn, getHide(props.hideOn));
  return classBuilder.join();
}
