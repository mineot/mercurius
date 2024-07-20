import Button from "./buttons/Button.vue";
import Checkbox from "./formcontrols/Checkbox.vue";
import Email from "./formcontrols/Email.vue";
import FlexGrid from "./gridsystem/FlexGrid.vue";
import Image from "./images/Image.vue";
import Label from "./labels/Label.vue";
import Number from "./formcontrols/Number.vue";
import Password from "./formcontrols/Password.vue";
import PasswordConfirm from "./auxiliaries/PasswordConfirm.vue";
import Text from "./formcontrols/Text.vue";

export function gadgetsRegistration(app: any) {
  app.component("gad-button", Button);
  app.component("gad-checkbox", Checkbox);
  app.component("gad-email", Email);
  app.component("gad-flex-grid", FlexGrid);
  app.component("gad-image", Image);
  app.component("gad-label", Label);
  app.component("gad-number", Number);
  app.component("gad-password-confirm", PasswordConfirm);
  app.component("gad-password", Password);
  app.component("gad-text", Text);
}
