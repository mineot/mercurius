import "@/main.scss";
import { App } from "@/scripts/application";
import { initI18Next } from "@/scripts/i18n";
import { setCopyright } from "@/scripts/set-copyright";
import { setDocumentTitle } from "@/scripts/set-document-title";
import { setFooter } from "@/scripts/set-footer";
import { svgLoader } from "@/scripts/svg-loader";

document.body.onload = () =>
  initI18Next().then(async (i18next) => {
    svgLoader();
    setCopyright(process);
    setDocumentTitle(process);
    setFooter(i18next);

    await App.initGlobal();
    await App.instance.load(i18next);
  });
