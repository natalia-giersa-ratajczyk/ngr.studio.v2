import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.content}>
        <About />
        <Technology />
      </div>
    </div>
  );
}
