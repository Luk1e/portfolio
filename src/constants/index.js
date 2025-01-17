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
  capstoneproject,
  tbcxusaid,
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
  formPlatform,
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
    name: "Form Platform",
    description:
      "A full-stack form management platform with user authentication, multilingual support, and Salesforce integration. Built with React, Express, and MySQL, featuring robust security and cloud storage capabilities.",
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
    image: formPlatform,
    repo: "https://github.com/Luk1e/form-platform",
    demo: "https://form-platform-client.onrender.com/",
  },

  {
    id: "project-2",
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
    id: "project-3",
    name: "VSchool",
    description:
      "A full-stack team collaboration platform inspired by Microsoft Teams, featuring real-time communication and team management capabilities. Built with React, Spring Boot, and MySQL architecture.",
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
    id: "project-4",
    name: "TBCxUSAID page",
    description:
      "A responsive landing page for TBC Bank's USAID partnership program, built with React, TypeScript, and Styled Components. Features modern design principles and seamless mobile responsiveness.",

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
];

export { services, technologies, experiences, projects };
