import { ReactNode } from "react";
import styles from "./Main.module.scss";

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);
