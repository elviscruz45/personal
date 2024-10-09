import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codewithelvis.dev/"),

  title: {
    default: "Elvis | Blogs",
    template: "%s - Blogs",
  },
  description: "Blogs de Tecnología",
  openGraph: {
    title: "Blog de tecnología",
    description:
      "Pasión por revolucionar la tecnología a través del aprendizaje automático y la inteligencia artificial generativa.",

    url: "https://www.codewithelvis.dev/",
    siteName: "Blog de tecnología",
    images: [
      {
        url: "https://www.codewithelvis.dev/opengraph-image.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.codewithelvis.dev/opengraph-image.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <body
        className={`${inter.className}
       bg-gray-50 text-gray-950 relative
       pt-28 sm:pt-36
       dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
       `}
      >
        {/* <div
          className="bg-[#FF00FF00] dark:bg-[#FFFFA07A] absolute top-[-6rem] -z-10 right-[11rem]
         h-[31.25rem] w-[31.25rem] rounded-full blur-[40rem] sm:w-[68.75rem]"
        ></div> */}
        {/* <div
          className="bg-[#FF00FF00] dark:bg-[#FFFFA07A] absolute top-[-1rem] -z-10 left-[-35rem]
         h-[31.25rem] w-[50rem] rounded-full blur-[40rem] sm:w-[68.75rem]
          md:left-[-33rem] lg-left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            {children}
            <br />
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
