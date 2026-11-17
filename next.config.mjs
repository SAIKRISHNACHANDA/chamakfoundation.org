/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [

      {
        source: '/vision-mission',
        destination: '/about#vision-mission',
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
