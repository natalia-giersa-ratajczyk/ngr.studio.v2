import { StarIcon } from "../StarIcon";
import styles from "./Technology.module.css";

export const Technology = () => {
  return (
    <section className={styles.technologySectionWrapper}>
      <div className={styles.contentWrapper}>
        <span>Głównie korzystam z:</span>
        <h2 className={styles.technologySectionHeader}>Technologie i narzędzia.</h2>
        <div className={styles.technologiesWrapper}>
          <span>React</span>
          <StarIcon />
          <span>TypeScript</span>
          <StarIcon />
          <span>Next.js</span>
          <StarIcon />
          <span>CSS</span>
          <StarIcon />
          <span>Three.js</span>
          <StarIcon />
          <span>R3F</span>
          <StarIcon />
          <span>Blender</span>
          <StarIcon />
          <span>GSAP</span>
          <StarIcon />
          <span>Motion</span>
          <StarIcon />
          <span>Nie używam AI do tworzenia stron</span>
        </div>
      </div>
    </section>
  );
};
