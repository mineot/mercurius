import { createI18n } from "vue-i18n";
import { detectLanguage } from "@helper/detect-language";
import { enLanguage } from "./en";
import { ptLanguage } from "./pt";

const i18nInstance = createI18n({
  locale: detectLanguage(),
  fallbackLocale: "en",
  messages: {
    en: enLanguage as any,
    pt: ptLanguage as any,
  },
});

export { i18nInstance };
