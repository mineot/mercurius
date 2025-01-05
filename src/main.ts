import "@/main.scss";
import { App } from "@/scripts/application";
import { initI18Next } from "@/scripts/i18n";
import { setDocumentTitle } from "@/scripts/set-document-title";
import { setFooter } from "@/scripts/set-footer";
import { svgLoader } from "@/scripts/svg-loader";
import { header } from "@/scripts/components/header";

document.body.onload = () =>
  initI18Next().then(async (i18next) => {
    await setDocumentTitle(process);
    await setFooter(i18next, process);
    await svgLoader();

    header({
      logoUrl: "https://placehold.co/100",
      title: "Title",
      subtitle: "Subtitle",
      summary:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, vitae maxime itaque nihil eveniet est aperiam dignissimos! Nam sunt, aliquam ut quis voluptas consectetur. Id nihil in molestias magnam obcaecati!",
    });

    // await App.initGlobal();
    // await App.instance.load(i18next);
  });
