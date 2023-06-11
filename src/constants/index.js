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
  attendancetracker,
  apocalypseacademy,
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
    title: "Team Lead & Frontend Developer",
    company_name: "Ecowood",
    icon: ecowood,
    iconBg: "#333333",
    date: "Jun 2022 - Present",
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
    name: "Attendance Tracker",
    description:
      "Simplifying online student attendance tracking for teachers with an intuitive web-based solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: attendancetracker,
    repo: "https://github.com/Luk1e/ForTeacher",
    demo: "https://luk1e.github.io/ForTeacher/Main.html",
  },
  {
    id: "project-2",
    name: "Apocalypse Academy",
    description:
      "A mmersive post-apocalyptic game featuring multiple maps, captivating music, and various engaging features, where a lecturer transforms into a monster, chasing and devouring students in a thrilling adventure.",
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
    image: apocalypseacademy,
    repo: "https://github.com/Luk1e/Game",
    demo: "https://luk1e.github.io/Game/Main.html",
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
