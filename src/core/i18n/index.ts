import { createI18n } from 'vue-i18n';
import messages from './i18n.json';

const availableLanguages = {
  ['en-us' as string]: 'en',
  ['pt-br' as string]: 'pt',
  ['en' as string]: 'en',
  ['pt' as string]: 'pt'
};

export function detectLanguage(): string {
  const navLang =
    navigator?.language?.toLowerCase() ?? navigator?.languages?.at(0)?.toLowerCase() ?? 'en';

  return availableLanguages[navLang] ?? 'en';
}

export const i18n = createI18n({
  locale: detectLanguage(),
  fallbackLocale: 'en',
  messages
});
