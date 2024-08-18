import myPhoto from "../../../../assets/images/myPhoto.png";
import { SocialMedia } from "../../../../components";
import styles from "./About.module.scss";

export const About: React.FC = () => (
  <div className={styles.about}>
    <div className={styles.about__content}>
      <h1 className={styles.about__heading}>Hello, I'm Edita!</h1>
      <p className={styles.about__text}>Front-end developer</p>
    </div>
    <p className={styles.about__intro}>
      I'm passionate about crafting beautiful and functional web experiences, I
      love bringing ideas to life and solving complex problems.
    </p>
    <img
      src={myPhoto}
      alt="Edita Motuzė"
      loading="lazy"
      className={styles.about__image}
    />
    <div className={styles.about__socialMedia}>
      <p>Let's connect:</p>
      <SocialMedia />
    </div>
  </div>
);
