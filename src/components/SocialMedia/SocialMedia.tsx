import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import styles from "./SocialMedia.module.scss";

interface SocialMedia {
  title: string;
  image: ReactNode;
  url: string;
}

const SOCIAL_MEDIA: SocialMedia[] = [
  {
    title: "LinkedIn",
    image: <FaLinkedin />,
    url: "https://www.linkedin.com/in/edita-motuze",
  },
  {
    title: "GitHub",
    image: <FaSquareGithub />,
    url: "https://github.com/editaMot",
  },
];

export const SocialMedia: React.FC = () => (
  <ul className={styles.socialMedia}>
    {SOCIAL_MEDIA.map(({ title, image, url }) => (
      <li key={title} className={styles.socialMedia__item}>
        <a href={url} target="_blank">
          {image}
        </a>
      </li>
    ))}
  </ul>
);
