import { Metadata } from "next";

import { notFound } from "next/navigation";
import { SectionNameTitulo1 } from "../../lib/typeSchemaGeneral";
import BlogsLarge from "@/components/blogsLarge";
import VBlogsLarge from "@/components/vblogsLarge";
import HeaderLarge from "@/components/headerLarge";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogPage({ params }: any) {
  const sectionName = params?.titulo1;
  // const titulo = params?.titulo1;
  console.log("hcooodsfjasf", params);
  // const filePath = path.join(
  //   process.cwd(),
  //   "content/blogs/web-development-and-coding-full-course.md"
  // );
  // const fileContents = fs.readFileSync(filePath, "utf8");
  // const processedContent = await remark().use(html).process(fileContents);
  // const processedContentHtml = processedContent.toString(); // Convert to plain string

  const renderSection = (sectionName: SectionNameTitulo1) => {
    const sections = {
      // ************************Flujo de Trabajo****************
      blog: <BlogsLarge />,
      vblog: <VBlogsLarge />,
    };
    const sectionComponent = sections[sectionName];
    if (!sectionComponent) {
      notFound();
    }

    return sectionComponent;
  };

  return (
    <>
      <HeaderLarge />
      <main className="items-center justify-center">
        {renderSection(sectionName)}
      </main>
    </>
  );
}
