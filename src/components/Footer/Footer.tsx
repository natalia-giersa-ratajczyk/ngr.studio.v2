import { Logo } from "../Logo";
import styles from "./Footer.module.css";

const date = new Date();
const currentYear = date.getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <Logo colorVariant="light" />
      <div className={styles.footerTextWrapper}>
        <a href="mailto:kontakt@ngr.studio" className={styles.contactWrapper}>
          kontakt@ngr.studio
        </a>
        <p className={styles.allRightsReserved}>
          wszelkie prawa zastrzeżone <span>{currentYear}</span> | ngr.studio
        </p>
      </div>
      <nav className={styles.footerLinksWrapper}>
        <a
          href="https://github.com/natalia-giersa-ratajczyk"
          target="_blank"
          aria-label="Mój profil na GitHub'ie"
          className={styles.footerLink}
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/natalia-giersa-ratajczyk-81719a21b/"
          target="_blank"
          aria-label="Mój profil na LinkedIn'ie"
          className={styles.footerLink}
        >
          linkedin
        </a>
      </nav>
    </footer>
  );
};
