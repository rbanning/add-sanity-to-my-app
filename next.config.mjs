/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      //allow images hosted on Sanity CDN
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },      
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc'
      },      
    ]
  }
};

export default nextConfig;
