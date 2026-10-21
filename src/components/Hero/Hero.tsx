"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
      <div className={styles.canvasContainer}>
        <Canvas dpr={[1, 2]}>
          <Sparkles count={500} speed={0.1} size={1.5} scale={12} noise={1} raycast={() => null} />
        </Canvas>
      </div>
    </section>
  );
};
