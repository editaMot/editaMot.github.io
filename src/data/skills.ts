import {
  css,
  expressDark,
  figma,
  firebaseDark,
  formDark,
  git,
  html,
  js,
  mongodbDark,
  mui,
  query,
  react,
  reduxDark,
  sassDark,
  styledComponent,
  supabaseDark,
  tailwind,
  ts,
  viteDark,
  vitestDark,
} from "../assets/images";

export interface SkillsItem {
  title: string;
  image: string;
}

export const SKILLS: SkillsItem[] = [
  { title: "Vite.js", image: viteDark },
  { title: "React", image: react },
  { title: "Typescript", image: ts },
  { title: "Javascript", image: js },
  { title: "React Query", image: query },
  { title: "Redux", image: reduxDark },
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "SASS", image: sassDark },
  { title: "React Form Hook", image: formDark },
  { title: "Git", image: git },
  { title: "Supabase", image: supabaseDark },
  { title: "Firebase", image: firebaseDark },
  { title: "Material UI", image: mui },
  { title: "Figma", image: figma },
];

export const FAMILIAR_SKILLS: SkillsItem[] = [
  { title: "Express.js", image: expressDark },
  { title: "MongoDb", image: mongodbDark },
  { title: "Styled Component", image: styledComponent },
  { title: "Tailwind", image: tailwind },
  { title: "Vitest", image: vitestDark },
];
