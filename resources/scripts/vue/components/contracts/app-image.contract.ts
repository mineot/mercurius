import { ClassBuilder } from "@helper/class-builder";

export interface ImageProps {
  image: string | undefined;
  alt: string | undefined;
  size?: number | string;
  thumbnail?: boolean;
  responsive?: boolean;
  center?: boolean;
}

export function getSize(props: ImageProps): string {
  return props.size ? props.size.toString() : "";
}

export function getClasses(props: ImageProps): string {
  const classBuilder: ClassBuilder = new ClassBuilder();
  classBuilder.addIf(props.thumbnail, "img-thumbnail");
  classBuilder.addIf(props.responsive, "img-fluid");
  classBuilder.addIf(props.center, "mx-auto d-block");
  return classBuilder.join();
}
