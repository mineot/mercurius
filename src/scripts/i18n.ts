import i18next from "i18next";
import { i18n } from "i18next";

export async function initI18Next(): Promise<i18n> {
  i18next.init({
    lng: "pt-BR",
    debug: true,
    resources: {
      en: {
        translation: {
          contact_me: "Contact Me",
        },
      },
      "pt-BR": {
        translation: {
          contact_me: "Entre em Contato",
        },
      },
    },
  });

  async function fetchPage(lng: string, page: string) {
    const response = await fetch(`./documents/${page}.${lng}.json`);
    const data = await response.json();
    i18next.addResourceBundle(lng, page, data, true, true);
  }

  await fetchPage("en", "home");
  await fetchPage("pt-BR", "home");

  return i18next;
}
