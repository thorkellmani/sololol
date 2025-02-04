import { StarType } from "../../types";

const starClassName: Record<StarType["id"], string> = {
  1: "sun",
  2: "polaris",
  3: "sirius",
  4: "proxima",
  5: "vega",
  6: "hadar",
};

interface Props {
  star: StarType;
}

export const Star = ({ star }: Props) => {
  const className = "star " + starClassName[star.id];
  return (
    <section className="stage">
      <figure className={className}></figure>
    </section>
  );
};
