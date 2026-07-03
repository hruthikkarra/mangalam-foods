'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Leaf, Sprout, Wheat, ShieldCheck, Heart, Clock, FlaskConical, Truck,
  Award, BadgeCheck, Star, MapPin, Phone, Mail, Menu, X, ChevronDown,
  Send, Sparkles, Droplets, ChefHat, Package, CheckCircle2, Quote, ArrowRight,
  Eye, Radio,
} from 'lucide-react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_authentic-grains/artifacts/pnf8ivar_mangalam_logo-removebg-preview.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

const IMG = {
  heroDosa: 'https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxkb3NhfGVufDB8fHx8MTc4Mjc1MzY5M3ww&ixlib=rb-4.1.0&q=85',
  dosa2: 'https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxkb3NhfGVufDB8fHx8MTc4Mjc1MzY5M3ww&ixlib=rb-4.1.0&q=85',
  dosaPour: 'https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  idli: 'https://images.unsplash.com/photo-1730191843435-073792ba22bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxpZGxpfGVufDB8fHx8MTc4Mjc1MzY5NHww&ixlib=rb-4.1.0&q=85',
  idli2: 'https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxpZGxpfGVufDB8fHx8MTc4Mjc1MzY5NHww&ixlib=rb-4.1.0&q=85',
  idli3: 'https://images.pexels.com/photos/35514447/pexels-photo-35514447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  spread: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  lentils: 'https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxsZW50aWxzfGVufDB8fHx8MTc4Mjc1MzcwMXww&ixlib=rb-4.1.0&q=85',
  lentils2: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxsZW50aWxzfGVufDB8fHx8MTc4Mjc1MzcwMXww&ixlib=rb-4.1.0&q=85',
  ragi: 'https://images.unsplash.com/photo-1768729339998-909158957162?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxyYWdpJTIwbWlsbGV0fGVufDB8fHx8MTc4Mjc1MzcwMHww&ixlib=rb-4.1.0&q=85',
  cooking: 'https://images.pexels.com/photos/37330104/pexels-photo-37330104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ------------------------------- LOGO MARK -------------------------------- */
const LogoMark = ({ className = 'h-16 w-16' }) => (
  <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#B84A2B] to-[#8E3520] rounded-full text-white premium-shadow-lg ${className}`}>
    <span className="font-display font-bold text-3xl">M</span>
  </div>
);

/* --------------------------------- NAVBAR --------------------------------- */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#peek', label: 'Process' },
    { href: '#transparensee', label: 'Live Kitchen' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`sticky top-0 inset-x-0 z-50 bg-white border-b border-[#B84A2B]/10 py-2 shadow-sm transition-all duration-500`}
    >
      <div className="container flex h-24 items-center justify-between">
        <a href="#" className="flex items-center gap-3 group relative z-10">
          <LogoMark className="h-20 w-20 md:h-24 md:w-24" />
          <div className="leading-tight">
            <div className="font-display text-xl md:text-2xl font-bold text-[#8E3520] tracking-wide">Mangalam Foods</div>
            <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-[#2C5F3F] font-medium uppercase">A Blessing at Every Table</div>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-[#B84A2B] hover:bg-[#FAF5EB] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-3">
            <Button className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-6 shadow-md">
              Order Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full bg-white/80 border border-[#B84A2B]/20">
          {open ? <X className="h-5 w-5 text-[#B84A2B]" /> : <Menu className="h-5 w-5 text-[#B84A2B]" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#B84A2B]/10">
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-foreground/80 hover:bg-[#FAF5EB] hover:text-[#B84A2B] font-medium">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

/* ---------------------------------- HERO ---------------------------------- */
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 150]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain-bg pt-28 md:pt-36 pb-16">
      <motion.div style={{ y: y2 }} className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#C9A961]/20 to-[#B84A2B]/10 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#2C5F3F]/15 to-[#C9A961]/15 blur-3xl" />
      {/* floating grain illustrations */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-40 left-10 text-[#C9A961]/30 hidden md:block"><Wheat className="h-20 w-20" /></motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 right-16 text-[#2C5F3F]/25 hidden md:block"><Leaf className="h-16 w-16" /></motion.div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ opacity }} variants={stagger} initial="hidden" animate="visible" className="relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-[#B84A2B]/15 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#C9A961]" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8E3520]">Farm to Kitchen • Naturally Fermented</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#1A1410] text-balance">
            Freshness <span className="italic text-[#B84A2B]">You Can Taste.</span><br />
            Tradition <span className="italic text-[#2C5F3F]">You Can Trust.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
            Crafting authentic South Indian batters from carefully selected grains using traditional
            fermentation techniques. <span className="font-semibold text-[#2C5F3F]">No preservatives. Ever.</span>
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#products">
              <Button size="lg" className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-8 py-6 text-base premium-shadow">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="rounded-full border-2 border-[#2C5F3F] text-[#2C5F3F] hover:bg-[#2C5F3F] hover:text-white px-8 py-6 text-base">
                Contact Us
              </Button>
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            {[
              { icon: BadgeCheck, label: 'USDA Organic' },
              { icon: Leaf, label: '100% Natural' },
              { icon: Heart, label: 'Family Owned' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-foreground/70">
                <b.icon className="h-4 w-4 text-[#2C5F3F]" /> <span className="font-medium">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden premium-shadow-lg ring-1 ring-white">
              <img src={IMG.heroDosa} alt="Fresh dosa with chutneys" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-8 w-44 h-44 rounded-3xl overflow-hidden premium-shadow ring-4 ring-white">
              <img src={IMG.idli} alt="Steamed idlis" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-36 h-36 rounded-3xl overflow-hidden premium-shadow ring-4 ring-white">
              <img src={IMG.ragi} alt="Ragi millet" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div animate={{ rotate: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 -right-10 bg-white rounded-2xl px-4 py-3 premium-shadow flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[#FAF5EB] grid place-items-center"><Droplets className="h-5 w-5 text-[#B84A2B]" /></div>
              <div>
                <div className="text-xs text-foreground/60">Freshly Made</div>
                <div className="text-sm font-bold text-[#8E3520]">Every Day</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* --------------------------------- ABOUT ---------------------------------- */
const About = () => (
  <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="relative">
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden premium-shadow-lg">
          <img src={IMG.cooking} alt="Traditional Indian cooking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/40 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-3xl premium-shadow max-w-[260px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-2xl bg-[#FAF5EB] grid place-items-center"><Award className="h-6 w-6 text-[#B84A2B]" /></div>
            <div>
              <div className="font-display text-2xl font-bold text-[#8E3520]">100%</div>
              <div className="text-xs text-foreground/60 uppercase tracking-wider">Natural Ingredients</div>
            </div>
          </div>
          <p className="text-xs text-foreground/70">Minority & Women-Owned Small Business</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
        <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Our Story</span>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6 font-normal">
          Mangalam — a word that means auspiciousness, blessing, and good fortune — is the name Monali Kotak has chosen for the next chapter of her food journey.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Built on the foundation she has laid at Zayith Bazaar, a women-owned and minority-owned restaurant in Boston, Mangalam Foods carries forward a simple belief: <strong className="text-[#8E3520]">food made with intention has the power to nourish people, honor culture, and give back to the community.</strong>
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Every product under the Mangalam Foods name is created with the same care Monali brings to her kitchen at Zayith Bazaar — clean ingredients, traditional technique, and a deep respect for where food comes from. Alongside her husband, her partner in both life and purpose, she is building a kitchen rooted in authenticity, a business grounded in resilience, and a community centered on inclusivity and care.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------ WHY CHOOSE US ----------------------------- */
const WhyChooseUs = () => {
  const items = [
    { icon: Sprout, title: 'Naturally Fermented', desc: 'Traditional 12-hour fermentation process' },
    { icon: Clock, title: 'Fresh Everyday', desc: 'Made daily, delivered to your doorstep' },
    { icon: ShieldCheck, title: 'No Preservatives', desc: 'Zero artificial additives or chemicals' },
    { icon: Wheat, title: 'Premium Ingredients', desc: 'Heirloom grains & finest urad dal' },
    { icon: ChefHat, title: 'Traditional Recipe', desc: 'Time-honoured family methods' },
    { icon: Droplets, title: 'Hygienically Prepared', desc: 'World-class FDA & HACCP certified facility' },
    { icon: Heart, title: 'Rich in Protein', desc: 'Gut-friendly & nutrient-dense' },
    { icon: Star, title: 'Authentic Taste', desc: 'The flavour of grandmother’s kitchen' },
  ];
  return (
    <section className="py-24 md:py-32 grain-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            The Mangalam <span className="italic text-[#2C5F3F]">Difference</span>
          </h2>
          <p className="text-foreground/70 text-lg">Eight reasons families choose us for their daily breakfast.</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <motion.div key={it.title} variants={fadeUp} whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-6 border border-[#B84A2B]/10 hover:premium-shadow-lg transition-all duration-500 cursor-default">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#FAF5EB] to-[#F5EEDC] grid place-items-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <it.icon className="h-7 w-7 text-[#B84A2B]" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#8E3520] mb-2">{it.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------- PRODUCTS -------------------------------- */
const Products = () => {
  const products = [
    { name: 'Idly Batter', desc: 'Soft, fluffy idlis from premium urad dal & parboiled rice. Naturally fermented for 12 hours.', img: IMG.idli, badge: 'Bestseller' },
    { name: 'Dosa Batter', desc: 'Crispy, golden dosas every time. Perfectly balanced batter ready to pour.', img: IMG.heroDosa, badge: 'Fresh' },
    { name: 'Multi Millet Batter', desc: 'Power-packed with foxtail, pearl & little millets. Gut-friendly nutrition.', img: IMG.ragi, badge: 'Healthy' },
    { name: 'Ragi Dosa Batter', desc: 'Finger millet goodness. High in calcium, iron and dietary fibre.', img: IMG.lentils2, badge: 'Gluten-Free' },
    { name: 'Instant Batter', desc: 'No fermentation wait. Open, pour, cook — fresh dosas in minutes.', img: IMG.dosa2, badge: 'Quick' },
    { name: 'Family Pack', desc: 'Larger pack for the whole family. Same freshness, better value.', img: IMG.idli3, badge: 'Value' },
  ];
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Crafted with <span className="italic text-[#2C5F3F]">Care</span>
          </h2>
          <p className="text-foreground/70 text-lg">From our kitchen to yours — always fresh, always pure.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p) => (
            <motion.div key={p.name} variants={fadeUp} whileHover={{ y: -10 }}
              className="group bg-[#FBF7F0] rounded-[2rem] overflow-hidden border border-[#B84A2B]/10 hover:premium-shadow-lg transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-[#2C5F3F] text-white border-0 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                    <Leaf className="h-3 w-3 mr-1" /> Fresh
                  </Badge>
                  <Badge className="bg-[#C9A961] text-[#1A1410] border-0 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                    {p.badge}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-[#1A1410] mb-2">{p.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5 min-h-[3.5rem]">{p.desc}</p>
                <a href="#contact">
                  <Button className="w-full rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white group/btn">
                    Order Now <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ----------------------- A PEEK INTO OUR KITCHEN ------------------------- */
const US_TRUCK = '/us_food_truck.png';

const StageArrow = ({ direction = 'down', targetId, accent = '#B84A2B' }) => (
  <a href={`#${targetId}`} aria-label={direction === 'down' ? 'Next step' : 'Previous step'}
    className="group inline-flex flex-col items-center gap-1 select-none">
    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-foreground/40 group-hover:text-[--accent] transition-colors"
      style={{ '--accent': accent }}>
      {direction === 'down' ? 'Next' : 'Previous'}
    </span>
    <span className="h-12 w-12 rounded-full border-2 grid place-items-center transition-all duration-300 group-hover:scale-110"
      style={{ borderColor: `${accent}40`, color: accent }}>
      <motion.span animate={direction === 'down' ? { y: [0, 4, 0] } : { y: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
        <ChevronDown className={`h-5 w-5 ${direction === 'up' ? 'rotate-180' : ''}`} />
      </motion.span>
    </span>
  </a>
);

const PeekIntoKitchen = () => {
  const stages = [
    {
      id: 'stage-1',
      title: 'The Not-So-Secret Ingredients',
      desc: 'Heirloom rice, Millets, urad dal, Chana dal and Methi (Fenugreek Seeds) are carefully sourced from trusted local farms and stored in a clean, dry facility before they begin their journey to your table.',
      img: IMG.lentils,
      tag: '01',
      accent: '#B84A2B', // terracotta
      bg: 'from-white via-[#FBF7F0] to-white',
    },
    {
      id: 'stage-2',
      title: 'Soaking In It',
      desc: 'Every grain is given time — soaking patiently to absorb just the right amount of water, the first step toward a soft, wholesome batter.',
      img: IMG.lentils2,
      tag: '02',
      accent: '#C9763A', // terracotta → gold
      bg: 'from-[#FBF7F0] via-[#F5EEDC] to-[#FBF7F0]',
    },
    {
      id: 'stage-3',
      title: 'The Daily Grind',
      desc: 'Grains and pulses are ground separately to a precise consistency, with a touch of mineral salt, under close and careful watch.',
      img: IMG.ragi,
      tag: '03',
      accent: '#C9A961', // gold
      bg: 'from-[#F5EEDC] via-[#F0E6CB] to-[#F5EEDC]',
    },
    {
      id: 'stage-4',
      title: 'The Perfect Mix',
      desc: 'The finely ground rice, urad dal, chana dal and methi come together in exactly the right balance — the foundation of every Mangalam Foods batter.',
      img: IMG.dosaPour,
      tag: '04',
      accent: '#8DA663', // gold → sage
      bg: 'from-[#F0E6CB] via-[#EAE5D0] to-[#F0E6CB]',
    },
    {
      id: 'stage-5',
      title: 'Rise and Shine',
      desc: 'There are no shortcuts here. Natural fermentation, given the time it needs, is what gives Mangalam Foods batter its signature lightness, flavor, and gut-friendly goodness.',
      img: IMG.idli2,
      tag: '05',
      accent: '#2C5F3F', // forest
      bg: 'from-[#EAE5D0] via-[#E5E8D8] to-[#EAE5D0]',
    },
    {
      id: 'stage-6',
      title: 'Packed with Care',
      desc: 'Each batch is packed, weighed, and sealed with care, then checked thoroughly to ensure nothing but pure, clean ingredients make it into every pack.',
      img: IMG.spread,
      tag: '06',
      accent: '#4A7A4F', // forest → mid
      bg: 'from-[#E5E8D8] via-[#EFEAD9] to-[#E5E8D8]',
    },
    {
      id: 'stage-7',
      title: 'Now Ready to Be Served with Love',
      desc: 'From our kitchen to your table, Mangalam Foods travels fresh and ready — so every meal you serve carries the same love it was made with.',
      img: US_TRUCK,
      tag: '07',
      accent: '#B84A2B',
      bg: 'from-[#EFEAD9] via-[#FBF7F0] to-white',
      isFinal: true,
    },
  ];

  return (
    <section id="peek" className="bg-white">
      {/* ----------- HERO BANNER ----------- */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* gradient brand bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF7F0] via-[#F5EEDC] to-[#EAE5D0]" />
        {/* parallax blobs */}
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#B84A2B]/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2C5F3F]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#C9A961]/20 to-transparent blur-3xl" />
        {/* grain overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.72 0 0 0 0 0.29 0 0 0 0 0.17 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }} />

        {/* floating illustrations */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute top-24 left-16 text-[#C9A961]/40 hidden md:block">
          <Wheat className="h-16 w-16" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-24 right-16 text-[#2C5F3F]/40 hidden md:block">
          <Leaf className="h-14 w-14" />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/4 text-[#B84A2B]/30 hidden lg:block">
          <Sprout className="h-12 w-12" />
        </motion.div>

        <div className="container relative z-10 text-center max-w-3xl py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur border border-[#B84A2B]/15 mb-8 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#C9A961]" />
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#8E3520]">Our Process</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] text-[#1A1410] mb-8">
              A Peek Into
              <br />
              <span className="italic bg-gradient-to-r from-[#B84A2B] via-[#C9A961] to-[#2C5F3F] bg-clip-text text-transparent">
                Our Kitchen
              </span>
            </h1>
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
              From our kitchen reaches your table, every Mangalam product follows two simple rules &mdash; <strong className="text-[#8E3520]">keep it safe</strong>, and <strong className="text-[#2C5F3F]">keep it free of preservative</strong>.
            </p>
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              From the fields till it reaches your table &mdash; here&rsquo;s a glimpse into how we prepare our heirloom-grain, naturally fermented batters and foods.
            </p>
            <a href="#stage-1" className="inline-flex flex-col items-center gap-3 group">
              <span className="text-xs tracking-[0.35em] uppercase font-bold text-[#8E3520] group-hover:text-[#B84A2B] transition-colors">
                Explore
              </span>
              <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="h-14 w-14 rounded-full bg-gradient-to-br from-[#B84A2B] to-[#8E3520] text-white grid place-items-center premium-shadow-lg group-hover:scale-110 transition-transform">
                <ChevronDown className="h-6 w-6" />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ----------- STAGES ----------- */}
      {stages.map((s, i) => {
        const prev = i > 0 ? stages[i - 1].id : null;
        const next = i < stages.length - 1 ? stages[i + 1].id : null;
        const imageLeft = i % 2 === 0;
        return (
          <section key={s.id} id={s.id}
            className={`relative bg-gradient-to-br ${s.bg} py-24 md:py-32 overflow-hidden`}>
            {/* decorative accent blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
              style={{ background: `radial-gradient(circle, ${s.accent} 0%, transparent 70%)` }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
              style={{ background: `radial-gradient(circle, ${s.accent} 0%, transparent 70%)` }} />

            <div className="container relative">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${!imageLeft ? 'md:[direction:rtl]' : ''}`}>

                {/* IMAGE */}
                <div className="relative md:[direction:ltr]">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}
                    className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden premium-shadow-lg">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    {/* color overlay tinted by stage accent */}
                    <div className="absolute inset-0 mix-blend-multiply opacity-15"
                      style={{ background: `linear-gradient(135deg, ${s.accent} 0%, transparent 60%)` }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1410]/25 via-transparent to-transparent" />
                  </motion.div>
                  {/* big number badge */}
                  <div className="absolute -top-8 -left-4 md:-left-12 font-display font-bold text-3xl h-24 w-24 rounded-3xl grid place-items-center premium-shadow-lg ring-4 ring-white text-white"
                    style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}DD)` }}>
                    {s.tag}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="md:[direction:ltr]">
                  <div className="text-xs font-bold tracking-[0.35em] mb-5" style={{ color: s.accent }}>
                    STEP {s.tag} <span className="opacity-40">/ 07</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A1410] mb-6 leading-[1.1] text-balance">
                    {s.title}
                  </h3>
                  <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-8">
                    {s.desc}
                  </p>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="h-[3px] w-16 rounded-full" style={{ backgroundColor: s.accent }} />
                    <span className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: s.accent }}>
                      Mangalam Process
                    </span>
                  </div>

                  {/* up/down arrow nav */}
                  <div className="flex items-center gap-6">
                    {prev && <StageArrow direction="up" targetId={prev} accent={s.accent} />}
                    {next && <StageArrow direction="down" targetId={next} accent={s.accent} />}
                    {!next && (
                      <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B84A2B] to-[#8E3520] text-white text-sm font-semibold premium-shadow hover:scale-105 transition-transform">
                        Order Yours <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

/* --------------------- TRANSPARENSEE LIVE KITCHEN ------------------------- */
const FACTORY_IMG = {
  cmo: 'https://images.pexels.com/photos/36823725/pexels-photo-36823725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  rice: 'https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  uradDal: 'https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  fenugreek: 'https://images.unsplash.com/photo-1768729339998-909158957162?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  water: 'https://images.unsplash.com/photo-1574849857528-00c661bae0d6?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  grinding: 'https://images.unsplash.com/photo-1589109807644-924edf14ee09?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  packing: 'https://images.pexels.com/photos/2889093/pexels-photo-2889093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  chillerEntry: 'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  chillerExit: 'https://images.pexels.com/photos/11679691/pexels-photo-11679691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  van: 'https://images.unsplash.com/photo-1616154714188-7a39826989e1?crop=entropy&cs=srgb&fm=jpg&w=1600&q=80',
};

const LiveClock = ({ className = '' }) => {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  if (!now) {
    // Avoid hydration mismatch: render placeholder until mounted on client
    return <div className={`font-mono ${className}`}>--/--/----&nbsp;&nbsp;|&nbsp;&nbsp;--:--:--</div>;
  }
  const pad = (n) => String(n).padStart(2, '0');
  const date = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  return (
    <div className={`font-mono ${className}`}>
      <span>{date}</span> <span className="mx-1.5 opacity-50">|</span> <span>{time}</span>
    </div>
  );
};

const CameraTile = ({ name, img, caption, idx = 0, span = 'normal' }) => {
  // 4 different Ken Burns loops for variety
  const kb = [
    { initial: { scale: 1, x: 0, y: 0 }, animate: { scale: 1.12, x: -12, y: -8 } },
    { initial: { scale: 1.08, x: 0, y: 0 }, animate: { scale: 1, x: 10, y: 6 } },
    { initial: { scale: 1, x: -10, y: 0 }, animate: { scale: 1.1, x: 10, y: -5 } },
    { initial: { scale: 1.05, x: 8, y: 4 }, animate: { scale: 1, x: -8, y: -4 } },
  ][idx % 4];
  const dur = 14 + (idx % 3) * 4;

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }}
      className={`group relative bg-black/40 backdrop-blur rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9A961]/50 transition-all duration-500 ${
        span === 'wide' ? 'lg:col-span-2' : ''
      }`}>
      <div className="aspect-video relative overflow-hidden bg-[#0c0806]">
        {/* Looping Ken Burns image - mimics a live video feed */}
        <motion.img
          src={img}
          alt={name}
          initial={kb.initial}
          animate={kb.animate}
          transition={{ duration: dur, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* subtle vignette only — no heavy filter, keep image real */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />
        {/* subtle moving scan-glow (the live "feel") */}
        <motion.div
          aria-hidden="true"
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"
        />
        {/* corner brackets (subtle) */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-l border-t border-white/40" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-r border-t border-white/40" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-l border-b border-white/40" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-r border-b border-white/40" />
      </div>
      <div className="p-5">
        <div className="font-display font-bold text-white text-lg leading-tight tracking-wide uppercase">{name}</div>
        {caption ? (
          <p className="text-xs text-white/60 mt-2 leading-relaxed">{caption}</p>
        ) : (
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Streaming 24/7</div>
        )}
      </div>
    </motion.div>
  );
};

const TransparenSee = () => {
  const zones = [
    { name: 'Rice Feeding Zone', img: FACTORY_IMG.rice },
    { name: 'Urad Dal Feeding Zone', img: FACTORY_IMG.uradDal },
    { name: 'Fenugreek Feeding Zone', img: FACTORY_IMG.fenugreek },
    { name: 'Water Mixing Zone', img: FACTORY_IMG.water },
    { name: 'Grinding Zone', img: FACTORY_IMG.grinding },
    {
      name: 'Packing Zone',
      img: FACTORY_IMG.packing,
      caption: 'Our women workforce pack the batter with accurate weight measurement — untouched by hand.',
    },
    { name: 'Chiller Entry Point', img: FACTORY_IMG.chillerEntry },
    { name: 'Chiller Exit Point', img: FACTORY_IMG.chillerExit },
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://mangalamfoods.us';
  const share = (network) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent('See where our food comes from — Mangalam TransparenSee Live Kitchen');
    const map = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      whatsapp: `https://api.whatsapp.com/send?text=${text}%20${url}`,
      instagram: 'https://www.instagram.com/',
    };
    if (typeof window !== 'undefined') window.open(map[network], '_blank');
  };

  return (
    <section id="transparensee" className="py-24 md:py-32 bg-gradient-to-b from-[#0E0906] via-[#1A1410] to-[#0E0906] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #C9A961 0%, transparent 50%), radial-gradient(circle at 80% 70%, #B84A2B 0%, transparent 50%)' }} />

      <div className="container relative">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14">
          {/* TransparenSee wordmark */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-[#C9A961]/30 backdrop-blur mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3B30]" />
            </span>
            <Eye className="h-4 w-4 text-[#C9A961]" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#C9A961]">TransparenSee</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 leading-[1.05] text-balance">
            A Peek Inside Our <span className="italic text-[#C9A961]">Kitchen</span>
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-5">
            Your kitchen is a space of <strong className="text-[#C9A961]">Love, Purity and Trust</strong>. Our factory is the same.
            It&rsquo;s our kitchen, where we bring together the finest ingredients, the latest technology and
            traditional recipes in a pristine, hygienic environment that has to be seen to be believed.
          </p>
          <p className="text-white/65 text-base leading-relaxed">
            So here&rsquo;s the window. A never-before, no-filter look at where your favourite Mangalam food
            comes from. It&rsquo;s our way of saying <strong className="text-[#C9A961]">thank you</strong> for trusting us with your family&rsquo;s nutrition and well-being.
          </p>
          <div className="inline-flex items-center gap-2 mt-7 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur">
            <Clock className="h-3.5 w-3.5 text-[#C9A961]" />
            <LiveClock className="text-xs text-white/80 tracking-wider" />
          </div>
        </motion.div>

        {/* FEATURED TOUR CARD (still image instead of video) */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto mb-16 rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur group">
          <div className="aspect-[21/9] relative overflow-hidden">
            <img src={FACTORY_IMG.cmo} alt="Tour of Mangalam's kitchen" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              style={{ filter: 'contrast(0.95) saturate(0.9) brightness(0.85)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            {/* Cinematic corner brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#C9A961]" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#C9A961]" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#C9A961]" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#C9A961]" />

            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-14 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#FF3B30] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                  </span>
                  Featured Tour
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold mb-3 leading-tight text-white">
                  A Tour of Our Kitchen by Our<br />
                  <span className="italic text-[#C9A961]">Chief Manufacturing Officer</span>
                </h3>
                <p className="text-white/75 text-sm md:text-base leading-relaxed">
                  Walk through our grand home kitchen, where we take the finest ingredients to be washed,
                  soaked, ground and mixed to create the batter you love so much. All of it right here in
                  our Sudbury, MA facility &mdash; now you get to see it all.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TRANSITION TEXT */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            <strong className="text-[#C9A961]">Eight live zones.</strong> One promise of transparency.
            Take a look inside every step of how Mangalam batter is made &mdash; from grain feeding to chilled dispatch.
          </p>
        </motion.div>

        {/* CAMERA GRID */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {zones.map((z) => (
            <CameraTile key={z.name} name={z.name} img={z.img} caption={z.caption} />
          ))}
        </motion.div>

        {/* STATS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            { icon: Eye, num: '08', label: 'Live Camera Zones' },
            { icon: Radio, num: '24/7', label: 'Continuous Streaming' },
            { icon: ShieldCheck, num: '0', label: 'Hidden Corners' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-5 bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10">
              <div className="h-16 w-16 rounded-2xl bg-[#C9A961]/15 grid place-items-center shrink-0">
                <s.icon className="h-7 w-7 text-[#C9A961]" />
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-white">{s.num}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* READY TO BE DELIVERED */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-20 rounded-[2.5rem] overflow-hidden relative border border-white/10 bg-black/40">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <img src={FACTORY_IMG.van} alt="Refrigerated delivery van" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:to-[#1A1410]" />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#2C5F3F] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                <Truck className="h-3 w-3" /> Cold-Chain
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs tracking-[0.3em] uppercase font-bold text-[#C9A961] mb-3">Final Step</div>
              <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to be <span className="italic text-[#C9A961]">Delivered.</span>
              </h3>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                Our refrigerated vans then transport the fresh batter packs to a store near you &mdash;
                preserving every bit of freshness from our kitchen to yours.
              </p>
              <a href="#contact">
                <Button size="lg" className="rounded-full bg-[#C9A961] hover:bg-[#A8893F] text-[#1A1410] font-bold px-7 py-6 w-fit">
                  Request a Factory Tour <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* SHARE */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 text-center">
          <p className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
            Share the view with <span className="italic text-[#C9A961]">friends &amp; family!</span>
          </p>
          <p className="text-white/60 text-sm mb-6 italic">
            &ldquo;If our kitchen is good enough for our families, it&rsquo;s good enough for yours.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            {[
              { id: 'facebook', label: 'Facebook', svg: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.77l-.44 2.9h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94z' },
              { id: 'twitter', label: 'Twitter', svg: 'M18.244 2H21l-6.52 7.46L22 22h-6.66l-5.21-6.85L4.2 22H1.44l6.97-7.97L2 2h6.8l4.7 6.22L18.244 2zm-2.33 18h1.84L7.18 4H5.22l10.694 16z' },
              { id: 'whatsapp', label: 'WhatsApp', svg: 'M20.52 3.48A11.86 11.86 0 0012.05 0 11.94 11.94 0 001.62 17.86L0 24l6.3-1.65A11.93 11.93 0 0012.05 24c6.6 0 11.95-5.36 11.95-11.96 0-3.2-1.25-6.2-3.48-8.56zm-8.47 18.4a9.95 9.95 0 01-5.07-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.94 9.94 0 0115.36-12.5A9.84 9.84 0 0122 12.04c0 5.49-4.46 9.84-9.95 9.84zm5.43-7.4c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.66.15s-.76.96-.93 1.15c-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47a8.97 8.97 0 01-1.65-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5l-.56-.01a1.07 1.07 0 00-.78.36c-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.09 3.2 5.07 4.49.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.27-.2-.57-.35z' },
              { id: 'instagram', label: 'Instagram', svg: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 01-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16a4 4 0 114-4 4 4 0 01-4 4zm6.4-11.85a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z' },
            ].map((s) => (
              <button key={s.id} onClick={() => share(s.id)} aria-label={s.label}
                className="h-12 w-12 rounded-full bg-white/5 hover:bg-[#C9A961] border border-white/10 hover:border-[#C9A961] grid place-items-center text-white hover:text-[#1A1410] transition-all hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d={s.svg} /></svg>
              </button>
            ))}
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-white/30">
            Mangalam Foods is a registered trademark &middot; Imitation of label design is prohibited
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------- PROCESS --------------------------------- */
const Process = () => {
  const steps = [
    { icon: Wheat, title: 'Premium Grain Selection', desc: 'Heirloom rice, urad dal, millets & methi from trusted farms.' },
    { icon: Droplets, title: 'Cleaning & Washing', desc: 'Multi-stage cleansing using purified water.' },
    { icon: Sprout, title: 'Traditional Grinding', desc: 'Stone-ground texture for authentic taste.' },
    { icon: FlaskConical, title: 'Natural Fermentation', desc: '12-hour temperature-controlled fermentation.' },
    { icon: ShieldCheck, title: 'Quality Testing', desc: 'Lab-tested for taste, texture and safety.' },
    { icon: Package, title: 'Hygienic Packaging', desc: 'Sealed in food-safe packaging to lock freshness.' },
    { icon: Truck, title: 'Delivered Fresh', desc: 'Cold-chain delivered the very next day.' },
  ];
  return (
    <section id="process" className="py-24 md:py-32 grain-bg relative overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Our Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            From Grain to <span className="italic text-[#2C5F3F]">Your Plate</span>
          </h2>
          <p className="text-foreground/70 text-lg">Seven careful steps. One promise of freshness.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B84A2B]/30 via-[#C9A961]/40 to-[#2C5F3F]/30 md:-translate-x-1/2" />
          {steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative mb-10 flex items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="h-16 w-16 rounded-full bg-white grid place-items-center premium-shadow ring-4 ring-[#FBF7F0]">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#B84A2B] to-[#8E3520] grid place-items-center text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                </div>
              </div>
              <div className={`pl-28 md:pl-0 md:w-[42%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`inline-block text-xs font-bold tracking-widest text-[#C9A961] mb-2`}>STEP {String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-2xl font-bold text-[#1A1410] mb-2">{s.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------- QUALITY & CERTIFICATIONS ---------------------- */
const Quality = () => {
  const certs = [
    { label: 'USDA', sub: 'Organic' },
    { label: 'FDA', sub: 'Registered' },
    { label: 'HACCP', sub: 'Certified' },
    { label: 'Non-GMO', sub: 'Verified' },
    { label: 'SQF', sub: 'Level 2' },
  ];
  return (
    <section className="py-20 bg-white border-y border-[#B84A2B]/10">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-3">Quality & Food Safety</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1410]">Certified. Tested. Trusted.</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {certs.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center justify-center p-6 bg-[#FBF7F0] rounded-2xl border border-[#C9A961]/20 hover:border-[#C9A961] transition-colors">
              <BadgeCheck className="h-10 w-10 text-[#2C5F3F] mb-2" />
              <div className="font-display font-bold text-xl text-[#8E3520]">{c.label}</div>
              <div className="text-xs uppercase tracking-wider text-foreground/60">{c.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- OUR PROMISE -------------------------------- */
const OurPromise = () => {
  const items = [
    { icon: ShieldCheck, title: 'Gluten-Free', desc: 'Every recipe is formulated without wheat, barley, or rye.', color: '#B84A2B' },
    { icon: Heart, title: 'Nut-Free', desc: 'Safe, allergen-conscious kitchens and ingredient sourcing throughout.', color: '#2C5F3F' },
    { icon: Leaf, title: 'Dairy-Free / Vegan', desc: 'Plant-forward options that don’t compromise on flavor.', color: '#C9A961' },
    { icon: FlaskConical, title: 'Naturally Fermented', desc: 'Traditional fermentation for gut health and deep, authentic flavor.', color: '#B84A2B' },
    { icon: Wheat, title: 'Heirloom Grains & Rice', desc: 'Ancient, non-hybridized varieties prized for their nutrition.', color: '#2C5F3F' },
    { icon: Sprout, title: 'Real Health Benefits', desc: 'Whole-food ingredients chosen to nourish, not just fill.', color: '#C9A961' },
  ];
  return (
    <section id="promise" className="py-24 md:py-32 bg-gradient-to-br from-[#FBF7F0] via-white to-[#F5EEDC]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Our Promise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Clean, Honest <span className="italic text-[#2C5F3F]">Food</span>
          </h2>
          <p className="text-foreground/70 text-lg">Every Mangalam Foods product is made to nourish — free from common allergens, rooted in heirloom grains, and naturally fermented for real Gut health benefits.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-3xl border border-[#B84A2B]/10 premium-shadow flex items-center gap-5">
              <div className="h-16 w-16 rounded-2xl grid place-items-center shrink-0" style={{ backgroundColor: `${it.color}15` }}>
                <it.icon className="h-8 w-8" style={{ color: it.color }} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#1A1410] mb-1">{it.title}</h3>
                <p className="text-sm text-foreground/60">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* -------------------------------- OUR MISSION -------------------------------- */
const Mission = () => (
  <section className="py-20 md:py-28 bg-[#1A1410] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23C9A961' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")` }} />
    <div className="container relative text-center max-w-3xl mx-auto">
      <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#C9A961] mb-4">Our Mission</span>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
        To create a sustainable, community-driven food model
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 text-left mb-10">
        {[
          'Celebrates cultural heritage',
          'Supports local ecosystems',
          'Reduces food waste',
          'Feeds and uplifts communities in need'
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-xl md:text-2xl text-white/80 italic font-display">
        "Food, for Monali, is not just a product — it is a responsibility and an opportunity to give back."
      </p>
    </div>
  </section>
);

/* ------------------------------- CAPABILITIES ------------------------------- */
const Capabilities = () => {
  const caps = [
    { title: 'Culinary R&D & Menu Development', desc: 'Recipe innovation rooted in heirloom grains and fermentation craft.' },
    { title: 'Sourcing & Supply Chain', desc: 'Reliable, ethical pipelines with local farms and allergen-safe suppliers.' },
    { title: 'Food Safety & Compliance', desc: 'Rigorous standards for allergen control, quality, and certification.' },
    { title: 'Catering Operations & Logistics', desc: 'Seamless execution for events, offices, and institutional accounts.' },
    { title: 'Finance & Business Planning', desc: 'Disciplined budgeting, pricing, and growth-stage decision making.' },
    { title: 'Brand, Marketing & Outreach', desc: 'Storytelling that connects mission, culture, and community impact.' },
    { title: 'Workforce Training & Culture', desc: 'Building skilled, mission-aligned teams that grow with the business.' },
    { title: 'Partnerships & Community Relations', desc: 'Strong ties with farms, shelters, schools, and local institutions.' },
  ];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Capabilities to Run & Execute a <span className="italic text-[#2C5F3F]">Great Business</span>
          </h2>
          <p className="text-foreground/70 text-lg">The operating strengths behind the vision — turning purpose into a sustainable, well-run enterprise.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {caps.map((c, i) => (
            <div key={i} className="p-6 bg-[#FBF7F0] rounded-2xl border border-[#B84A2B]/10 hover:border-[#B84A2B]/30 hover:premium-shadow transition-all">
              <div className="h-10 w-10 rounded-full bg-white grid place-items-center mb-4 text-[#8E3520] font-bold font-display shadow-sm">{i + 1}</div>
              <h3 className="font-display font-bold text-lg text-[#1A1410] mb-2">{c.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------ JOIN THE JOURNEY ------------------------------ */
const JoinJourney = () => (
  <section className="py-24 bg-[#FAF5EB] border-y border-[#B84A2B]/10 text-center">
    <div className="container max-w-3xl">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
        Join the <span className="italic text-[#B84A2B]">Journey</span>
      </h2>
      <p className="text-lg text-foreground/70 leading-relaxed mb-6">
        Mangalam Foods’s story is just beginning — but its purpose is clear: to nourish people, respect the planet, and bring heirloom tradition to every table it reaches.
      </p>
      <p className="text-lg text-foreground/70 leading-relaxed mb-10">
        Whether through a pack of batter, a catered meal, or a community partnership — every step forward is part of something larger: one that turns food into a blessing worth sharing.
      </p>
      <a href="#contact">
        <Button size="lg" className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-8 py-6 text-base premium-shadow">
          Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </a>
    </div>
  </section>
);

/* ------------------------------ TESTIMONIALS ------------------------------ */
const Testimonials = () => {
  const reviews = [
    { name: 'Priya Sharma', role: 'Mother of 2', text: 'My kids love the idlis I make from Mangalam batter. The freshness is unbelievable — just like my grandmother used to make!', rating: 5 },
    { name: 'Rajesh Iyer', role: 'Software Engineer', text: 'I tried every brand. Mangalam is the only one that tastes truly authentic. The dosa crisps up perfectly every single time.', rating: 5 },
    { name: 'Lakshmi Menon', role: 'Home Chef', text: 'No preservatives, naturally fermented, and unbelievably consistent. This is the real South Indian batter we have been waiting for.', rating: 5 },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#1A1410] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23C9A961' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#C9A961] mb-4">Customer Love</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="italic text-[#C9A961]">Thousands</span> of Families
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-3xl relative">
              <Quote className="h-10 w-10 text-[#C9A961]/40 absolute -top-2 -left-2" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#C9A961] text-[#C9A961]" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#B84A2B] to-[#C9A961] grid place-items-center font-display font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-white/60">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------- FAQ ---------------------------------- */
const FAQ = () => {
  const faqs = [
    { q: 'How long does the batter stay fresh?', a: 'When refrigerated at or below 4°C, our batter stays fresh for 5\u20137 days from manufacturing date. Always check the date printed on the pack.' },
    { q: 'Do you use any preservatives?', a: 'Absolutely not. We use 100% natural ingredients and traditional fermentation — no preservatives, no artificial additives, no chemicals.' },
    { q: 'Where is Mangalam Foods available?', a: 'We are based in Sudbury, MA and serve the greater New England area. For institutional & catering orders nationwide, please contact us directly. All products are USDA Organic, FDA Registered and HACCP Certified.' },
    { q: 'How should I store the batter?', a: 'Keep it refrigerated at all times. Once opened, give it a gentle stir before use. Do not freeze. Use within the date printed on the pack.' },
    { q: 'Is the batter gluten-free?', a: 'Our Multi Millet and Ragi batters are strictly gluten-free, nut-free, and vegan. Other batters use rice & lentils which are naturally gluten-free.' },
    { q: 'Can I place bulk / institutional orders?', a: 'Yes! We specialise in scalable catering and institutional accounts including government contracts. Reach out via the contact form below.' },
  ];
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410]">Questions, <span className="italic text-[#2C5F3F]">Answered.</span></h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-[#FBF7F0] border border-[#B84A2B]/10 rounded-2xl px-6 hover:border-[#B84A2B]/30 transition-colors data-[state=open]:bg-white data-[state=open]:premium-shadow">
              <AccordionTrigger className="font-display text-left text-lg font-semibold text-[#1A1410] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

/* --------------------------------- CONTACT -------------------------------- */
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      toast.success(data.message || 'Thank you! We’ll get back to you soon.');
      setForm({ name: '', email: '', phone: '', product: '', message: '' });
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 grain-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Let&rsquo;s Bring Freshness to <span className="italic text-[#2C5F3F]">Your Table</span>
          </h2>
          <p className="text-foreground/70 text-lg">Whether you&rsquo;re a home customer or institutional buyer — we&rsquo;d love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: 'Visit Us', text: '621 Boston Post Rd, Sudbury, MA 01776' },
              { icon: Phone, title: 'Call Us', text: '+1 774-287-5154', href: 'tel:+17742875154' },
              { icon: Mail, title: 'Email Us', text: 'Admin@mangalamfoods.us', href: 'mailto:Admin@mangalamfoods.us' },
            ].map((c) => (
              <a key={c.title} href={c.href || '#'} className="block bg-white p-6 rounded-3xl border border-[#B84A2B]/10 hover:premium-shadow transition-all group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#FAF5EB] grid place-items-center shrink-0 group-hover:bg-[#B84A2B] transition-colors">
                    <c.icon className="h-6 w-6 text-[#B84A2B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/50 font-semibold mb-1">{c.title}</div>
                    <div className="font-display text-lg font-semibold text-[#1A1410]">{c.text}</div>
                  </div>
                </div>
              </a>
            ))}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#B84A2B]/10 aspect-video">
              <iframe
                src="https://www.google.com/maps?q=621+Boston+Post+Rd,+Sudbury,+MA+01776&output=embed"
                className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Mangalam Foods Location"
              />
            </div>
          </motion.div>

          <motion.form onSubmit={submit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl border border-[#B84A2B]/10 premium-shadow space-y-5">
            <h3 className="font-display text-2xl font-bold text-[#1A1410] mb-2">Send us a message</h3>
            <p className="text-sm text-foreground/60 mb-6">We typically respond within 24 hours.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Your Name *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Priya Sharma"
                  className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Email *</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com"
                  className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Phone</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000"
                  className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Interested Product</label>
                <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full h-12 rounded-xl border border-[#B84A2B]/20 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B84A2B]">
                  <option value="">Select a product</option>
                  <option>Idly Batter</option>
                  <option>Dosa Batter</option>
                  <option>Multi Millet Batter</option>
                  <option>Ragi Dosa Batter</option>
                  <option>Instant Batter</option>
                  <option>Family Pack</option>
                  <option>Bulk / Institutional Order</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Message *</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help..."
                rows={5} className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] resize-none" required />
            </div>
            <Button type="submit" disabled={loading} size="lg"
              className="w-full rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white h-14 text-base font-semibold premium-shadow">
              {loading ? 'Sending...' : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------- FOOTER --------------------------------- */
const Footer = () => (
  <footer className="bg-[#1A1410] text-white/80 pt-20 pb-8 relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B84A2B] via-[#C9A961] to-[#2C5F3F]" />
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <LogoMark className="h-20 w-20" />
            <div className="mt-4">
              <div className="font-display text-xl font-bold text-white">Mangalam Foods</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">A Blessing at Every Table</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/60 leading-relaxed text-center md:text-left">
            Authentic South Indian batters — naturally fermented, preservative-free, delivered fresh.
          </p>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {['About', 'Products', 'Process', 'Benefits', 'FAQ', 'Contact'].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[#C9A961] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white mb-4">Products</div>
          <ul className="space-y-2 text-sm">
            {['Idly Batter', 'Dosa Batter', 'Multi Millet Batter', 'Ragi Dosa Batter', 'Instant Batter', 'Family Pack'].map((l) => (
              <li key={l}><a href="#products" className="hover:text-[#C9A961] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white mb-4">Get in Touch</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[#C9A961] shrink-0" /><span>621 Boston Post Rd,<br />Sudbury, MA 01776</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#C9A961]" /><a href="tel:+17742875154" className="hover:text-[#C9A961]">+1 774-287-5154</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#C9A961]" /><a href="mailto:Admin@mangalamfoods.us" className="hover:text-[#C9A961]">Admin@mangalamfoods.us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div>&copy; {new Date().getFullYear()} Mangalam Foods. All rights reserved. Minority & Women-Owned Small Business.</div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-[#2C5F3F]" />
          <span>USDA Organic • FDA Registered • HACCP • Non-GMO Verified</span>
        </div>
      </div>
    </div>
  </footer>
);

/* --------------------------------- APP ------------------------------------ */
function App() {
  return (
    <main className="bg-[#FBF7F0] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <WhyChooseUs />
      <Products />
      <PeekIntoKitchen />
      <TransparenSee />
      <Process />
      <Quality />
      <OurPromise />
      <Capabilities />
      <JoinJourney />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
