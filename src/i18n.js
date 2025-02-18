import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    uzb: {
      translation: {
        Jahon: "Jahon",
        Iqtisodiyot: "Iqtisodiyot",
        Jamiyat: "Jamiyat",
        Sport: "Sport",
        "Fan-texnika": "Fan-texnika",
      },
    },
    eng: {
      translation: {
        Jahon: "World",
        Iqtisodiyot: "Economy",
        Jamiyat: "	Society",
        Sport: "	Sport",
        "Fan-texnika": "	Science and Technology",
      },
    },
    rus: {
      translation: {
        Jahon: "Мир",
        Iqtisodiyot: "Экономика	",
        Jamiyat: "Общество	",
        Sport: "Спорт	",
        "Fan-texnika": "Наука и техника	",
      },
    },
  };
  i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbacing: "uz",
    interpolation: {
      escapeValue: false,
    },
  });
  