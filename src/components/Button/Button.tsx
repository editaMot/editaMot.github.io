import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  action?: () => void;
  type?: "primary" | "outlined" | "text";
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  action,
  type = "primary",
  icon,
}) => (
  <button
    onClick={action}
    className={`${styles.btn} ${styles[`btn--${type}`]}`}
  >
    {text} {icon && <span className={styles.btn__icon}>{icon}</span>}
  </button>
);
