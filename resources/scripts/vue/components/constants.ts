export interface Props {
  id: string;
  label: string;
}

export interface ButtonProps extends Props {
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
