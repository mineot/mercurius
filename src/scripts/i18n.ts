import i18next from "i18next";
import { i18n } from "i18next";

export async function initI18Next(): Promise<i18n> {
  i18next.init({
    // FIXME: auto detect language
    lng: "pt-BR",
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          all_rights_reserved: "All rights reserved",
          articles: "Articles",
          blog: "Blog",
          contact: "Contact",
          home: "Home",
          portfolio: "Portfolio",
          products: "Products",
          resume: "Resume",
          services: "Services",
          underconstruction: "Under construction",
        },
      },
      "pt-BR": {
        translation: {
          all_rights_reserved: "Todos os direitos reservados",
          articles: "Artigos",
          blog: "Blog",
          contact: "Contato",
          home: "Home",
          portfolio: "Portifólio",
          products: "Produtos",
          resume: "Curriculo",
          services: "Serviços",
          underconstruction: "Em construção",
        },
      },
    },
  });

  return i18next;
}
