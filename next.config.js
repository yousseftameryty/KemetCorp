/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gqxsrxadgsehcwjhsgor.supabase.co'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;


