import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    // <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">

    // <div className="prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-p:text-black prose-ul:text-black prose-ol:text-black prose-li:text-black prose-blockquote:text-black prose-strong:text-black dark:prose-headings:text-white dark:prose-h1:text-white dark:prose-h2:text-white dark:prose-h3:text-white dark:prose-h4:text-white dark:prose-h5:text-white dark:prose-h6:text-white dark:prose-p:text-white dark:prose-ul:text-white dark:prose-ol:text-white dark:prose-li:text-white dark:prose-blockquote:text-white dark:prose-strong:text-white">

    <div className=" prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-p:text-black prose-ul:text-black prose-ol:text-black prose-li:text-black prose-blockquote:text-black prose-strong:text-black dark:prose-headings:text-white dark:prose-h1:text-white dark:prose-h2:text-white dark:prose-h3:text-white dark:prose-h4:text-white dark:prose-h5:text-white dark:prose-h6:text-white dark:prose-p:text-white dark:prose-ul:text-white dark:prose-ol:text-white dark:prose-li:text-white dark:prose-blockquote:text-white dark:prose-strong:text-white">
      {children}
    </div>
  );
}
