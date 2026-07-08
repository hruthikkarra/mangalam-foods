# Mangalam Foods 🌾

> **A Blessing at Every Table** — A premium, responsive marketing website for **Mangalam Foods**, a US-based fresh ready-to-cook batter brand (IDLI, Dosa, Multi-Millet & more).

Built in the spirit of Apple × iD Fresh Foods: clean white backgrounds, premium card layouts, large food photography, traditional fermentation storytelling, and a fully transparent "live kitchen" view of the factory.

---

## ✨ Highlights

- 🎨 **Premium brand identity** — terracotta, forest green, gold & cream palette derived from the brand mark
- 🎥 **TransparenSee Live Kitchen** — 8 live camera zones (Rice Feeding, Urad Dal, Fenugreek, Water Mixing, Grinding, Packing, Chiller Entry/Exit) with looping Ken-Burns "live feed" effect, real ticking timestamp & corner brackets
- 📜 **A Peek Into Our Kitchen** — Immersive 7-stage process page (The Not-So-Secret Ingredients → Soaking In It → The Daily Grind → The Perfect Mix → Rise and Shine → Signed, Sealed & Soon to be Delivered → Now Ready to be Served with Love & Chutney), each on its own gradient-tinted section with up/down arrow navigation
- 🚛 **US-themed delivery story** with a real US-truck final stage
- 🛡️ **American certifications** — USDA Organic, FDA Registered, HACCP Certified, Non-GMO Verified, SQF Level 2
- 🛒 **Product catalogue** — 4 SKUs (IDLI, Dosa, Multi-Millet, Family Pack) with hover lift cards & "Fresh" badges
- 💬 **Working contact form** backed by MongoDB (inquiries persisted via API)
- 🗺️ **Embedded Google Map** with Sudbury, MA HQ
- ⭐ Sections: Hero · About · Why Choose Us (8 reasons) · Products · Peek Into Our Kitchen · TransparenSee · Quality & Certs · Benefits · Testimonials · FAQ · Contact · Footer
- 🌒 SEO metadata, JSON-LD FoodEstablishment schema, mobile-first responsive, Framer-Motion animations (fade-up, scroll reveal, parallax, hover lift, Ken-Burns loops)

---

