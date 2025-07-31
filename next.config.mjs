import mdx from '@next/mdx';
import withBundleAnalyzer from '@next/bundle-analyzer';

// Bundle Analyzer (enable with ANALYZE env variable)
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// MDX support
const withMDX = mdx({
  extension: /\.(md|mdx)$/,  
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Page extensions
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // Experimental ESM externals for better tree-shaking
  experimental: {
    esmExternals: true,
  },

  webpack(config, { isServer }) {
    // Exclude heavy native modules from Edge bundles
    if (!isServer) {
      const externals = Array.isArray(config.externals)
        ? config.externals
        : [config.externals];
      config.externals = [
        ...externals,
        { sharp: 'commonjs sharp', canvas: 'commonjs canvas' },
      ];
    }
    return config;
  },
};

// Compose plugins: analyzer → MDX → Next.js config
export default withAnalyzer(withMDX(nextConfig));
