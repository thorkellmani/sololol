import styles from "./starsBackground.module.scss";

export const StarsBackgroundLayer = () => {
  const numberOfStars = 700;

  const stars = [...new Array(numberOfStars)].map((_, index) => (
    <div key={`star-${index}`} className={styles.star} />
  ));

  return <div className={styles.stars__background}>{stars}</div>;
};
