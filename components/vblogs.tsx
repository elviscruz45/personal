"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import VBlog from "./vblog";

import { useSectionInView } from "@/lib/hooks";

export default function VBlogs() {
  // const { ref } = useSectionInView("Video Blogs", 0.5);

  return (
    <section
      id="vblog"
      // ref={ref}
      className="scroll-mt-28 justify-center text-center  sm:mb-0 space-x-10"
    >
      <SectionHeading>Video Blogs</SectionHeading>
      <div
        // className="  justify-center text-center mb-28 sm:mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        // "
        className="  justify-center text-center mb-28 sm:mb-40 grid grid-cols-1 
        "
      >
        Coming soon...
        {/* <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <VBlog {...project} />
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
}
