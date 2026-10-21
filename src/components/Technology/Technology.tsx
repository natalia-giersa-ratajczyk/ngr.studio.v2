"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { StarIcon } from "../StarIcon";
import styles from "./Technology.module.css";

const query = "(max-width: 620px)";

export const Technology = () => {
  const isMobile = useMediaQuery(query);

  return (
    <section className={styles.technologySectionWrapper}>
      <div className={styles.contentWrapper}>
        <span className={styles.contentLeading}>Głównie korzystam z:</span>
        <h2 className={styles.technologySectionHeader}>Technologie i narzędzia.</h2>
        {isMobile ? (
          <div className={styles.technologiesMobileWrapper}>
            <StarIcon />
            <div className={styles.technologiesWrapper}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>CSS</span>
              <span>Three.js</span>
              <span>R3F</span>
              <span>Blender</span>
              <span>GSAP</span>
              <span>Motion</span>
            </div>
            <StarIcon />
            <span>Nie używam AI do tworzenia stron</span>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};
