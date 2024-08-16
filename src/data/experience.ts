export interface Experience {
  title: string;
  place: string;
  topics: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Front-end development intership",
    place: "Cognizant",
    topics: [
      "Agile & Git",
      "Javascript & React",
      "Project structure & Dynamic components",
      "HTML & CSS",
      "Accessibility",
      "Build tools",
      "Testing",
    ],
  },
  {
    title: "Advanced Front-end development course",
    place: "CodeAcademy",
    topics: ["HTML / CSS / Bootstrap", "Javascript", "Node.Js", "React.Js"],
  },
  {
    title: "Advanced React course",
    place: "Udemy.com",
    topics: [
      "State management",
      "Events & Forms",
      "Components, composition & reusability",
      "Effects & Data fetching",
      "Modern Redux Toolkit",
      "React Query",
      "Optimization",
    ],
  },
  {
    title: "Typescript course",
    place: "Udemy.com",
    topics: [
      "TS basics",
      "State management with TS",
      "Events & Forms with TS",
      "Effects & Data fetching with TS",
      "Redux & TS",
    ],
  },
  {
    title: "Advanced CSS course",
    place: "Udemy.com",
    topics: ["Modern CSS & SASS", "Responsive design", "Flexbox & Grid"],
  },
];
