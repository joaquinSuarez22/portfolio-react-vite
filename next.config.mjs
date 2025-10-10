/** @type {import('next').NextConfig} */
const nextConfig = {
  
   output: 'export',              // <- genera /out
  images: { unoptimized: true }, // <- evita optimizador de imágenes del server
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

