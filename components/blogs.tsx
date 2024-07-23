"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { blogsData } from "@/lib/data";
import Blog from "./blog";

import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blog", 0.5);

  return (
    <section
      id="blog"
      ref={ref}
      className="scroll-mt-28 justify-center text-center  sm:mb-0 space-x-10"
    >
      <SectionHeading>Blogs</SectionHeading>
      <div
        // className="  justify-center text-center mb-28 sm:mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        // "
        className="  justify-center text-center mb-28 sm:mb-40 grid grid-cols-1 
        "
      >
        <div>
          {blogsData.map((project, index) => (
            <React.Fragment key={index}>
              <Blog {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
