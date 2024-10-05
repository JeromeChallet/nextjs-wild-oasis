/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fcowqwjsgiudjbxmgiil.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
  // images: { unoptimized: true },
};

export default nextConfig;
