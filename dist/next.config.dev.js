"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // Voorkomt foute 404 errors bij pagina's zonder '/'
  images: {
    domains: ['vercel.app'],
    // Voeg andere externe domeinen toe als nodig
    formats: ['image/avif', 'image/webp']
  },
  output: 'standalone',
  // Belangrijk voor Vercel!
  compress: true,
  poweredByHeader: false,
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl'
  },
  headers: function headers() {
    return regeneratorRuntime.async(function headers$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", [{
              source: '/:path*',
              headers: [{
                key: 'X-DNS-Prefetch-Control',
                value: 'on'
              }, {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN'
              }, {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              }, {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin'
              }]
            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
module.exports = nextConfig;
//# sourceMappingURL=next.config.dev.js.map
