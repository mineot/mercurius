import { Ref } from "vue";

// INTERFACES

export interface Props {
  id: string;
  label: string;
  type?: "email" | "number" | "password" | "text";
  message?: string;
  messageType?: "info" | "success" | "warning" | "danger" | "normal";
}

// FUNCTIONS

export const formTextClass = (props: Props): string => {
  if (!props.messageType || props.messageType === "normal") {
    return "text-body-tertiary";
  }
  return `text-${props.messageType}-emphasis`;
};

export const inputType = (props: Props): string => {
  return !props.type ? "text" : props.type;
};

export function passwordIcon(show: Ref<boolean>): string {
  const icon: string = show.value ? "eye-slash-fill" : "eye-fill";
  return `bi bi-${icon}`;
}

export function passwordType(show: Ref<boolean>): string {
  return show.value ? "text" : "password";
}
