import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { StarGrid } from "./components/starGrid/starGrid";
import { getText } from "./data/texts";
import { Locale, StarType } from "./types";
import { StarBox } from "./components/starBox/starBox";

function App() {
  const [locale, setLocale] = useState<Locale>("is");
  const [selectedStar, setSelectedStar] = useState<StarType>();
  const [starConfirmed, setStarConfirmed] = useState<boolean>(false);

  const submitStar = () => {
    if (selectedStar) {
      console.log("submitting selected star");
      //await apiQuery(selectedStar?.id);
      setStarConfirmed(true);
    }
  };

  useEffect(() => {
    if (starConfirmed) {
      setTimeout(() => {
        setStarConfirmed(false);
      }, 30000);
    }
  }, [starConfirmed]);

  return (
    <>
      <Header onLocaleChange={(locale) => setLocale(locale)} />
      <main>
        <p className="intro">
          {getText("chooseStar", locale)}
          <br />
          <br />
          {getText("starTransition", locale)}
        </p>
        <StarGrid
          locale={locale}
          onStarSelection={(star) => setSelectedStar(star)}
        />
        <StarBox
          star={selectedStar}
          locale={locale}
          onStarConfirm={submitStar}
          starConfirmed={starConfirmed}
        />
      </main>
    </>
  );
}

export default App;
