import "@/main.scss";
import { initI18Next } from "@/scripts/i18n";
import { setCopyright } from "@/scripts/copyright";
import { svgLoader } from "@/scripts/svg-loader";

// import { Application, CurrentPage } from "@/scripts/application";

document.body.onload = () => {
  initI18Next().then((i18next) => {
    svgLoader();
    setCopyright(process);
    document.title = process.env.APP_NAME ?? "Mercurius";

    console.log(i18next.t("contact_me"));
    console.log(i18next.t("home:title"));

    // Application.initGlobal();
    // Application.instance.load().then((page: CurrentPage) => {
    //   if (page === "home") {
    //     // home();
    //   }
    // });
  });
};
