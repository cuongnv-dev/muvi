import {initReactI18next} from 'react-i18next';
import {resources} from '@assets/locales';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {loadString, saveString} from '@utils/storage';
import {storageKey} from '@common';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async

  detect: async callback => {
    const languageCode = await loadString('LANG_CODE');
    callback(languageCode || 'vi');
  },
  cacheUserLanguage: lng => {
    saveString('LANG_CODE', lng);
  },
  init: () => {},
};

/**
 * Config i18n for app
 */
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    compatibilityJSON: 'v3',
    resources,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  })
  .then(() => '');

export default i18n;
