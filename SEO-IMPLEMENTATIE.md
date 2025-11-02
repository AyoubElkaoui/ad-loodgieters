# SEO Implementatie - AD-Loodgietersbedrijf

## ✅ Uitgevoerde SEO-optimalisaties

### 1. Sitemap Configuratie
- ✅ **Sitemap.xml gegenereerd** - Automatisch via `next-sitemap`
- ✅ **Sitemap Index** - Voor schaalbaarheid bij groei
- ✅ **Prioriteiten ingesteld**:
  - Homepage: Priority 1.0, daily updates
  - Service/Contact: Priority 0.9, weekly updates
  - Blog: Priority 0.8, weekly updates
  - Overige: Priority 0.7, monthly updates
- ✅ **Robots.txt** - Correct geconfigureerd met sitemap referentie

**Toegang**: 
- Sitemap: `https://www.adloodgietersbedrijf.nl/sitemap.xml`
- Robots: `https://www.adloodgietersbedrijf.nl/robots.txt`

### 2. Meta Tags per Pagina

#### Alle pagina's bevatten:
- ✅ Unieke `<title>` tags (50-60 karakters)
- ✅ Meta descriptions (150-160 karakters)
- ✅ Canonical URLs
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Robots meta tags

#### Pagina-specifieke optimalisaties:

**Homepage (/):**
- Title: "AD-Loodgietersbedrijf – 24/7 loodgieter in Utrecht & omgeving"
- LocalBusiness Schema
- OpeningHoursSpecification
- Geo-coördinaten

**Over ons (/about):**
- AboutPage Schema
- Organization Schema

**Diensten (/service):**
- Service Schema
- FAQPage Schema
- ServiceType specificaties

**Contact (/contact):**
- ContactPage Schema
- ContactPoint met telefoonnummer

**Blog (/blog):**
- Blog Schema
- Publisher informatie

### 3. Structured Data (Schema.org)

Geïmplementeerde schemas:
- ✅ LocalBusiness - Homepage
- ✅ OpeningHoursSpecification - 24/7 beschikbaarheid
- ✅ Service - Diensten pagina
- ✅ FAQPage - Veelgestelde vragen
- ✅ ContactPage - Contact informatie
- ✅ AboutPage - Over ons
- ✅ Blog - Blog overzicht

### 4. Technische SEO

#### Next.js Configuratie (`next.config.js`):
- ✅ Image optimization (AVIF, WebP)
- ✅ Compression enabled
- ✅ Security headers:
  - X-DNS-Prefetch-Control
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: origin-when-cross-origin
- ✅ i18n configuratie (nl-NL)
- ✅ Geen trailing slashes

#### Document (_document.js):
- ✅ Lang="nl" attribuut
- ✅ Preconnect voor Google Fonts
- ✅ DNS Prefetch
- ✅ Manifest link voor PWA
- ✅ Favicons en Apple Touch Icons
- ✅ Theme color voor mobiel

#### App (_app.js):
- ✅ Default meta tags
- ✅ Geo tags voor lokale SEO
- ✅ Keywords meta tag
- ✅ Open Graph defaults
- ✅ Twitter Card defaults
- ✅ Vercel Analytics

### 5. PWA Manifest
- ✅ `manifest.json` gecreëerd
- ✅ App naam en beschrijving
- ✅ Theme colors
- ✅ Icons configuratie
- ✅ Display mode: standalone

### 6. Lokale SEO Optimalisaties
- ✅ Geo meta tags (Utrecht coördinaten)
- ✅ Lokale keywords geïntegreerd
- ✅ Service area gespecificeerd
- ✅ Adres informatie in schema
- ✅ Telefoonnummer in schema

### 7. Social Media Optimalisatie
- ✅ Open Graph protocol
- ✅ Twitter Cards
- ✅ Social media links in schema
- ✅ Geoptimaliseerde afbeeldingen (1200x630)

## 📊 SEO Component

Een herbruikbare SEO component is aangemaakt:
```javascript
import SEO from '../components/SEO/SEO';

<SEO 
  title="Pagina Titel"
  description="Pagina beschrijving"
  canonical="/pagina-url"
  structuredData={schemaData}
/>
```

## 🚀 Na Deployment Checklist

### Google Search Console
1. [ ] Website verifiëren
2. [ ] Sitemap indienen: `https://www.adloodgietersbedrijf.nl/sitemap.xml`
3. [ ] URL inspectie uitvoeren
4. [ ] Core Web Vitals monitoren
5. [ ] Mobile usability checken

