import { BsCheckLg } from "react-icons/bs";
import { Experience } from "../../../../../data/experience";
import styles from "./ExperienceList.module.scss";

interface ExperienceListProps {
  experienceList: Experience[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({
  experienceList,
}) => {
  return (
    <div className={styles.experience}>
      <ul className={styles.experience__list}>
        {experienceList.map(({ title, place, topics }) => (
          <li className={styles.experience__item} key={title}>
            <h4 className={styles.experience__heading}>{title}</h4>
            <p className={styles.experience__place}>{place}</p>
            <h5 className={styles.experience__title}>Covered Topics:</h5>
            <ul className={styles.experience__topics}>
              {topics.map((topic) => (
                <li key={topic} className={styles.experience__topic}>
                  <BsCheckLg />
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
