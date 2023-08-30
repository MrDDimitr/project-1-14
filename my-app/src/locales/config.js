import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue"
    }
  },
  ua: {
    translation: {
      welcome: "Вітаємо"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    missingKeyHandler: function(lngs, namespace, key, fallbackValue) {
        console.error(`Missing translation: ${key} for language ${lngs.join(", ")}`);
        // Here you can send the missing key to your backend, 
        // or some logging service to be added to your translations later
      }
  });

export default i18n;