## 🏗️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | JavaScript (JSX) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) primitives |
| Icons | [lucide-react](https://lucide.dev) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Toasts | [sonner](https://sonner.emilkowal.ski) |
| Database | [MongoDB](https://www.mongodb.com) (native driver) |
| Fonts | Playfair Display (display) + Inter (sans) — via Google Fonts |
| Package manager | [Yarn](https://yarnpkg.com) |

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js** ≥ 18
- **Yarn** (preferred — `npm install -g yarn`)
- A running **MongoDB** instance (local, Docker, or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 2. Clone & install

```bash
git clone https://github.com/<your-org>/mangalam-foods.git
cd mangalam-foods
yarn install
```

### 3. Environment variables

Copy the example and fill in your own values:

```bash
cp .env.example .env
```

Edit `.env`:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=mangalam_foods
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CORS_ORIGINS=*
```

### 4. Run dev server

```bash
yarn dev
```

Open <http://localhost:3000>. The page hot-reloads on edit.

### 5. Production build

```bash
yarn build
yarn start
```

---

## 📡 API Routes

All endpoints are prefixed with `/api`.

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Service heartbeat |
| `POST` | `/api/inquiries` | Submit a contact-form inquiry (`name`, `email`, `phone?`, `product?`, `message`) |
| `GET` | `/api/inquiries` | List the last 50 inquiries (no auth — protect before exposing publicly) |
| `POST` | `/api/contact` | Alias of `/api/inquiries` |
| `POST` | `/api/newsletter` | Subscribe an email to the newsletter collection |

### Submit a contact inquiry

```bash
curl -X POST http://localhost:3000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "+1-555-0100",
    "product": "IDLI Batter",
    "message": "Loved the website! Where can I buy?"
  }'
```

Response:

```json
{
  "success": true,
  "id": "5cf2…",
  "message": "Thank you! We will get back to you shortly."
}
```

Inquiries are stored in the `inquiries` collection with this shape:

```json
{
  "id": "uuid-v4",
  "name": "string",
  "email": "string",
  "phone": "string?",
  "product": "string?",
  "message": "string",
  "status": "new",
  "createdAt": "ISO-8601 timestamp"
}
```

---

## 📁 Project Structure

```
mangalam-foods/
├── app/
│   ├── api/[[...path]]/route.js   # Catch-all API route (health, inquiries, newsletter)
│   ├── globals.css                # Tailwind layers + brand CSS variables + custom utilities
│   ├── layout.js                  # Root layout, fonts, SEO metadata, JSON-LD schema, Toaster
│   └── page.js                    # Full landing page (Navbar, Hero, Sections, Footer)
├── components/ui/                 # shadcn/ui primitives (Button, Card, Input, Accordion, …)
├── hooks/                         # React custom hooks (toast, …)
├── lib/                           # Shared utilities (cn, …)
├── public/                        # Static assets (favicons, etc.)
├── memory/                        # Internal docs/PRD
├── tests/                         # Test placeholder folder
├── .env.example                   # Sample env file — copy to .env
├── components.json                # shadcn config
├── jsconfig.json                  # Path aliases (@/components, @/lib …)
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js             # Brand colour tokens + animations
└── README.md
```

---

## 🎨 Design System

### Brand palette (in `tailwind.config.js → theme.extend.colors.brand`)

| Token | Hex | Usage |
|---|---|---|
| `brand.terracotta` | `#B84A2B` | Primary CTAs, brand accents |
| `brand.terracottaDark` | `#8E3520` | Brand wordmark, hover states |
| `brand.forest` | `#2C5F3F` | Secondary accents, sub-headings |
| `brand.gold` | `#C9A961` | Highlight italic spans, badges |
| `brand.cream` | `#FAF5EB` | Soft surface backgrounds |
| `brand.warm` | `#FBF7F0` | Main page background |

### Typography

- **Display** — Playfair Display (used for `.font-display` & all H1/H2/H3)
- **Body** — Inter

### Section anchors

```
#top  #about  #products  #peek (process)  #stage-1 … #stage-7
#transparensee  #benefits  #faq  #contact
```

---

## 🔌 Customising

### Swap the brand logo

Replace the URL in `app/page.js`:

```js
const LOGO_URL = 'https://your-cdn.com/mangalam-logo.png';
```

(Logo lives in the `<LogoMark />` component and is reused across Navbar, Mobile-Menu, Footer.)

### Replace stock images with real factory photos

Two image collections to update:

- `IMG` object at the top of `page.js` — food / kitchen / grain photography
- `FACTORY_IMG` inside the `TransparenSee` section — factory / industrial / van photography

### Edit certifications

In `<Quality />` component, edit the `certs` array.

### Edit the 7 process stages

In `<PeekIntoKitchen />` component, edit the `stages` array (each entry has `id`, `title`, `desc`, `img`, `tag`, `accent`, `bg`).

---

## 🌐 Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project on <https://vercel.com>.
3. Set the same env vars from `.env.example` in the Vercel dashboard.
4. Deploy — Vercel auto-detects Next.js.

### Self-hosted

```bash
yarn build
NODE_ENV=production yarn start -p 3000
```

Place behind a reverse proxy (Nginx / Caddy / Cloudflare) with HTTPS.

---

## 🧪 Roadmap / TODO

- [ ] Wire each TransparenSee tile to a real YouTube live stream
- [ ] Real factory photos & a CMO walk-through video for the featured tour card
- [ ] Stripe-powered product checkout
- [ ] Newsletter capture in footer (API already exists)
- [ ] Email notifications when an inquiry comes in (SendGrid / Resend)
- [ ] `/admin` dashboard to view & manage inquiries
- [ ] Dark-mode toggle
- [ ] Localisation (en-US / hi-IN / ta-IN)

---

## 📜 Brand & Legal

> Mangalam Foods is a registered trademark.
> Imitation of label design is prohibited.

- **CEO** Monali Kotak
- **HQ** 621 Boston Post Rd, Sudbury, MA 01776, USA
- **Phone** +1 774-287-5154
- **Email** Admin@mangalamfoods.us
- **Web** https://mangalamfoods.us
- Minority & Women-Owned Small Business 🇺🇸

---

## 📝 License

Proprietary — © Mangalam Foods. All rights reserved.

Code is shared for the internal Mangalam Foods team. For licensing or partnerships, contact `Admin@mangalamfoods.us`.
