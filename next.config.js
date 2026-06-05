const nextConfig = {
  async redirects() {
    return [
      {
        source: "/salvinispinati",
        destination: "/salvinispinati/index.html",
        permanent: false,
      },
      {
        source: "/portalepolizia",
        destination: "/portalepolizia/index.html",
        permanent: false,
      },
      {
        source: "/chat/chat",
        destination: "/chat/chat.html",
        permanent: false,
      },
      {
        source: "/finale.html",
        destination: "/risolvi/finale.html",
        permanent: false,
      },

      // link interni del sito salvinispinati
      {
        source: "/index.html",
        destination: "/salvinispinati/index.html",
        permanent: false,
      },
      {
        source: "/area_riservata.html",
        destination: "/salvinispinati/area_riservata.html",
        permanent: false,
      },
      {
        source: "/about.html",
        destination: "/salvinispinati/about.html",
        permanent: false,
      },
      {
        source: "/contatti.html",
        destination: "/salvinispinati/contatti.html",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
