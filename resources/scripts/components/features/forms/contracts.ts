import { Rule, Validator } from "@scripts/miscellaneous/validator";
import { Ref } from "vue";

// INTERFACES

export interface InputMessageProps {
  message?: string;
  messageType?: "info" | "success" | "warning" | "danger";
}

export interface InputProps extends InputMessageProps {
  id: string;
  label: string;
  type?: "email" | "number" | "password" | "text";
  validator?: Validator;
  rules?: Rule[];
}

export interface CheckboxProps extends InputProps {}

export interface PasswordProps extends InputProps {}

// FUNCTIONS

export const getInputMessageClass = (props: InputMessageProps): string => {
  switch (props.messageType) {
    case "success":
      return "text-success-emphasis";
    case "warning":
      return "text-warning-emphasis";
    case "danger":
      return "text-danger-emphasis";
    case "info":
      return "text-info-emphasis";
    default:
      return "text-body-tertiary";
  }
};

export const getInputType = (props: InputProps): string => {
  return !props.type ? "text" : props.type;
};

export function getPasswordIcon(show: Ref<boolean>): string {
  return `bi bi-${show.value ? "eye-slash-fill" : "eye-fill"}`;
}

export function getPasswordType(show: Ref<boolean>): string {
  return show.value ? "text" : "password";
}
