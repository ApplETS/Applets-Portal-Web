const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/tasks',
        permanent: true
      },
      {
        source: '/reset_password',
        destination: '/login/resetPassword',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(redirects);
