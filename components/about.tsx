"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working as a
        <span className="font-medium"> Mechanical engineer</span> primarily
        working as a Data Engineer in large mining companies, where I
        extensively utilized spreadsheets and Python for various tasks, I made a
        pivotal decision to follow my passion for programming. My journey into
        the world of programming commenced as I started developing small-scale
        projects on both
        <span className="font-medium"> mobile and web platforms</span>, purely
        for the joy it brings me. I enjoy the satisfaction of
        <span className="underline">
          {" "}
          enhancing people&apos;s quality of life and boosting company
          productivity
        </span>{" "}
        through my programming expertise.I specialize in a diverse tech stack{" "}
        <span className="font-medium">
          including React Native, Node.js, MongoDB, Express, Python Django,
          typescript and GraphQL
        </span>
        . My passion for technology drives me to constantly expand my knowledge,
        and I am currently engaged in a mobile app project for the mining
        industry at Teseo Software Company.
      </p>

      <p>
        When I&apos;m not immersed in coding, I find joy in hitting the gym,
        playing soccer, and taking my dog for long walks. I am also deeply
        fascinated{" "}
        <span className="font-medium">
          about Artificial Intelligence, astronomy, and science fiction
        </span>
        . Currently I am delving into the world of social media marketing,
        always eager to expand my horizons and gain new knowledge.
      </p>
    </motion.section>
  );
}
