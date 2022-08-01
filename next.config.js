module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true,
      },
      {
        source: '/1',
        destination: '/2',
        permanent: true,
      },
      {
        source: '/1',
        destination: '/2',
        permanent: true,
      },
      {
        source: '/2',
        destination: '/3',
        permanent: true,
      },
      {
        source: '/3',
        destination: '/4',
        permanent: true,
      },
      {
        source: '/4',
        destination: '/5',
        permanent: true,
      },
      {
        source: '/5',
        destination: '/6',
        permanent: true,
      },
      {
        source: '/6',
        destination: '/7',
        permanent: true,
      },
    ];
  },
};
