/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/api/uploads/:path*',
      },
    ];
  },
  async redirects() {
    return [

      {
        source: '/our-founder',
        destination: '/founder',
        permanent: false,
      },
      {
        source: '/about/founder',
        destination: '/founder',
        permanent: false,
      },
      {
        source: '/events',
        destination: '/gallery',
        permanent: false,
      },
      {
        source: '/impact',
        destination: '/testimonials',
        permanent: false,
      },
      {
        source: '/about/sustainable-development-goals',
        destination: '/sustainable-development-goals',
        permanent: false,
      },
      {
        source: '/sdg',
        destination: '/sustainable-development-goals',
        permanent: false,
      },
      {
        source: '/sdgs',
        destination: '/sustainable-development-goals',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/admin/gallery',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
