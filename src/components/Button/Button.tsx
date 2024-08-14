import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  action?: () => void;
  type?: "primary" | "outlined";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  action,
  type = "primary",
}) => (
  <button
    onClick={action}
    className={`${styles.btn} ${styles[`btn--${type}`]}`}
  >
    {text}
  </button>
);
