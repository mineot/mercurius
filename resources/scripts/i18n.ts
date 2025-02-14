import { createI18n } from 'vue-i18n';

const detectLocale = (supportedLocales: string[], fallback: string): string => {
  const userLocales = navigator.languages ?? [navigator.language];

  for (const locale of userLocales) {
    const normalizedLocale = locale.toLowerCase();

    if (supportedLocales.includes(normalizedLocale)) {
      return normalizedLocale;
    }

    const shortLocale = normalizedLocale.split('-')[0];

    if (supportedLocales.includes(shortLocale)) {
      return shortLocale;
    }
  }

  return fallback;
};

const supportedLocales = ['en', 'pt'];
const fallbackLocale = 'en';
const userLocale = detectLocale(supportedLocales, fallbackLocale);

export const i18n = createI18n({
  legacy: false,
  locale: userLocale,
  fallbackLocale: fallbackLocale,
  messages: {
    en: {
      all_rights_reserved: 'All rights reserved',
      contact_me: 'Contact Me',
    },
    pt: {
      all_rights_reserved: 'Todos os direitos reservados',
      contact_me: 'Entre em Contato',
    },
  },
});
