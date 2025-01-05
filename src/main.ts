import "@/main.scss";
import { App } from "@/scripts/application";
import { initI18Next } from "@/scripts/i18n";
import { setDocumentTitle } from "@/scripts/set-document-title";
import { setFooter } from "@/scripts/set-footer";
import { svgLoader } from "@/scripts/svg-loader";

document.body.onload = () =>
  initI18Next().then(async (i18next) => {
    await setDocumentTitle(process);
    await setFooter(i18next, process);
    await svgLoader();
    await App.initGlobal();
    await App.instance.load(i18next);
  });
