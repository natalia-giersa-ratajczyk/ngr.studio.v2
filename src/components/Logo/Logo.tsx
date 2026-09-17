import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.types";

export const Logo = ({ colorVariant = "dark" }: LogoProps) => {
  const lightColorVariant = colorVariant === "light" ? styles["lightVariant"] : "";

  return <span className={`${styles.logo} ${lightColorVariant}`}>ngr.</span>;
};
