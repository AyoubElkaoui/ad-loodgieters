"use strict";

/** @type {import('next-sitemap').IConfig} */
var siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/api/*', '/404', '/404/*', '/_next/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/404/']
    }],
    additionalSitemaps: ["".concat(siteUrl, "/sitemap.xml")]
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: function transform(config, path) {
    var priority, changefreq;
    return regeneratorRuntime.async(function transform$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Prioriteiten voor verschillende pagina's
            priority = 0.7;
            changefreq = 'weekly';

            if (path === '/') {
              priority = 1.0;
              changefreq = 'daily';
            } else if (path.includes('/service') || path.includes('/contact')) {
              priority = 0.9;
              changefreq = 'weekly';
            } else if (path.includes('/blog')) {
              priority = 0.8;
              changefreq = 'weekly';
            } else if (path.includes('/about') || path.includes('/testimonial')) {
              priority = 0.7;
              changefreq = 'monthly';
            }

            return _context.abrupt("return", {
              loc: path,
              changefreq: changefreq,
              priority: priority,
              lastmod: new Date().toISOString()
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
//# sourceMappingURL=next-sitemap.config.dev.js.map
