import { Stars } from "../../data/stars";
import { Locale, StarType } from "../../types";
import { Star } from "../star/star";

interface Props {
  locale: Locale;
  onStarSelection: (star: StarType) => void;
}

export const StarGrid = ({ locale, onStarSelection }: Props) => {
  return (
    <>
      <ol className="starGrid">
        {Stars.map((star) => (
          <button
            type="button"
            className="starGridItem"
            aria-label={
              locale === "is" ? `Velja ${star.nameIs}` : `Choose ${star.nameEn}`
            }
            key={star.id}
            onClick={() => onStarSelection(star)}
          >
            {locale === "is" ? star.nameIs : star.nameEn}
            <Star star={star} />
          </button>
        ))}
      </ol>
    </>
  );
};
