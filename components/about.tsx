"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am an enthusiastic <span className="font-bold">full-stack developer</span> proficient in both  <span className="italic">frontend</span> and  <span className="italic">backend</span> technologies, I am dedicated to staying at the forefront of industry advancements. Combining creativity with technical expertise, I aim to bring impact and  <span className="italic">scalability</span> and
        <span className="italic"> responsiveness</span>  to every project. My core stack includes  <span className="italic font-bold underline"><a rel="stylesheet" target="_blank" href="https://nextjs.org/">
        Next.js</a></span> and  <span className="italic font-bold underline"><a rel="stylesheet" target="_blank" href="https://www.prisma.io/">
        Prisma</a></span>, with additional experience in <span className="italic font-bold"><a className="underline" rel="stylesheet" target="_blank" href="https://supabase.com/">
        Supabase(Postgresql)</a>, <a rel="stylesheet" className="underline" target="_blank" href="https://www.mongodb.com/"> 
         MongoDb(NoSQL)</a>, Authentication</span> and various front-end and back-end tech stacks. Currently a proactive third-year undergrad actively seeking <span className="italic">intern</span> and <span className="italic">part-time</span> opportunities in the frontend, backend and full-stack development realm. Let's collaboratively shape the future of innovative and scalable applications!
        <a className="underline" rel="stylesheet" href="https://nextjs.org/">
          hi</a>
      </p>

      <p>
        <span className="italic">Fun fact : I code like I'm turning life into a sitcom. Breakfast routines? Optimized. My dog's gourmet meals? There's an app for that. <span className="font-bold">Full-stack developer</span> by day, coder by night!</span>
      </p>
    </motion.section>
  );
}
