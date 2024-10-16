import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import projectmaintenance from "@/public/projectmaintenance.png";
import webpageproject from "@/public/webpageproject.png";
import teseo_mining from "@/public/teseo_mining.png";
import projectbelts from "@/public/projectbelts.png";
import unsupervised from "@/public/Unsupervised-Machine-Learning-Patterns-Social-and-Blog.jpg";
import transformers from "@/public/markdown/covers/transformers.jpeg";
import js from "@/public/markdown/covers/js.png";

import { StaticImageData } from "next/image";
// import markdownContent from "@/content/blogs/nft-marketplace-in-react-js-next-typescript-full-guide.md";
// import { content } from "@/content/blogs/unsupervisedMachinelearning";
import { time } from "console";

export const blogsData = [
  {
    title: "100 Preguntas de JavaScript",
    time: "2024-10-16",
    description:
      "❤️ De básico a avanzado: prueba tus conocimientos en JavaScript y prepárate para entrevistas técnicas. Preguntas y respuestas actualizadas regularmente. ¡Solo por diversión, buena suerte!",
    imageUrl: js,
    // markdown: content,
  },
  {
    title: "Transformers para LLM",
    time: "2024-10-09",
    description:
      "Este artículo explora el aprendizaje automático no supervisado, enfocándose en algoritmos que encuentran patrones en datos no etiquetados.",
    imageUrl: transformers,
    // markdown: content,
  },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  // {
  //   name: "Video Blogs",
  //   hash: "#vblog",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
] as const;
export const linksNavigation = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "Blog",
    hash: "/#blog",
  },
  // {
  //   name: "Video Blogs",
  //   hash: "/#vblog",
  // },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "/#experience",
  // },
] as const;
export const experiencesData = [
  {
    title: "Mechanical Engineer",
    location: "Arequipa, Peru",
    description:
      "I graduated with a specilalization of Maintenance Reliability where I learned Python to handle Equipment Maintenance Data.",
    icon: <LuGraduationCap />,
    date: "2013",
  },
  {
    title: "Freeport McMoran - Cerro Verde",
    location: "Arequipa, Peru",
    description:
      "I worked as a Data Analyst responsible for collecting data from equipment sensors and SCADA servers in the concentrator plant. I utilized Python to process and analyze this data, with the primary goal of assessing equipment reliability and optimizing maintenance strategies.",
    icon: <CgWorkAlt />,
    date: "2013-2017",
  },
  {
    title: "Metso Outotec",
    location: "Lima, Peru",
    description:
      "I worked as an Equipment Sales Engineer, leveraging my skills in Python, Salesforce, and SAP to extract and analyze data. Through data analysis, I facilitated more informed recommendations for clients within the mining industry.",
    icon: <CgWorkAlt />,
    date: "2018-2020",
  },
  {
    title: "Specialization in Computer Science - UTEC",
    location: "Lima, Peru",
    description:
      "Initially focused on mastering programming primarily in Python for Data Science. I soon realized that JavaScript was better suited to my personal fulfillment when it came to developing solutions for Android and iOS devices.",
    icon: <LuGraduationCap />,
    date: "2021 - 2021",
  },
  {
    title: "Teseo Software Company Developer",
    location: "Delaware, USA",
    description:
      "I am currently employed as a full-stack developer at a startup specializing in mobile applications. Our focus is on providing innovative solutions for industry challenges, including the development of machine learning models, deep learning vision applications, and AI generative technologies.",
    icon: <FaReact />,
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Teseo Mining",
    description:
      "I worked as a Mobile developer on this startup project for 1 year. Mining companies can track every task and report it in real time.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    imageUrl: projectmaintenance,
  },
  {
    title: "Finant",
    description:
      "I worked as a Web Developer for a startup project for 4 months. The website is located at https://www.finant.pe  , the app is focused on helping students create their thesis to achieve their college degree more effectively.",
    tags: ["Next.js", "openai", "mongodb", "express", "Firebase", "TypeScript"],
    imageUrl: webpageproject,
  },
  {
    title: "Teseo Maintenance",
    description:
      "We tracked all plant assets in mining, stored maintenance data, and shared it with all the employees to make better decisions for future maintenance plans.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    imageUrl: teseo_mining,
  },
  {
    title: "Teseo Conveyor Belts",
    description:
      "Conveyor belts necessitate a real-time maintenance data management system for informed decision-making aimed at enhancing overall availability",
    tags: [
      "React Native",
      "Firebase",
      "Redux",
      "TypeScript",
      "MongoDB",
      "SQL",
      "Express",
    ],
    imageUrl: projectbelts,
  },
] as const;

export const skillsData = [
  "Python",
  "Scikit-learn",
  "Tensorflow",
  "PyTorch",
  "Django",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
] as const;
