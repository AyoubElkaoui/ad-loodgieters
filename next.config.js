/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false, // Voorkomt foute 404 errors bij pagina's zonder '/'
    images: {
        domains: ['vercel.app'], // Voeg andere externe domeinen toe als nodig
        formats: ['image/avif', 'image/webp'],
    },
    output: 'standalone', // Belangrijk voor Vercel!
    compress: true,
    poweredByHeader: false,
    i18n: {
        locales: ['nl'],
        defaultLocale: 'nl',
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ]
            }
        ];
    },
};

module.exports = nextConfig;
