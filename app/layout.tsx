import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig } from "@/config/seo";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "SyncMode" }],
  creator: "SyncMode",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Consent Mode v2 - doit être avant GA4 */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Configuration par défaut du Consent Mode v2
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500,
            });
            
            // Configuration pour la France/EEE
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'region': ['FR', 'EEA'],
            });
          `}
        </Script>

        {/* Google Analytics 4 - Configure NEXT_PUBLIC_GA_ID dans .env.local */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Schema.org pour SEO */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": siteConfig.name,
            "description": siteConfig.description,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "24",
            },
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <nav className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/90 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                  Sync Mode
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/#demo" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Démonstration
                </a>
                <a href="/tarifs" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Tarifs
                </a>
                <a href="/securite-rgpd" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sécurité
                </a>
                <a
                  href="/#demo"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Démo gratuite
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        <main>{children}</main>
        
        <footer className="bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <a href="/" className="text-lg font-semibold mb-4 hover:text-gray-300 transition-colors inline-block">
                  Sync Mode
                </a>
                <p className="text-sm text-gray-400">
                  Hub de synchronisation B2B pour la mode française
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-4">Intégrations</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/shopify-faire" className="hover:text-white">Shopify ↔ Faire</a></li>
                  <li><a href="/shopify-ankorstore" className="hover:text-white">Shopify ↔ Ankorstore</a></li>
                  <li><a href="/shopify-pfs" className="hover:text-white">Shopify ↔ PFS</a></li>
                  <li><a href="/shopify-microstore" className="hover:text-white">Shopify ↔ MicroStore</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-4">Ressources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/tarifs" className="hover:text-white">Tarifs</a></li>
                  <li><a href="/securite-rgpd" className="hover:text-white">Sécurité & RGPD</a></li>
                  <li><a href="/#faq" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/legal" className="hover:text-white">Mentions légales</a></li>
                  <li><a href="/privacy" className="hover:text-white">Politique de confidentialité</a></li>
                  <li><a href="/terms" className="hover:text-white">CGV</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              <p>© 2024 SyncMode. Tous droits réservés. Solution indépendante, non affiliée aux marques citées.</p>
            </div>
          </div>
        </footer>
        
        <CookieBanner />
      </body>
    </html>
  );
}