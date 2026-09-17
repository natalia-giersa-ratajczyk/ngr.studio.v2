import { Logo } from "../Logo";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <nav className={styles.navWrapper}>
        <Logo />
      </nav>
      <div className={styles.heroTextWrapper}>
        <h1 className={styles.primeryHeroHeading}>Cześć!</h1>
        <h2 className={styles.secondaryHeroHeading}>
          <span>Zapraszam Cię do mojego świata.</span>
          <span>Mam nadzieję, że zostaniesz na dłużej.</span>
        </h2>
      </div>
    </section>
  );
};
