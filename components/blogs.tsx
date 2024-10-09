"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { blogsData } from "@/lib/data";
import Blog from "./blog";

import { useSectionInView } from "@/lib/hooks";

export default function Blogs({ blogs }: any) {
  const { ref } = useSectionInView("Blog", 0.5);

  return (
    <section id="blog" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>Blogs</SectionHeading>

      <div>
        {blogsData.map((project: any, index: number) => (
          <React.Fragment key={index}>
            <Blog {...project} />
            <br />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
