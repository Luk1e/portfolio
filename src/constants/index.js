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
  mcAdd,
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
  lineate,
  housescout,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
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
  {
    title: "Full Stack Developer",
    company_name: "Bachelor Project",
    icon: kiu,
    iconBg: "#333333",
    date: "Mar 2024 – Jul 2024",
  },
  {
    title: "Lineate Dev School Student",
    company_name: "Lineate",
    icon: lineate,
    iconBg: "#333333",
    date: "Jun 2024 – Jul 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "House Scout",
    description:
      "A comprehensive platform that allows users to register apartments for sale or rent, featuring advanced filters based on region, price, and space, while communicating with the backend and utilizing React on the frontend.",
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
    image: housescout,
    repo: "https://github.com/Luk1e/house-scout",
    demo: "https://house-scout.onrender.com/",
  },
  {
    id: "project-2",
    name: "Capstone Project",
    description:
      "I created this project as my bachelor capstone project. It is similar to Teams, using React for the frontend, Spring Boot for the backend, and MySQL for the database.",
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
    demo: "https://bestproject.buzz/",
  },
  {
    id: "project-3",
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
    id: "project-4",
    name: "Scheduler",
    description:
      "The Scheduler Application is a dynamic tool for managing appointments, featuring a calendar view, appointment details, and drag-and-drop functionality for rescheduling.",
    tags: [
      {
        name: "reactjs",
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
    repo: "https://github.com/Luk1e/scheduler",
    demo: "https://luk1e.github.io/scheduler/",
  },
  {
    id: "project-5",
    name: "McDonald's ad",
    description: `A visually engaging and responsive advertisement that showcases McDonald's latest menu items.`,
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
    image: mcAdd,
    repo: "https://github.com/Luk1e/mcbanner",
    demo: "https://luk1e.github.io/mcbanner/",
  },
];

export { services, technologies, experiences, projects };
