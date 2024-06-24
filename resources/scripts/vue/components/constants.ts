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

export interface FlexProps {
  type: "row" | "column";
}

export interface ButtonProps {
  label: string;
  to?: string;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
}
