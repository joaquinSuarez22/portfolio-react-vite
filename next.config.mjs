/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // genera /out
  images: {
    unoptimized: true, // evita optimizador del server
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    allowedDevOrigins: [
      "https://ytirve-ip-186-136-98-46.tunnelmole.net",
      "http://ytirve-ip-186-136-98-46.tunnelmole.net",
      "https://3rwxjy-ip-186-136-98-46.tunnelmole.net/"
    ],
  },
}

export default nextConfig
