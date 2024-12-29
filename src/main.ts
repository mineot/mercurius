import "@/style.scss";
import { Application, CurrentPage } from "@/scripts/application";

import home from "@/scripts/pages/home";

document.body.onload = () => {
  document.title = process.env.APP_NAME ?? "Mercurius";
  Application.initGlobal();
  Application.instance.load().then((page: CurrentPage) => {
    if (page === "home") {
      home();
    }
  });
};
