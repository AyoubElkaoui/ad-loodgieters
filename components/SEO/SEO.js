import Head from 'next/head';

const SEO = ({
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    structuredData,
    noindex = false,
}) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adloodgietersbedrijf.nl';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullOgImage = ogImage || `${siteUrl}/images/contact.png`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="AD-Loodgietersbedrijf" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Structured Data */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )}
        </Head>
    );
};

export default SEO;
