import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable experimental app directory if you're using it
  experimental: {
  },
  // Customize Webpack to log and debug path issues
  webpack(config, { isServer }) {
    // Log for debugging (optional, remove in production)
    console.log('Webpack config resolve.alias:', config.resolve.alias);

    // Ensure correct handling of files like favicon.ico
    config.resolve.alias = {
      ...config.resolve.alias,
      'favicon.ico': './src/app/favicon.ico', // Adjust the path if necessary
    };

    return config;
  },
};

export default nextConfig;
