import { ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  content: ReactNode;
  isExpanded: boolean;
  handleSectionClick: () => void;
}

export const Section: React.FC<SectionProps> = ({
  title,
  content,
  isExpanded,
  handleSectionClick,
}) => (
  <section
    className={`${styles.section} ${
      isExpanded ? styles["section--expanded"] : styles["section--collapsed"]
    }`}
    onClick={handleSectionClick}
  >
    {!isExpanded && <p className={styles.section__title}>{title}</p>}
    {isExpanded && content}
  </section>
);
