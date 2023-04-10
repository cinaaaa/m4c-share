module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://citizens.plan4better.de',
        permanent: true,
      },
    ]
  },
};
