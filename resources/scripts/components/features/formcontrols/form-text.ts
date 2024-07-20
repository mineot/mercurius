export interface FormTextProps {
  message?: string;
  messageType?: "info" | "success" | "warning" | "danger";
}

export const getFormTextClass = (props: FormTextProps): string => {
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
