import { createI18n } from "vue-i18n";
import { detectLanguage } from "./detect-language";
import { enLanguage } from "./en";
import { ptLanguage } from "./pt";

export const i18n = createI18n({
  locale: detectLanguage(),
  fallbackLocale: "en",
  messages: {
    en: enLanguage as any,
    pt: ptLanguage as any,
  },
});
