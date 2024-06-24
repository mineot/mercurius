export interface Props {
  id?: string;
  label?: string;
  message?: string;
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
