import "@/main.scss";
import { initI18Next } from "@/scripts/i18n";
import { setCopyright } from "@/scripts/set-copyright";
import { setDocumentTitle } from "@/scripts/set-document-title";
import { setFooter } from "@/scripts/set-footer";
import { svgLoader } from "@/scripts/svg-loader";
// import { Application, CurrentPage } from "@/scripts/application";

document.body.onload = () => {
  initI18Next().then((i18next) => {
    svgLoader();
    setCopyright(process);
    setDocumentTitle(process);
    setFooter(i18next);

    // Application.initGlobal();
    // Application.instance.load().then((page: CurrentPage) => {
    //   if (page === "home") {
    //     // home();
    //   }
    // });
  });
};
