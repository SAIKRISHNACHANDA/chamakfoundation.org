/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/vision-mission',
        permanent: false,
      },
      {
        source: '/events',
        destination: '/gallery',
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
