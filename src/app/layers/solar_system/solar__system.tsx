import styles from "./solar__system.module.scss";

export const SolarSystemLayer = () => {
  return (
    <div className={styles.solar_system}>
      <div className={styles.sun} />

      <div className={styles.mercury_orbit}>
        <div className={styles.mercury} />
      </div>

      <div className={styles.venus_orbit}>
        <div className={styles.venus} />
      </div>

      <div className={styles.earth_orbit}>
        <div className={styles.earth} />
      </div>

      <div className={styles.mars_orbit}>
        <div className={styles.mars} />
      </div>
    </div>
  );
};
