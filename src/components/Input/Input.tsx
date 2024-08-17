import { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type?: string;
  id: string;
  error?: string | undefined;
  label: string;
  variant?: "input" | "textarea";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", id, error, label, variant = "input", ...rest }, ref) => {
    return (
      <div
        className={`${styles.wrapper} ${error ? styles["wrapper--err"] : ""}`}
      >
        {label && (
          <label
            htmlFor={id}
            className={`${styles.input__label} ${
              error ? styles["input__label--err"] : ""
            }`}
          >
            {label}
          </label>
        )}
        {error && <span className={styles.input__error}>{error}</span>}
        {variant === "input" && (
          <input
            type={type}
            id={id}
            ref={ref}
            className={`${styles.input__input} ${
              error ? styles["input__input--err"] : ""
            }`}
            {...rest}
          />
        )}
        {variant === "textarea" && (
          <textarea
            id={id}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${styles.input__textarea} ${
              error ? styles["input__textarea--err"] : ""
            }`}
            {...rest}
          />
        )}
      </div>
    );
  }
);
