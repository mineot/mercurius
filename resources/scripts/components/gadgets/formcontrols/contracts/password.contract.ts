import { Ref } from "vue";
import { InputProps } from "./input.contract";

export interface PasswordProps extends InputProps {}

export function getIcon(show: Ref<boolean>): string {
  return `bi bi-${show.value ? "eye-slash-fill" : "eye-fill"}`;
}

export function getType(show: Ref<boolean>): string {
  return show.value ? "text" : "password";
}
