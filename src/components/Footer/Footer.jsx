import styles from "./Footer.module.scss";
import { TelegramLogo, LinkedinLogo, GithubLogo, ArrowUp } from "phosphor-react";

import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href='#hero'>
        <ArrowUp className={styles.social} />
      </a>

      <div className={styles.icons}>
        <Social href='https://github.com/AleksandrMyagkiy'>
          <GithubLogo weight='regular' className={styles.social} />
        </Social>

        <Social href='https://www.linkedin.com/in/aleksandr-myagkiy-88b905b2/'>
          <LinkedinLogo weight='regular' className={styles.social} />
        </Social>

        <Social href='https://t.me/AleksandrMiagkiy'>
          <TelegramLogo weight='regular' className={styles.social} />
        </Social>
      </div>
    </footer>
  );
};
export default Footer;
