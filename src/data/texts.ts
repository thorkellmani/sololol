import { Locale } from "../types";

export const getLocale = (): Locale => {
  const locale = window.sessionStorage.getItem("locale");

  if (!locale) {
    return "is";
  }

  if (`${locale}` === "en") {
    return "en";
  }

  return "is";
};

export const getText = (id: string, locale: Locale) => {
  return locale === "is" ? IS[id] : EN[id];
};

const IS: Record<string, string> = {
  chooseStar:
    "Veldu þá stjörnu sem þú vilt að lýsi upp skammdegið með SÓLÓLÓL skúlptúrnum.",
  starTransition:
    "Ef margir velja í einu mun vinsælasta stjarnan lýsa upp skammdegið.",
  noStarSelected: "Engin stjarna valin",
  confirmStar: "Staðfesta val á stjörnu",
  chosenStarIs: "Valin stjarna er: ",
  thankYou: "Takk fyrir að velja stjörnu!",
  voteThrottling: "Einungis má velja stjörnu á 30 sek fresti.",
};

const EN: Record<string, string> = {
  chooseStar:
    "Select a star to brighten up the winter darkness with the SÓLÓLÓL sculpture",
  starTransition:
    "If a number of people choose at once, the most popular star will shine.",
  noStarSelected: "No star selected",
  confirmStar: "Confirm the chosen star",
  chosenStarIs: "The chosen star: ",
  thankYou: "Thank you for choosing a star!",
  voteThrottling: "You can choose a star once every 30 seconds.",
};
