import Button from "./buttons/Button.vue";
import Checkbox from "./formcontrols/Checkbox.vue";
import FlexGrid from "./gridsystem/FlexGrid.vue";
import FormText from "./formcontrols/FormText.vue";
import Image from "./images/Image.vue";
import Input from "./formcontrols/Input.vue";
import Label from "./labels/Label.vue";
import Password from "./formcontrols/Password.vue";
import PasswordConfirm from "./auxiliaries/PasswordConfirm.vue";

export function featuresRegistration(app: any) {
  app.component("app-button", Button);
  app.component("app-checkbox", Checkbox);
  app.component("app-flex-grid", FlexGrid);
  app.component("app-form-text", FormText);
  app.component("app-image", Image);
  app.component("app-input", Input);
  app.component("app-label", Label);
  app.component("app-password-confirm", PasswordConfirm);
  app.component("app-password", Password);
}
