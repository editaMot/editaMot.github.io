import { Card } from "@components/index";
import { PROJECTS } from "@data/projects";
import styles from "./Projects.module.scss";

export const Projects: React.FC = () => (
  <div className={styles.projects}>
    <h2 className={styles.projects__heading}>My Works</h2>
    <div className={styles.projects__list}>
      {PROJECTS.map(({ title, liveUrl, gitUrl, image, tools }) => (
        <Card
          key={title}
          title={title}
          liveUrl={liveUrl}
          gitUrl={gitUrl}
          image={image}
          tools={tools}
        />
      ))}
    </div>
  </div>
);
