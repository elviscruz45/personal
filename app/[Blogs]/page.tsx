import Welcome from "@/markdown/welcome.mdx";
import Transformers_para_LLM from "@/markdown/Transformers_para_LLM.mdx";
import Preguntas_de_JavaScript from "@/markdown/100_Preguntas_de_JavaScript.mdx";
import React, { ReactNode } from "react";
import HeaderLarge from "@/components/headerLarge";
import Image from "next/image";
import { Youtube } from "@/components/blogs/youtube";

interface CustomH1Props {
  children: ReactNode;
}
interface CustomElementProps {
  children: ReactNode;
}

function CustomH1({ children }: CustomH1Props) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}
function CustomH2({ children }: CustomElementProps) {
  return <h2 style={{ color: "green", fontSize: "80px" }}>{children}</h2>;
}

function CustomH3({ children }: CustomElementProps) {
  return <h3 style={{ color: "red", fontSize: "60px" }}>{children}</h3>;
}

function CustomP({ children }: CustomElementProps) {
  return <p style={{ color: "black", fontSize: "20px" }}>{children}</p>;
}
const overrideComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  p: CustomP,
};

const Page: React.FC = ({ params }: any) => {
  const sectionName = params.Blogs;

  const DynamicComponent = () => {
    switch (sectionName) {
      case "Transformers_para_LLM":
        return <Transformers_para_LLM />;

      case "100_Preguntas_de_JavaScript":
        return <Preguntas_de_JavaScript />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:px-60 md:px-40 px-10">
      <HeaderLarge />
      {DynamicComponent()}
    </div>
  );
};

export default Page;
