import styles from "./Success.module.scss";
import { success as successImg } from "@assets/images";

export const Success: React.FC = () => (
  <div className={styles.success}>
    <img
      src={successImg}
      alt="Message was sent successfully"
      className={styles.success__image}
    />
    <p className={styles.success__text}>Your message was sent successfully!</p>
  </div>
);
