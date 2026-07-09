import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Mangalam Foods — Freshness You Can Taste. Tradition You Can Trust.',
  description:
    'Mangalam Foods crafts fresh, naturally fermented batters, dips, sauces, and chutneys made from heritage rice, millets, lentils, and methi. Preservative-free, gluten-free, vegan. A Blessing at Every Table.',
  keywords: [
    'Mangalam Foods',
    'Fresh Batter',
    'IDLI Batter',
    'Dosa Batter',
    'Millets Batter',
    'Fresh Dips',
    'Fresh Sauces',
    'Fresh Chutneys',
    'Naturally Fermented',
    'Preservative-Free',
    'Gluten-Free',
    'Heritage Grains',
    'Fresh Ready-to-Cook Foods',
    'Sudbury MA',
    'Boston MA',
    'Fresh Food',
  ],
  openGraph: {
    title: 'Mangalam Foods — A Blessing at Every Table',
    description:
      'Fresh, naturally fermented batters, dips, sauces & chutneys. Made with heritage rice, millets, lentils & methi. Preservative-free, gluten-free, vegan.',
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
                'Fresh, naturally fermented batters, dips, sauces & chutneys made with heritage rice, millets, lentils & methi. Preservative-free, gluten-free, vegan. A Blessing at Every Table.',
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
