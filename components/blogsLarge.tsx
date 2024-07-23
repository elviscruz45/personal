"use client";
import { useRef, useEffect, useState } from "react";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import { blogsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Blog({ processedContent }: any) {
  const params = useSearchParams();

  const title = params.get("article");
  const article = blogsData.filter((blog) => blog.title === title)[0];

  return (
    <>
      <article className="prose lg:prose-lg markdown-image-50 mx-auto p-4">
        <div className="header text-center">
          <h1 className="text-3xl font-bold mb-2">
            Web Development & Code 101 - Full Guide [2022]
          </h1>
          <p className="text-lg mb-4">
            Learn programming in JS language, HTML, and CSS. Create a Web
            Application made in React JS. The path to the final project includes
            many assignments, code exercises, and challenges.
          </p>
          <Image
            className="w-full max-w-md mx-auto"
            src={article.imageUrl}
            alt="Web Development & Code 101"
          />
        </div>
        <div className="content mt-8">
          <h2 className="text-2xl font-semibold mb-4">What is Javascript?</h2>
          <p className="mb-4">
            JavaScript is a scripting or programming language that allows you to
            implement complex features on web pages — every time a web page does
            more than sit there and display static information for you to look
            at — displaying timely content updates, interactive maps, animated
            2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that
            JavaScript is probably involved.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What are you going to work on?
          </h2>
          <p className="mb-4">
            In this course, we will cover six big topic groups. Every section
            contains a lot of assignments and code exercises.
          </p>
          <p className="mb-4">
            The final project is a web application to display products for users
            to buy. For the entire course length, you will work on one
            application. We will start simple with console application and
            finish with React JS, an excellent styled application.
          </p>
          <p className="mb-4">
            You will see how your application evolves, what techniques are
            required, and how everything connects in the end. You will get a
            complete understanding of the programming process.
          </p>
        </div>
      </article>
    </>
  );
}
