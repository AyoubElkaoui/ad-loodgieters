/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 5000,
    exclude: ['/api/*', '/404', '/404/*', '/_next/*', '/admin/*'],
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
