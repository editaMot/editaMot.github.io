import { EXPERIENCE } from "../../../../data/experience";
import { FAMILIAR_SKILLS, SKILLS } from "../../../../data/skills";
import { ExperienceList } from "./ExperienceList/ExperienceList";
import styles from "./Skills.module.scss";
import { SkillsList } from "./SkillsList/SkillList";

export const Skills: React.FC = () => (
  <div className={styles.skills}>
    <h2 className={styles.skills__heading}>Skills & Experience</h2>

    <div className={styles.skills__content}>
      <div className={styles.skills__icons}>
        <SkillsList heading="Technology Stack:" skills={SKILLS} />
        <SkillsList heading="Familiar with:" skills={FAMILIAR_SKILLS} />
      </div>
      <span className={styles.divider}></span>
      <ExperienceList experienceList={EXPERIENCE} />
    </div>
  </div>
);
