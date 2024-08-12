import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../lib/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import HeaderLarge from "@/components/headerLarge";
import Image from "next/image";
import { BlogContenido } from "@/components/blogs/BlogContenido";
import path from "path";
interface Post {
  slug: string;
  content: string;
  time: string;
  title: string;
  description: string;
  imageUrl: string;
}
// This function generates the static params
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "recipes");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    titulo1: filename.replace(".md", ""),
  }));
}

// This is the main page component
export default async function RecipePage({
  params,
}: {
  params: { titulo1: string };
}) {
  // console.log("holaaa");
  const slug = params.titulo1;
  const filePath = path.join(process.cwd(), "recipes", `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    const post: Post = {
      slug,
      content: matterResult.content,
      time: matterResult.data.time || "default-time",
      title: matterResult.data.title || "default-title",
      description: matterResult.data.description || "default-description",
      imageUrl: matterResult.data.imageUrl || "default-image-url",
    };

    return (
      <>
        <div className="w-2/3 m-auto">
          <main>
            <HeaderLarge />
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
                      <time dateTime={"2022-12-12"}>{post.time}</time>
                    </div>
                  </div>
                </div>
                <div className="flex self-end">{/* Social Links Here */}</div>
              </div>
              <h1 className="font-bold text-4xl mb-1 ">{post.title}</h1>
              <h2 className="blog-detail-header-subtitle mb-2 text-xl ">
                {post.description}
              </h2>
              <div className="h-96 bg-black mx-auto w-full relative">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <br />
            </div>
            <article>
              <Markdown>{post.content}</Markdown>{" "}
            </article>
          </main>
        </div>
      </>
    );
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return <div>Recipe not found</div>;
  }
}
//------------------------------------------------------------------------------------------------------------------------------

// function getPostContent(slug: any) {
//   const folder = "recipes/";
//   const file = folder + `${slug}.md`;
//   console.log("hola123", file);

//   try {
//     const content = fs.readFileSync(file, "utf8");
//     const matterResult = matter(content);
//     return matterResult;
//   } catch (error) {
//     console.error(`Error reading file ${file}:`, error);
//     throw error; // Or handle it as appropriate
//   }
// }

// export default function RecipePage(props: any) {
//   const slug = props.params.titulo1;
//   const post = getPostContent(slug);
//   console.log("asdfgas", post);

//   // const headdata = getPostMetadata("recipes");
//   // // filter by the slug
//   // const metadata = headdata.filter((post) => post.slug === slug)[0];

//   return <BlogContenido />;
// }

//------------------------------------------------------------------------------------------------------------------------------

// return (
//   <>
//     <div className="w-2/3 m-auto">
//       <main>
//         <HeaderLarge />
//         <div className="blog-detail-header">
//           <div className="flex flex-row justify-between mb-2">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <a href="#">
//                   {/* <span className="sr-only">Elvis</span> */}
//                   <div className="relative h-10 w-10 !mb-0">
//                     <Image
//                       priority
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-full"
//                       src="/images/ElvisProfile.jpeg"
//                       alt=""
//                     />
//                   </div>
//                 </a>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium !mb-0">
//                   <a href="#" className="hover:underline">
//                     Elvis Cruz Chullo
//                   </a>
//                 </p>
//                 <div className="flex space-x-1 text-sm ">
//                   <time dateTime={"2022-12-12"}>{metadata.time}</time>
//                 </div>
//               </div>
//             </div>
//             <div className="flex self-end">{/* Social Links Here */}</div>
//           </div>
//           <h1 className="font-bold text-4xl mb-1 ">{metadata.title}</h1>
//           <h2 className="blog-detail-header-subtitle mb-2 text-xl ">
//             {metadata.description}
//           </h2>
//           <div className="h-96 bg-black mx-auto w-full relative">
//             <Image
//               priority
//               layout="fill"
//               objectFit="cover"
//               src={metadata.imageUrl}
//               alt=""
//             />
//           </div>
//           <br />
//         </div>
//         <article>{/* <Markdown>{post.content}</Markdown> */}</article>
//       </main>
//     </div>
//   </>
// );

// import { Metadata } from "next";
// // import BlogHeader from "@/components/blogs/blogHeader";
// import { notFound, useSearchParams } from "next/navigation";
// import { SectionNameTitulo1 } from "../../lib/typeSchemaGeneral";
// // import BlogsLarge from "@/components/blogs/blogHeader";
// // import BlogsLarge from "@/components/blogsLarge";
// import HeaderLarge from "@/components/headerLarge";
// import { blogsData } from "@/lib/data";

// import VBlogsLarge from "@/components/vblogsLarge";
// import ContentTemplate from "@/components/blogs/ContentTemplate";
// import fs from "fs";
// import path from "path";
// import { remark } from "remark";
// import html from "remark-html";
// import Header from "@/components/header";
// import { allDocs } from "contentlayer/generated";
// import getPostMetadata from "@/lib/getPostMetadata";
// import PostCard from "@/components/PostCard";

// export const metadata: Metadata = {
//   title: "Blogs",
// };

// export default async function BlogPage({ params }: any) {
//   const postMetadata = getPostMetadata("recipes");

//   const sectionName = params?.titulo1;
//   // const titulo = params?.titulo1;
//   // console.log("hcooodsfjasf", params);
//   // const filePath = path.join(
//   //   process.cwd(),
//   //   "content/blogs/web-development-and-coding-full-course.md"
//   // );
//   // const fileContents = fs.readFileSync(filePath, "utf8");
//   // const processedContent = await remark().use(html).process(fileContents);
//   // const processedContentHtml = processedContent.toString(); // Convert to plain string

//   const renderSection = (sectionName: SectionNameTitulo1) => {
//     const sections = {
//       // ************************Flujo de Trabajo****************
//       blog: <ContentTemplate />,
//       vblog: <VBlogsLarge />,
//     };
//     const sectionComponent = sections[sectionName];
//     if (!sectionComponent) {
//       notFound();
//     }

//     return sectionComponent;
//   };

//   return (
//     <div className="w-2/3 m-auto">
//       {/* <BlogHeader /> */}
//       <HeaderLarge />
//       {postMetadata.map((post, postIndex) => {
//         return <PostCard key={postIndex} post={post} />;
//       })}

//       <main className="items-center justify-center">
//         {renderSection(sectionName)}
//       </main>
//     </div>
//   );
// }

// interface PageProps {
//   params: { slug: string };
// }

// async function getDocFromParams(slug: string) {
//   const doc = allDocs.find((doc) => doc.slugAsParams === slug);
//   if (!doc) {
//     notFound();
//   }
//   return doc;
// }

// export async function getServerSideProps() {
//   const folder = path.join(process.cwd(), "posts"); // Adjust the path to where your markdown files are located
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   const posts = markdownPosts.map((filename) => {
//     const fileContents = fs.readFileSync(path.join(folder, filename), "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title,
//       time: matterResult.data.time,
//       imageUrl: matterResult.data.imageUrl,
//       description: matterResult.data.description,
//       slug: filename.replace(".md", ""),
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata("recipes");
//   return posts.map((post) => ({ slug: post.slug }));
// };

// export async function generateMetadata({ params, searchParams }: any) {
//   const id = params?.slug ? " ⋅ " + params?.slug : "";
//   return {
//     title: `${id.replaceAll("_", " ")}`,
//   };
// }
