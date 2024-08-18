import { SkillsItem } from "@data/skills";
import styles from "./SkillList.module.scss";

interface SkillsListProp {
  skills: SkillsItem[];
  heading: string;
}

export const SkillsList: React.FC<SkillsListProp> = ({ skills, heading }) => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.skills__heading}>{heading}</h3>
      <ul className={styles.skills__list}>
        {skills.map(({ title, image }) => (
          <li key={title} className={styles.skills__item}>
            <img src={image} alt={title} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
};
