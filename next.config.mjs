import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
// const withMDX = require("@next/mdx")();

const nextConfig = {
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);

// module.exports = nextConfig;
