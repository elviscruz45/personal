"use client";
import { useRef, useEffect, useState } from "react";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import { blogsData } from "@/lib/data";
import unsupervised from "@/public/Unsupervised-Machine-Learning-Patterns-Social-and-Blog.jpg";
import Markdown from "react-markdown";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export function BlogContenido({ postData }: any) {
  const params = useSearchParams();
  const title = params.get("article");
  const article = blogsData.filter((blog) => blog.title === title)[0];

  return (
    <>
      <div className="blog-detail-header">
        <div className="flex flex-row justify-between mb-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                {/* <span className="sr-only">Elvis</span> */}
                <div className="relative h-10 w-10 !mb-0">
                  <Image
                    priority
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    src="/images/ElvisProfile.jpeg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium !mb-0">
                <a href="#" className="hover:underline">
                  Elvis Cruz Chullo
                </a>
              </p>
              <div className="flex space-x-1 text-sm ">
                {/* <time dateTime={"2022-12-12"}>{article.time}</time> */}
              </div>
            </div>
          </div>
          <div className="flex self-end">{/* Social Links Here */}</div>
        </div>
        {/* <h1 className="font-bold text-4xl mb-1">{article.title}</h1> */}
        {/* <h2 className="blog-detail-header-subtitle mb-2 text-xl ">
          {article.description}
        </h2> */}
        <div className="h-96 bg-black mx-auto w-full relative">
          {/* <Image
            priority
            layout="fill"
            objectFit="cover"
            src={article.imageUrl}
            alt=""
          /> */}
        </div>
      </div>
      <article className="prose lg:prose-lg markdown-image-50 mx-auto">
        <div className="content mt-8">
          <h2 className="text-2xl font-semibold mb-4">What is Javascript?</h2>
          <p className="mb-4">
            12345 2314 JavaScript is a scripting or programming language that
            allows you to implement complex features on web pages — every time a
            web page does more than sit there and display static information for
            you to look at — displaying timely content updates, interactive
            maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you
            can bet that JavaScript is probably involved.
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
      <article className="prose lg:prose-lg markdown-image-50"></article>
    </>
  );
}
