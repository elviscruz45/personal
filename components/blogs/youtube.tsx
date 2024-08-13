"use client";
// import { useRef, useEffect, useState } from "react";

// import { projectsData } from "@/lib/data";
import Image from "next/image";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { BlogContenido } from "./BlogContenido";

export function Youtube({ id, title }: any) {
  return (
    <>
      <div className="sm:w-2/3 m-auto">
        <LiteYouTubeEmbed
          id={id}
          title="What’s new in Material Design for the web "
        />
        <br />
      </div>
    </>
  );
}
