/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: false,
      ssr: true,
    },
  },
  pageExtensions: ["page.tsx"],
  reactStrictMode: true,
}

module.exports = nextConfig
