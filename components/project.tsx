"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Content } from "next/font/google";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,

      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section style={{ height: "max-content" }} className="bg-gray-100 max-w-[60rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {
            title === "AARP Song Theme" && <ul className="list-[square]">
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                A Genre Matching Web Game application where users can browse through a list of themes and select three songs related to a theme and earn rewards.
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Built the app in Monorepo architecture  consolidating the Client UI, Admin Panel, and Backend
                into a single codebase decreased development time by 40%.
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Built the Client UI using Astro and Preact for better performance and SEO and deployed the app in azure with frontend build only around 400KB
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Built and designed the Admin Panel using React and Fluent UI and integrated a robust cache layer with Redis DB in the backend system.
              </li>
            </ul>
          }
          {
            title === "Adrsta Data Platfrom" && <ul className="list-[square]">
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                An AI Data platform which gets data from external source and displays cool visulaizations with data across various algorithms from backend.
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Engineered a data platform website with react-typescript with modern frontend tooling Vite, Typescript, Tailwind, and
                Tanstack Router
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Utilized xslx.js library to seamlessly integrate spreadsheet and Excel data, enabling users to interact with and visualize
                these datasets with Recharts.js effectively.
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Provided technical guidance and mentorship to developers in the team. Automated the software deployment process, ensuring efficient and error-free deployments
              </li>
              {/* <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                
              </li> */}
            </ul>
          }
          {
            title === "Sephora (Jr.Consultant)" && <ul className="list-[square]">
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Optimized existing API response by pipelining HTTP requests, resulting in a 20% improvement in system performance.
              </li>
              <li className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-base">
                Collaborated with cross-functional teams to gather and analyze requirements, ensuring that software solutions met business objectives effectively
              </li>
            </ul>
          }
          <ul style={{ marginTop: "10px" }} className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {
          imageUrl && <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        }
      </section>
    </motion.div>
  );
}
