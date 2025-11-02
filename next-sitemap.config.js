/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';

// Import data voor dynamische routes
const blogs = require('./api/blogs');
const services = require('./api/service');
const projects = require('./api/project');

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 5000,
    exclude: ['/api/*', '/404', '/404/*', '/_next/*', '/admin/*', '/server-sitemap.xml'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/404/'],
            },
        ],
    },
    changefreq: 'weekly',
    priority: 0.7,
    
    // Voeg dynamische routes toe
    additionalPaths: async (config) => {
        const result = [];

        // Voeg alle blog posts toe
        blogs.default.forEach((blog) => {
            result.push({
                loc: `/blog-single/${blog.slug}`,
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            });
        });

        // Voeg alle services toe
        services.default.forEach((service) => {
            result.push({
                loc: `/service/${service.slug}`,
                changefreq: 'monthly',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            });
        });

        // Voeg alle projecten toe
        projects.default.forEach((project) => {
            result.push({
                loc: `/project/${project.slug}`,
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            });
        });

        return result;
    },
    
    transform: async (config, path) => {
        // Prioriteiten voor verschillende pagina's
        let priority = 0.7;
        let changefreq = 'weekly';

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

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: new Date().toISOString(),
        };
    },
};
