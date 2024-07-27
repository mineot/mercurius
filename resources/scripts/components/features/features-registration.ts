import Checkbox from "@scripts/components/features/forms/Checkbox.vue";
import Input from "@scripts/components/features/forms/Input.vue";
import Password from "@scripts/components/features/forms/Password.vue";

import Button from "./buttons/Button.vue";
import FlexGrid from "./gridsystem/FlexGrid.vue";
import Image from "./images/Image.vue";
import Label from "./labels/Label.vue";
import PasswordConfirm from "./auxiliaries/PasswordConfirm.vue";

export function featuresRegistration(app: any) {
  app.component("app-checkbox", Checkbox);
  app.component("app-input", Input);
  app.component("app-password", Password);

  app.component("app-button", Button);
  app.component("app-flex-grid", FlexGrid);
  app.component("app-image", Image);
  app.component("app-label", Label);
  app.component("app-password-confirm", PasswordConfirm);
}
