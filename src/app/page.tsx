import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.content}>
        <About />
        <Technology />
        <Footer />
      </div>
    </>
  );
}
