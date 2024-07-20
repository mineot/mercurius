import { FormTextProps } from "./form-text";

export interface InputProps extends FormTextProps {
  id: string;
  label: string;
  type?: "email" | "number" | "password" | "text";
}

export const getType = (props: InputProps): string => {
  return !props.type ? "text" : props.type;
};
