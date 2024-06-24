export interface ExtraProps {
  message?: string;
}

export interface Props extends ExtraProps {
  id: string;
  label: string;
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
