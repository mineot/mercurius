import "@/style.scss";
import { Application } from "@/scripts/application";

document.body.onload = () => {
  document.title = process.env.APP_NAME ?? "Mercurius";
  Application.initGlobal();
  Application.instance.load();
};
