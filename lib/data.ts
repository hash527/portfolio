import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Software Development Intern",
    location: "Hyderabad",
    description:
      "I got trained on MERN Stack Development",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  // {
  //   title: "Software Project Manager",
  //   location: "Hyderabad",
  //   description:
  //     "Product owner of Analytics module in Taskflow CRM which was used 40k+ users. I also ensure the teams meet quality assurance goals.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "Nov 2021 - Apr 2022",
  // },
  {
    title: "Full-Stack Developer (Xylo Inc)",
    location: "Coimbatore",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "AARP Song Theme",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can browse through a list of themes and select three songs related to a theme and can earn rewards.",
    tags: ["React", "Astro Js", "MongoDB", "Tailwind", "GraphQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Adrsta Data Platfrom",
    description:
      "I was the front-end developer. It has loading data from external source and data visulaization after analysis of data through various algorithms from backend.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Astro Js",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Chakra UI",
  "Shadcn/UI"
  
] as const;