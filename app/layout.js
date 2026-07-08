import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Mangalam Foods — Freshness You Can Taste. Tradition You Can Trust.',
  description:
    'Authentic Fresh batters — IDLI, Dosa & Multi-Millet — naturally fermented, preservative-free, delivered fresh. A Blessing at Every Table.',
  keywords: [
    'Mangalam Foods', 'IDLI Batter', 'Dosa Batter', 'Millet Batter',
    'Fresh Ready-to-Cook Foods', 'Fresh Batter', 'Naturally Fermented', 'Sudbury MA',
  ],
  openGraph: {
    title: 'Mangalam Foods — A Blessing at Every Table',
    description: 'Authentic Fresh batters — naturally fermented & preservative-free.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23B84A2B'/%3E%3Ctext x='50' y='62' text-anchor='middle' font-size='42' font-family='serif' fill='%23FAF5EB' font-weight='bold'%3EM%3C/text%3E%3C/svg%3E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FoodEstablishment',
              name: 'Mangalam Foods',
              description:
                'Authentic naturally fermented fresh batters — IDLI, Dosa, Millet & more.',
              url: 'https://mangalamfoods.us',
              telephone: '+1-774-287-5154',
              email: 'Admin@mangalamfoods.us',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '621 Boston Post Rd',
                addressLocality: 'Sudbury',
                addressRegion: 'MA',
                postalCode: '01776',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
