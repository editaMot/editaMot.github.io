import { FaLinkedin } from "react-icons/fa6";
import styles from "./Contact.module.scss";
import { Form } from "./Form/Form";

export const Contact: React.FC = () => (
  <div className={styles.contact} onClick={(e) => e.stopPropagation()}>
    <h2 className={styles.contact__heading}>Let's connect!</h2>
    <Form />
    <span className={styles.contact__divider}>OR</span>
    <div className={styles.contact__contacts}>
      <a href="mailto:edita.motuze@gmail.com">edita.motuze@gmail.com /</a>
      <a
        href="https://linkedin.com/in/edita-motuze"
        target="_blank"
        className={styles.contact__linkedin}
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
);
