import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  initReactI18next,
} from 'react-i18next';
import ICU from 'i18next-icu';

import ptLocale from 'i18next-icu/locale-data/pt';

const ptBrLanguage = 'pt-BR';

i18n
  .use(
    new ICU({
      localeData: [
        ptLocale,
      ],
    }),
  )
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ptBrLanguage,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export {
  i18n as default,
  ptBrLanguage,
};
