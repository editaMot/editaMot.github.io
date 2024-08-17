import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  action?: () => void;
  type?: "primary" | "outlined" | "text";
  icon?: ReactNode;
  size?: "small" | "medium";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  action,
  type = "primary",
  icon,
  size = "medium",
  disabled = false,
}) => (
  <button
    disabled={disabled}
    onClick={action}
    className={`${styles.btn} ${styles[`btn--${type}`]} ${
      styles[`btn--${size}`]
    } ${disabled ? styles["btn--disabled"] : ""}`}
  >
    {text} {icon && <span className={styles.btn__icon}>{icon}</span>}
  </button>
);
