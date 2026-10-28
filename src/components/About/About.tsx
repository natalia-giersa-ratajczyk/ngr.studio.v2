import Image from "next/image";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutSectionWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/my-photo.webp"}
          alt="A photo of the author."
          loading="lazy"
          className={styles.image}
          height={720}
          width={540}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.aboutSectionHeader}>O mnie.</h2>
        <div className={styles.aboutText}>
          <p>
            <span>
              Cześć! Mam na imię Natalia. Z wykształcenia jestem magistrem filologii angielskiej,
              ale zajmuję się tworzeniem stron internetowych i aplikacji webowych jako {""}
              <span className={styles.creativeDevText}>creative front-end deweloperka</span>.
            </span>
          </p>
          <p>
            <span>
              W swojej pracy lubię łączyć funkcjonalność z estetycznym wyglądem i organicznym
              ruchem. Wraz z mężem tworzymy mały software house -{" "}
              <a href="https://vnmd.studio" target="_blank" className={styles.vnmdLink}>
                vnmd
              </a>
              .
            </span>
          </p>
          <p>
            <span>
              W czasie wolnym rozwijam się kreatywnie w innych dziedzinach, takich jak grafika 3D,
              czytanie, muzyka czy szydełkowanie. Uwielbiam odkrywać nowe miejsca i smaki.
            </span>
          </p>
          <p>
            <span>
              Jeśli chciał_byś mieć stronę wizytówkę, taką jak ta, lub podjąć współpracę w innej
              formie, skontaktuj się ze mną.
            </span>
          </p>
        </div>
        <p>
          <a href="mailto:kontakt@ngr.studio" className={styles.email}>
            kontakt@ngr.studio
          </a>
        </p>
      </div>
    </section>
  );
};
