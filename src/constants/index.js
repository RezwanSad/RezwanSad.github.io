import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
  docker,
  java,
  python,
  numpy,
  pandas,
  munlogo,
  sdmlogo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: java,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Data Quality Analyst",
    company_name: "Data and Image Analysis Group (DIAG), Memorial University of Newfoundland",
    icon: munlogo,
    iconBg: "#808080",
    date: "September 2023 - Present",
    points: [
      "Examine medical  images to assess quality and identify medical/anatomical inconsistencies and anomalies.",
      'Use anatomical knowledge to analyze and correct inaccurate medical image "segmentations".',
      "Produce statistics and reports.",
      "Create clear and comprehensive documentation for a variety of topics, including anatomical protocols and the building of an online anatomical learning hub.",
    ],
  },
  {
    title: "Supervisor",
    company_name: "Shoppers DrugMart",
    icon: sdmlogo,
    iconBg: "#FF0000",
    date: "April 2022 - Present",
    points: [
      "Managing the customer service functions, including cash, cashiers and merchandising.",
      "Developed customer service by positively engaging with all 200+ customers daily.",
      "Accurately accounted for cash and coupon, lottery, refunds, and PC Optimum.",
    ],
  },
  {
    title: "Registration Student Assistant",
    company_name: "Registrar’s Office, Memorial University of Newfoundland",
    icon: munlogo,
    iconBg: "#808080",
    date: "Jan 2023 - May 2024",
    points: [
      "Responsible for assisting Registrarial Services staff to help students with registration, enrolment and other registrarial service.",
      "Assisted students with registration and registration errors, providing information, helping students with the enrolment verification requests and other general information.",
    ],
  },   
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const myProjects = [
  {
    title: 'Four Board Game',
    desc: 'A computerized version of the Four board game for 2-player mode (human vs. human or human vs. computer), accommodating color vision deficiency, developed collaboratively for a software engineering course.',
    subdesc:
      'Features two computer player difficulty levels (Easy and Hard) and allows users to save and resume games in later sessions.',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 4,
        name: 'Java',
        path: '/assets/java.png',
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, myProjects };