"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import { Logo } from "../Logo";
import styles from "./Hero.module.css";

const text = "Cześć!";
const segmenter = new Intl.Segmenter();
const splitLetters = [...segmenter.segment(text)];

export const Hero = () => {
  const [sparklesHaveLoaded, setSparklesHaveLoaded] = useState(false);

  const onSparklesLoaded = () => setSparklesHaveLoaded(true);

  return (
    <section className={styles.heroWrapper}>
      <nav className={styles.navWrapper}>
        <Logo />
      </nav>
      <div className={styles.heroTextWrapper}>
        <h1 className={styles.primaryHeroHeading}>
          {splitLetters.map((letter) => (
            <span key={letter.index} className={styles.letter}>
              {letter.segment}
            </span>
          ))}
        </h1>
        <h2 className={styles.secondaryHeroHeading}>
          <span>Zapraszam Cię do mojego świata.</span>
          <span>Mam nadzieję, że zostaniesz na dłużej.</span>
        </h2>
      </div>
      <div className={styles.canvasWrapper}>
        <Canvas
          dpr={1}
          gl={{
            antialias: false,
            powerPreference: "low-power",
          }}
          onCreated={onSparklesLoaded}
          className={`${sparklesHaveLoaded ? styles.fadeInAnimation : ""}`}
        >
          <Sparkles
            count={500}
            speed={0.15}
            size={1.75}
            scale={12}
            noise={3}
            raycast={() => null}
          />
        </Canvas>
      </div>
    </section>
  );
};
