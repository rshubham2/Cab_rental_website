/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC and use Babel instead for environments where SWC binaries don't work
  swcMinify: false,
  compiler: {
    // Remove React properties
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Disable SWC in environments where it's not supported
    forceSwcTransforms: false,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'imgd.aeplcdn.com',
      'cdn1.tripoto.com',
      'i.cdn.newsbytesapp.com',
      'd3sftlgbtusmnv.cloudfront.net',
      '5.imimg.com',
      'randomuser.me'
    ],
  },
  // Webpack configuration for better compatibility
  webpack: (config, { dev, isServer }) => {
    // Fallback for environments where certain modules aren't available
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig