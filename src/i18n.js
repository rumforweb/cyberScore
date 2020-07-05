import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

const options = {
    // order and from where user language should be detected
    order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],

        // keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0,

        // cache user language on
        caches: ['localStorage', 'cookie'],
        excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

        // optional expire and domain for set cookie
        cookieMinutes: 10,
        cookieDomain: 'myDomain',

        // optional htmlTag with lang attribute, the default is:
        htmlTag: document.documentElement,

        // only detect languages that are in the whitelist
        checkWhitelist: true
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        whitelist: ['ru', 'en'],
        detection: options,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;
