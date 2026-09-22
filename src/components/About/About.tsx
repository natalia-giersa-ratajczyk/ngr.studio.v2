import Image from "next/image";

import styles from "./About.module.css";

export const About = () => {
  return (
    <>
      <section className={styles.aboutSectionWrapper}>
        <div className={styles.imageWrapper}>
          <h2 className={styles.aboutSectionHeader}>O mnie.</h2>
          <Image
            src={"/images/my-photo.JPG"}
            alt="A photo of the author."
            height={504}
            width={378}
          />
        </div>
        <p className={styles.textWrapper}>
          <span>
            Cześć! Mam na imię Natalia. Z wykształcenia jestem magistrem filologii angielskiej, ale
            zajmuję się tworzeniem stron internetowych i aplikacji webowych jako {""}
            <strong>creative front-end deweloperka</strong>.
          </span>
          <span>
            W swojej pracy lubię łączyć funkcjonalność z estetycznym wyglądem i organicznym ruchem.
            Wraz z mężem tworzymy mały software house - VNMD.
          </span>
          <span>
            W czasie wolnym rozwijam się kreatywnie w innych dziedzinach, takich jak grafika 3D,
            czytanie, muzyka czy szydełkowanie. Uwielbiam odkrywać nowe miejsca i smaki.
          </span>
          <span>
            Jeśli chciał_byś mieć stronę wizytówkę, taką jak ta, lub podjąć współpracę w innej
            formie, skontaktuj się ze mną.
          </span>
        </p>
      </section>
      <span>n.giersa@gmail.com</span>
    </>
  );
};
