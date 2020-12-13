import I18n from "i18n-js";

import en from "./locales/en";
import tr from "./locales/tr";


I18n.fallbacks = true;
I18n.translations = {
    en,
    tr
};

export default I18n;

export const getCurrentLanguage = () =>{
    return I18n.currentLocale();
};