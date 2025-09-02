/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "xkkoggplctunhruqhxlp.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aihbycwkevcwpotvakpq.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
