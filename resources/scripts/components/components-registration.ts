import { featuresRegistration } from "./features/features-registration";
import { widgetsRegistration } from "./widgets/widgets-registration";

export function componentsRegistration(app: any) {
  featuresRegistration(app);
  widgetsRegistration(app);
}
