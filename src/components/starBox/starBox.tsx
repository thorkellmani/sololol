import { getText } from "../../data/texts";
import { Locale, StarType } from "../../types";

interface Props {
  star?: StarType;
  locale: Locale;
  onStarConfirm: () => void;
  starConfirmed?: boolean;
}

export const StarBox = ({
  star,
  locale,
  onStarConfirm,
  starConfirmed,
}: Props) => {
  if (!star) {
    return (
      <section className="chooseShelf">
        <div className="shelfContainer">
          <h3 className="shelfTitle">{getText("noStarSelected", locale)}</h3>
        </div>
      </section>
    );
  }

  return (
    <section className="chooseShelf">
      <div className="shelfContainer">
        <h3 className="shelfTitle">{`${getText("chosenStarIs", locale)}${locale === "is" ? star.nameIs : star.nameEn}`}</h3>
        {starConfirmed ? (
          <p className="thankYouText">
            {getText("thankYou", locale)}
            <br />
            {getText("voteThrottling", locale)}
          </p>
        ) : (
          <button
            type="button"
            className={"submitStarButton"}
            onClick={onStarConfirm}
          >
            {getText("confirmStar", locale)}
          </button>
        )}
      </div>
    </section>
  );
};
