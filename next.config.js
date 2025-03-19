/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false, // Voorkomt foute 404 errors bij pagina's zonder '/'
    images: {
        domains: ['vercel.app'], // Voeg andere externe domeinen toe als nodig
    },
    output: 'standalone', // Belangrijk voor Vercel!
};

module.exports = nextConfig;
