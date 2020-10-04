import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './assets/locales/en.json'
import es from './assets/locales/es.json'

// You can test this language detector with Locale Switcher addon (Chrome)
// After changing language you must clear storage to see translations properly.
// DMS
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: es
            },
            en: {
                translation: en
            }
        }
    });

export default i18n;