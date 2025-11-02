import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="nl">
                <Head>
                    {/* Preconnect voor betere performance */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    
                    {/* PWA Manifest */}
                    <link rel="manifest" href="/manifest.json" />
                    
                    {/* Favicon en Apple Touch Icons */}
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    
                    {/* Theme Color voor mobiele browsers */}
                    <meta name="theme-color" content="#14396f" />
                    <meta name="msapplication-TileColor" content="#14396f" />
                    
                    {/* DNS Prefetch voor externe resources */}
                    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}