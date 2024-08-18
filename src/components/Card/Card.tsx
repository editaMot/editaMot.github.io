import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "../index";
import styles from "./Card.module.scss";

interface Tool {
  title: string;
  image: string;
}

interface CardProps {
  title: string;
  liveUrl: string;
  gitUrl: string;
  image: string;
  tools: Tool[];
}

export const Card: React.FC<CardProps> = ({
  title,
  liveUrl,
  gitUrl,
  image,
  tools,
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={styles.card__image}
      />

      <div className={styles.card__content}>
        <h3 className={styles.card__heading}>{title}</h3>
        <div className={styles.card__tools}>
          {tools.map(({ title, image }) => (
            <img src={image} alt={title} loading="lazy" key={title} />
          ))}
        </div>
        <div className={styles.card__buttons}>
          <Button
            text="Live"
            icon={<MdOutlineArrowOutward />}
            action={() => window.open(liveUrl, "_blank")}
            type="text"
          />
          <Button
            text="GitHub"
            action={() => window.open(gitUrl, "_blank")}
            type="text"
            icon={<MdOutlineArrowOutward />}
          />
        </div>
      </div>
    </div>
  );
};
