export type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface FormTextProps {
  message?: string;
}

export interface InputProps extends FormTextProps {
  id: string;
  label: string;
}

export interface PasswordConfirmProps {
  id: string;
}

export interface ImageProps {
  image: string | undefined;
  alt: string | undefined;
  size?: number | string;
  thumbnail?: boolean;
  responsive?: boolean;
}

export interface LabelProps {
  text: string | undefined;
  translate?: boolean;
  fontSize?: Sizes;
}

export interface FlexProps {
  type?: "row" | "column";
  inline?: boolean;
  wrap?: boolean;
}
