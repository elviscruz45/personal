"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function VBlogsLarge() {
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
        <div className="mt-28  mr-10">
          <h1 className="text-l ">Coming soon...</h1>
        </div>
        {/* <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-28  mr-10">
          <h1 className="text-xl ">Welcome to My YouTube Channel</h1>
          <div className="">
            <iframe
              className=""
              src={`https://www.youtube.com/embed/LLAZUTbc97I`}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
      </div>
    </section>
  );
}
