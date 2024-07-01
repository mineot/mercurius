import AppButton from "@component/AppButton.vue";
import AppCheckbox from "@component/AppCheckbox.vue";
import AppEmail from "@component/AppEmail.vue";
import AppFlexGrid from "@component/AppFlexGrid.vue";
import AppImage from "@component/AppImage.vue";
import AppLabel from "@component/AppLabel.vue";
import AppNumber from "@component/AppNumber.vue";
import AppPassword from "@component/AppPassword.vue";
import AppPasswordConfirm from "@component/AppPasswordConfirm.vue";
import AppText from "@component/AppText.vue";

export function componentRegistrator(app: any) {
  app.component("app-btn", AppButton);
  app.component("app-checkbox", AppCheckbox);
  app.component("app-email", AppEmail);
  app.component("app-flex-grid", AppFlexGrid);
  app.component("app-img", AppImage);
  app.component("app-label", AppLabel);
  app.component("app-number", AppNumber);
  app.component("app-pswd-confirm", AppPasswordConfirm);
  app.component("app-pswd", AppPassword);
  app.component("app-text", AppText);
}
