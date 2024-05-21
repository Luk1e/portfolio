import {
  frontend,
  backend,
  ux,
  java,
  DataStructures,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  ebook,
  capstoneproject,
  tbcxusaid,
  dicegame,
  tailwind,
  ubuntu,
  git,
  mongodb,
  docker,
  mysql,
  OCaml,
  graphql,
  usaid,
  kiu,
  ecowood,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Database Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Data Structures and Algorithms",
    icon: DataStructures,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "OCaml",
    icon: OCaml,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Team Lead & Frontend Developer",
    company_name: "USAID PROJECT",
    icon: usaid,
    iconBg: "#333333",
    date: "Jun 2022 - Oct 2022",
  },
  {
    title: "Frontend Developer",
    company_name: "Ecowood",
    icon: ecowood,
    iconBg: "#333333",
    date: "Jun 2022 - Sep 2023",
  },
  {
    title: "Teaching Assistant",
    company_name: "Kutaisi International University",
    icon: kiu,
    iconBg: "#333333",
    date: "Mar 2023 – Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Capstone Project",
    description:
      "I created this project as my bachelor capstone project. It is similar to Teams, using React for the frontend, Spring Boot for the backend, and MySQL for the database. The project consists of a classroom platform and an e-book feature.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: capstoneproject,
    repo: "https://github.com/Luk1e/CapstoneProject",
    demo: "https://github.com/Luk1e/CapstoneProject",
  },
  {
    id: "project-2",
    name: "TBCxUSAID page",
    description:
      "For my TBC USAID task, I developed the responsive, TBCxUSAID page of the TBC website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tbcxusaid,
    repo: "https://github.com/Luk1e/TBC",
    demo: "https://luk1e.github.io/TBC/",
  },

  {
    id: "project-3",
    name: "Dice Game",
    description: `A thrilling game where players roll dice, aiming to reach a total of 50 points while avoiding rolling a 1, adding an exciting mix of luck and strategy to each turn.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dicegame,
    repo: "https://github.com/Luk1e/Dice/tree/master",
    demo: "https://luk1e.github.io/Dice/",
  },
  {
    id: "project-4",
    name: "E-Book",
    description:
      "E-Book is a web application allowing users to resell their books in a user-friendly platform.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ebook,
    repo: "https://github.com/Luk1e/E-book/tree/master",
    demo: "https://luk1e.github.io/E-book/",
  },
];

export { services, technologies, experiences, projects };
