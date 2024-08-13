import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: any) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      time: matterResult.data.time,
      imageUrl: matterResult.data.imageUrl,
      description: matterResult.data.description,
      numero: matterResult.data.numero,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// export async function getServerSideProps() {
//   const folder = path.join(process.cwd(), "posts"); // Adjust this path to your markdown files location
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // Get the file data
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
