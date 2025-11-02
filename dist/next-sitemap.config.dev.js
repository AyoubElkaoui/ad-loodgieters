"use strict";

/** @type {import('next-sitemap').IConfig} */
var siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl'; // Import data voor dynamische routes

var blogs = require('./api/blogs');

var services = require('./api/service');

var projects = require('./api/project');

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  exclude: ['/api/*', '/404', '/404/*', '/_next/*', '/admin/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/404/']
    }]
  },
  changefreq: 'weekly',
  priority: 0.7,
  // Voeg dynamische routes toe
  additionalPaths: function additionalPaths(config) {
    var result;
    return regeneratorRuntime.async(function additionalPaths$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = []; // Voeg alle blog posts toe

            blogs["default"].forEach(function (blog) {
              result.push({
                loc: "/blog-single/".concat(blog.slug),
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString()
              });
            }); // Voeg alle services toe

            services["default"].forEach(function (service) {
              result.push({
                loc: "/service/".concat(service.slug),
                changefreq: 'monthly',
                priority: 0.9,
                lastmod: new Date().toISOString()
              });
            }); // Voeg alle projecten toe

            projects["default"].forEach(function (project) {
              result.push({
                loc: "/project/".concat(project.slug),
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date().toISOString()
              });
            });
            return _context.abrupt("return", result);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  transform: function transform(config, path) {
    var priority, changefreq;
    return regeneratorRuntime.async(function transform$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
            } else if (path.includes('/project')) {
              priority = 0.7;
              changefreq = 'monthly';
            } else if (path.includes('/about') || path.includes('/testimonial')) {
              priority = 0.7;
              changefreq = 'monthly';
            }

            return _context2.abrupt("return", {
              loc: path,
              changefreq: changefreq,
              priority: priority,
              lastmod: new Date().toISOString()
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
//# sourceMappingURL=next-sitemap.config.dev.js.map
