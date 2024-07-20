import { gadgetsRegistration } from "./gadgets/gadgets-registration";
import { widgetsRegistration } from "./widgets/widgets-registration";

export function componentsRegistration(app: any) {
  gadgetsRegistration(app);
  widgetsRegistration(app);
}