### Google Business Profile
1. [ ] Bedrijfsprofiel claimen/aanmaken
2. [ ] NAP (Name, Address, Phone) consistent houden
3. [ ] Foto's uploaden
4. [ ] Openingstijden bijwerken (24/7)
5. [ ] Reviews vragen aan klanten
6. [ ] Posts plaatsen

### Verificatie Tools
```bash
# Sitemap testen
curl https://www.adloodgietersbedrijf.nl/sitemap.xml

# Robots.txt testen
curl https://www.adloodgietersbedrijf.nl/robots.txt

# Meta tags testen
https://www.opengraph.xyz/
https://cards-dev.twitter.com/validator

# Structured Data testen
https://search.google.com/test/rich-results
https://validator.schema.org/

# Page Speed testen
https://pagespeed.web.dev/
```

## 📈 Aanbevolen Vervolgstappen

### Content Optimalisatie
1. **Keywords Research**
   - "loodgieter utrecht"
   - "spoedloodgieter utrecht"
   - "lekkage utrecht"
   - "cv storing utrecht"
   - "badkamer renovatie utrecht"

2. **Content Aanvullingen**
   - Blog artikelen schrijven (minimaal 800 woorden)
   - FAQ pagina uitbreiden
   - Service pagina's verrijken met meer content
   - Case studies/projecten toevoegen
   - Video content (YouTube SEO)

3. **Afbeelding Optimalisatie**
   - Alt text toevoegen aan alle afbeeldingen
   - Bestandsnamen optimaliseren (gebruik keywords)
   - Comprimeren en converteren naar WebP
   - Lazy loading implementeren

### Link Building
1. **Interne Links**
   - Breadcrumbs toevoegen
   - Related posts/services
   - Footer links optimaliseren

2. **Externe Links**
   - Lokale business directories
   - Google Business Profile
   - Yelp, TrustPilot
   - Brancheverenigingen
   - Lokale nieuwssites

### Technische Verbeteringen
1. **Performance**
   - Core Web Vitals optimaliseren
   - Lazy loading voor afbeeldingen
   - Code splitting
   - CDN gebruik (Vercel doet dit automatisch)

2. **Monitoring**
   - Google Analytics 4 setup
   - Conversion tracking
   - Heatmaps (Hotjar/Microsoft Clarity)
   - Error tracking (Sentry)

### Lokale SEO
1. **Citations**
   - Consistent NAP op alle platforms
   - Thuiswinkel Waarborg
   - Kieskeurig.nl
   - Werkspot
   - Trustpilot

2. **Reviews**
   - Google Reviews systeem opzetten
   - Review schema implementeren (AggregateRating)
   - Review widget op website
   - Automatische review requests

## 📱 Mobile SEO
- ✅ Viewport meta tag
- ✅ Touch-friendly buttons
- ✅ Responsive design
- [ ] Mobile page speed optimalisatie
- [ ] AMP pages (optioneel)

## 🔍 Monitoring Tools

### Gratis Tools
- Google Search Console
- Google Analytics 4
- Google Business Profile Insights
- Bing Webmaster Tools
- Microsoft Clarity (heatmaps)

### Betaalde Tools (optioneel)
- Ahrefs / SEMrush (keyword research)
- Screaming Frog (technical SEO)
- Surfer SEO (content optimization)

## 🎯 KPI's om te Monitoren

1. **Verkeer**
   - Organisch zoekverkeer
   - Direct verkeer
   - Referral verkeer

2. **Rankings**
   - Positie voor target keywords
   - Featured snippets
   - Local pack positie

3. **Engagement**
   - Bounce rate
   - Time on site
   - Pages per session
   - Conversion rate

4. **Technical**
   - Core Web Vitals scores
   - Crawl errors
   - Index coverage
   - Mobile usability

## 📞 Belangrijke SEO Informatie

**Primaire Keywords:**
- loodgieter utrecht
- spoedloodgieter utrecht
- 24/7 loodgieter
- lekkage reparatie
- cv monteur utrecht

**Service Area:**
- Utrecht (stad)
- De Bilt
- Zeist
- Nieuwegein
- Houten
- IJsselstein

**Contact Informatie:**
- Telefoon: +31640961848
- Website: https://www.adloodgietersbedrijf.nl
- Coördinaten: 52.0907, 5.1214

## ✨ Samenvatting

Alle essentiële SEO-elementen zijn geïmplementeerd:
- ✅ Sitemap en robots.txt
- ✅ Meta tags op alle pagina's
- ✅ Structured data (Schema.org)
- ✅ Open Graph en Twitter Cards
- ✅ Lokale SEO optimalisaties
- ✅ Technische SEO best practices
- ✅ PWA manifest
- ✅ Security headers

**Volgende stap:** Deploy de website en voer de "Na Deployment Checklist" uit!
