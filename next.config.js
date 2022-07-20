/** @type {import('next').NextConfig} */
const rewrites = () => {
  return [
    {
      source: "/graphql",
      destination: "http://localhost:5000/graphql",
    },
  ];
};

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  rewrites,
}

module.exports = nextConfig
