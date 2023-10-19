/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/advanced-features/output-file-tracing
  output: 'standalone',
  webpack: config => {
    // https://webpack.kr/configuration/watch/#watchoptions
    // https://github.com/vercel/next.js/issues/36774#issuecomment-1211818610
    config.watchOptions = {
      // default is 5007
      // https://github.com/webpack/watchpack/blob/a54bcdb95759558ca5a9fc2819c4d71b771c162f/lib/DirectoryWatcher.js#L79
      poll: 1000,
    }
    return config
  },
}

module.exports = nextConfig
