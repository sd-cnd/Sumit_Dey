import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import RozaDashboard from "@/public/RozaDashboard.png";
import RozaStore from "@/public/RozaStore.png";
import SocioSync from "@/public/SocioSync.png";
import Presents from "@/public/Presents.png";


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
    title: "AISSCE - 94%",
    location: "MBD DAV PUBLIC SCHOOL",
    description:
      "I graduated high school with distinction, earning a remarkable 94% grade and joined IIEST Shibpur for my 'Bachelor of Technology(B.Tech)'.",
    icon: React.createElement(LuGraduationCap),
    date: "May-2021",
  },
  {
    title: "Bachelor of Technology (B.Tech)",
    location: "IIEST Shibpur",
    description:
      "CGPA : 8.18",
    icon: React.createElement(LuGraduationCap),
    date: "Dec-2021 - Present",
  },
  {
    title: "Frontend developer",
    location: "I started my web development journey as a frontend developer, developing great, seamless and responsive user interfaces for web application.",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Feb-2022 - present",
  },
  {
    title: "Technical Content writer Intern",
    location: "GeeksforGeeks",
    description:
      "I research and generate high-quality technical articles and related tutorials majorly based on Data Structures and Algorithms(DSA).",
    icon: React.createElement(CgWorkAlt),
    date: "April-2023 - present",
  },
  {
    title: "Full Stack Developer",
    location: "I have successfully completed 14+ projects by now using a variety of frameworks.",
    description:
      "I  embarked on a transformative journey as a full-stack developer journey, crafting immersive user experiences with polished front-end skills, and architecting robust back-end solutions, fostering a seamless synergy between creativity and functionality in web development.",
    icon: React.createElement(SiNextdotjs),
    date: "Aug-2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "RozaHarvest Admin Dashboard",
    description:
      "Simplifying rose sales management with an intuitive interface for editting categories, products, and tracking sales.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Prisma", "Stripe", "Clerk"],
    imageUrl: RozaDashboard,
    link:"https://roza-harvest-admin-dashboard.vercel.app/"
  },
  {
    title: "RozaHarvest Store",
    description:
      "Your enchanting destination for a kaleidoscope of roses – offering diverse types and hues to elevate your floral experience. Embrace the beauty of nature with the exquisite collection.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: RozaStore,
    link:"https://roza-harvest-store.vercel.app/"
  },
  {
    title: "SocioSync",
    description:
      "Elevate your social experience with a uniquely crafted platform, capturing and connecting in the art of shared moments.",
    tags: ["React","Appwrite", "Vite", "Tailwind CSS"],
    imageUrl: SocioSync,
    link:"https://sociosync.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Redux",
  "Next.js",
  "Git",
  "Github",
  "Tailwind CSS",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "Supabase",
  "NoSQL",
  "GraphQL",
  "PostgreSQL",
  "Vite",
  "Appwrite",
  "Firebase",
  "stripe",
  "Clerk",
] as const;
