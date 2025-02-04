import { getLocale } from "../../data/texts";
import { Locale } from "../../types";

interface Props {
  onLocaleChange: (locale: Locale) => void;
}

export const Header = ({ onLocaleChange }: Props) => {
  const locale = getLocale();

  const onChange = (locale: Locale) => {
    window.sessionStorage.setItem("locale", locale);
    onLocaleChange(locale);
  };

  console.log(locale);

  return (
    <header className="topBar">
      <h1 className="appTitle">SÓLÓLÓL</h1>
      <button
        className="languageButton"
        aria-label={
          locale === "is"
            ? "Toggle language to english"
            : "Breyta tungumáli í íslensku"
        }
        type="button"
        onClick={() => onChange(locale === "is" ? "en" : "is")}
      >
        {locale}
      </button>
    </header>
  );
};
