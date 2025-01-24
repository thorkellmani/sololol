import { SolarSystemLayer } from "./layers/solar_system/solar__system";
import { StarsBackgroundLayer } from "./layers/starsBackground/starsBackground";
import { SunriseLayer } from "./layers/sunrise/sunrise";

export default function Home() {
  return (
    <>
      <SolarSystemLayer />
      {
        //<StarsBackgroundLayer />
      }
      {
        //<SunriseLayer />
      }
      {/*<div className={styles.stars__container}>
        <div className="star sun sun__animation"></div>
        <div className="star polaris polaris__animation"></div>
        <div className="star procyon procyon__animation"></div>
        <div className="star proxima__centauri proxima__centauri__animation"></div>
        <div className="star vega vega__animation"></div>
        <div className="star hadar hadar__animation"></div>
      </div>
      <main>
        <section className="container">
          <div className="stars__container">
            <div className="star__container">
              <div className="star sun"></div>
            </div>
            <div className="star__container">
              <div className="star polaris"></div>
            </div>
            <div className="star__container">
              <div className="star procyon"></div>
            </div>
            <div className="star__container">
              <div className="star proxima__centauri"></div>
            </div>
            <div className="star__container">
              <div className="star vega"></div>
            </div>
            <div className="star__container">
              <div className="star hadar"></div>
            </div>
          </div>
        </section>
      </main>*/}
    </>
  );
}
