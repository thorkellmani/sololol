import { useState } from "react";
import "./App.css";
import { Stars } from "./data";
import { Star } from "./types";
import StarSection from "./components/starSection/starSection";

function App() {
  const [selectedStar, setSelectedStar] = useState<Star | undefined>();

  console.log(Stars);
  console.log(selectedStar);
  return (
    <main>
      <ol className="starList">
        {Stars.map((star) => (
          <li key={star.id} onClick={() => setSelectedStar(star)}>
            {star.nameIs}
          </li>
        ))}
      </ol>
      {selectedStar ? (
        <StarSection name={selectedStar.nameIs} id={selectedStar.id} />
      ) : undefined}
    </main>
  );
}

export default App;
