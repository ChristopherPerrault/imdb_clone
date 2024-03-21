/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org", // Corrected hostname
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
