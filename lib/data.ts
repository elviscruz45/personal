import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import aaaaaa from "@/public/aaaaaa.png";
import teseo_mining from "@/public/teseo_mining.png";
import pulley from "@/public/555.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mechanical Engineer",
    location: "Arequipa, Peru",
    description:
      "I graduated with a specilalization of Maintenance Reliability where I learned Python to handle Equipment Maintenance Data.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Freeport McMoran - Cerro Verde",
    location: "Arequipa, Peru",
    description:
      "I worked as a Data Analyst responsible for collecting data from equipment sensors and SCADA servers in the concentrator plant. I utilized Python to process and analyze this data, with the primary goal of assessing equipment reliability and optimizing maintenance strategies.",
    icon: React.createElement(CgWorkAlt),
    date: "2013-2017",
  },
  {
    title: "Metso Outotec",
    location: "Lima, Peru",
    description:
      "I worked as an Equipment Sales Engineer, leveraging my skills in Python, Salesforce, and SAP to extract and analyze data. Through data analysis, I facilitated more informed recommendations for clients within the mining industry.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2020",
  },
  {
    title: "Self-Taught Developer",
    location: "Arequipa, Peru",
    description:
      "I initially focused on mastering programming primarily in Python, but I soon realized that JavaScript was better suited to my personal fulfillment when it came to developing solutions for Android and iOS devices.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Teseo Software Company Developer",
    location: "Delaware, USA",
    description:
      "I am currently employed as a full-stack developer at a startup that focuses on developing mobile applications to provide innovative solutions for the mining industry, addressing the challenges prevalent in the sector.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Teseo Mining",
    description:
      "I worked as a Mobile developer on this startup project for 1 year. Mining companies can track every task and report it in real time.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    imageUrl: aaaaaa,
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
    imageUrl: pulley,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Python",
  "Django",
] as const;
