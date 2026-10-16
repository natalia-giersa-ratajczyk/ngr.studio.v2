import { Logo } from "../Logo";
import { WaveIcon } from "../WaveIcon";

export const Footer = () => {
  return (
    <footer>
      <WaveIcon />
      <Logo colorVariant="light" />
      <div>
        <span>kontakt:</span>
        <span>kontakt@ngr.studio</span>
      </div>
    </footer>
  );
};
