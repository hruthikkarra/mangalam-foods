'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Leaf, Sprout, Wheat, ShieldCheck, Heart, Clock, FlaskConical, Truck,
  Award, BadgeCheck, Star, MapPin, Phone, Mail, Menu, X, ChevronDown,
  Send, Sparkles, Droplets, ChefHat, Package, CheckCircle2, Quote, ArrowRight,
  Eye, Radio, UtensilsCrossed, Soup,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

const IMG = {
  ancientGrains: '/ancient-grains.png',
  naturallyFermented: '/naturally-fermented.png',
  bringTradition: '/bring-tradition.png',
  heroBatter: 'https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxsZW50aWxzfGVufDB8fHx8MTc4Mjc1MzcwMXww&ixlib=rb-4.1.0&q=85',
  lentils: 'https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxsZW50aWxzfGVufDB8fHx8MTc4Mjc1MzcwMXww&ixlib=rb-4.1.0&q=85',
  lentils2: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxsZW50aWxzfGVufDB8fHx8MTc4Mjc1MzcwMXww&ixlib=rb-4.1.0&q=85',
  millets: 'https://images.unsplash.com/photo-1768729339998-909158957162?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxyYWdpJTIwbWlsbGV0fGVufDB8fHx8MTc4Mjc1MzcwMHww&ixlib=rb-4.1.0&q=85',
  cooking: 'https://images.pexels.com/photos/37330104/pexels-photo-37330104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  spices: 'https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  chutney: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  packaging: 'https://images.pexels.com/photos/2889093/pexels-photo-2889093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  batters: '/ancient-grains.png',
  water: 'https://images.unsplash.com/photo-1574849857528-00c661bae0d6?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  grinding: 'https://images.unsplash.com/photo-1589109807644-924edf14ee09?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  spread: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

const US_TRUCK = '/us_food_truck.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ------------------------------- LOGO MARK -------------------------------- */
const LogoMark = ({ className = 'h-16 w-16' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <img src="/logo.png?v=2" alt="Mangalam Foods Logo" className="w-full h-full object-contain" />
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
      <div className="container flex h-32 items-center justify-between">
        <a href="#" className="flex items-center gap-3 group relative z-10">
          <LogoMark className="h-24 w-24 md:h-32 md:w-32" />
          <div className="leading-tight">
            <div className="font-display text-2xl md:text-3xl font-bold text-[#8E3520] tracking-wide">Mangalam Foods</div>
            <div className="text-[11px] md:text-[12px] tracking-[0.22em] text-[#2C5F3F] font-medium uppercase">A Blessing at Every Table</div>
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
          <a href="/pop-up-events" className="ml-2">
            <Button variant="outline" className="rounded-full border-2 border-[#2C5F3F] text-[#2C5F3F] hover:bg-[#2C5F3F] hover:text-white px-6 shadow-sm hidden xl:flex">
              Pop-Up Events
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
              <a href="/pop-up-events" onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-[#2C5F3F] hover:bg-[#FAF5EB] font-medium border border-[#2C5F3F]/20 mt-1">
                Pop-Up Events
              </a>
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
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-40 left-10 text-[#C9A961]/30 hidden md:block"><Wheat className="h-20 w-20" /></motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 right-16 text-[#2C5F3F]/25 hidden md:block"><Leaf className="h-16 w-16" /></motion.div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ opacity }} variants={stagger} initial="hidden" animate="visible" className="relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-[#B84A2B]/15 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#C9A961]" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8E3520]">A Blessing at Every Table</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#1A1410] text-balance">
            Freshness You Can Taste. <span className="italic text-[#B84A2B]">Tradition You Can Trust.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
            Mangalam Foods is a Boston, MA-based food production company creating fresh, clean, naturally fermented batters made from heritage rice, millets, lentils, and methi (fenugreek seeds).
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
            Our products are crafted for modern households that want food that is convenient, nourishing, and made with care — without preservatives, artificial shortcuts, or unnecessary additives.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 max-w-md">
            <p className="text-sm text-foreground/70">Every pack is rooted in a simple promise: real ingredients, traditional fermentation, and freshness you can taste.</p>
          </motion.div>
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
              { icon: BadgeCheck, label: 'Naturally Fermented' },
              { icon: Wheat, label: 'Heritage Grains' },
              { icon: Heart, label: 'Minority & Women-Owned' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-foreground/70">
                <b.icon className="h-4 w-4 text-[#2C5F3F]" /> <span className="font-medium">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl overflow-hidden premium-shadow-lg ring-1 ring-white">
              <img src={IMG.ancientGrains} alt="Ancient Grains — Heritage Rice, Millets, Lentils & Methi" className="w-full h-auto object-cover" />
            </motion.div>
            {/* Floating product badge */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 premium-shadow border border-[#B84A2B]/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#FAF5EB] grid place-items-center">
                  <Leaf className="h-5 w-5 text-[#2C5F3F]" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-[#1A1410]">100% Fresh</div>
                  <div className="text-[10px] text-foreground/50 uppercase tracking-wider">No Preservatives</div>
                </div>
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
          <img src={IMG.cooking} alt="Mangalam Foods — Crafted with care" className="w-full h-full object-cover" />
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
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
          Ancient Grains, <span className="italic text-[#2C5F3F]">Modern Living.</span>
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          At Mangalam Foods, we believe the future of food can be built from the wisdom of the past.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Our naturally fermented batters are made with heritage rice, nutrient-rich millets, lentils, and methi (fenugreek seeds). These wholesome ingredients make our batters naturally protein-rich, gut-friendly, easy to digest, and ideal for modern everyday meals.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Alongside our batters, Mangalam Foods also creates dips, sauces, and chutneys made with carefully selected lentils, vegetables, spices, seeds, aromatics - ginger &amp; garlic, and good fats such as coconut, and olive oil. Ingredients such as turmeric, cinnamon, black pepper, cloves, ginger, garlic, curry leaves, flax seeds, sesame, coconut, olive oil, and more bring natural depth, flavor, and nourishment to our dips, sauces, and chutneys.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          These ingredients make our dips, sauces, and chutneys rich in vitamins, minerals, antioxidants, naturally occurring anti-inflammatory properties, and better-for-you fats.
        </p>
        <p className="text-xl font-semibold text-[#8E3520] leading-relaxed">
          Fresh. Functional. Fermented. Ready when you are.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------ WHY CHOOSE US ----------------------------- */
const WhyChooseUs = () => {
  const items = [
    { icon: Leaf, title: 'Clean Ingredients', desc: 'Made with recognizable, whole-food ingredients.' },
    { icon: Wheat, title: 'Better Grains', desc: 'Our batters are crafted with heritage rice, millets, lentils, and methi (fenugreek seeds).' },
    { icon: Sprout, title: 'Naturally Fermented', desc: 'Prepared through a careful fermentation process for flavor and digestibility.' },
    { icon: Heart, title: 'Protein-Rich Batters', desc: 'Our batters are made with plant-based ingredients that naturally support protein, nourishment, and everyday wellness.' },
    { icon: ShieldCheck, title: 'Nutrient-Rich Dips, Sauces & Chutneys', desc: 'Our dips, sauces, and chutneys use vegetables, lentils, spices, seeds, herbs, aromatics - ginger & garlic, coconut, and olive oil that naturally contain vitamins, minerals, antioxidants, anti-inflammatory properties, and good fats.' },
    { icon: Clock, title: 'Modern Convenience', desc: 'Fresh, ready-to-cook products made for busy households.' },
    { icon: BadgeCheck, title: 'Thoughtful Production', desc: 'Created with attention to safety, consistency, and quality.' },
    { icon: Star, title: 'Purpose-Driven', desc: 'Built to nourish families, support community, and bring meaningful food to every table.' },
  ];
  return (
    <section className="py-24 md:py-32 grain-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Why Mangalam Foods</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            The Mangalam <span className="italic text-[#2C5F3F]">Difference</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-8">Fresh · Naturally Fermented · Clean Ingredients.</p>
          <img src={IMG.naturallyFermented} alt="Fresh, naturally fermented, gut-friendly Mangalam Foods" className="w-full h-auto rounded-3xl premium-shadow-lg border border-[#B84A2B]/10" />
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
    {
      name: 'Naturally Fermented Batters',
      desc: 'Our signature batters are made with heritage rice, millets, lentils, and methi (fenugreek seeds), then naturally fermented for lightness, flavor, protein-rich nourishment, gut-friendly goodness, and easier digestion. They are gluten-free and vegan.',
      img: IMG.lentils,
      badge: 'Signature',
      tag: 'Fresh Batters',
    },
    {
      name: 'Dips, Chutneys & Sauces',
      desc: 'Mangalam Foods also creates fresh dips, chutneys, and sauces made with thoughtfully chosen spices, seeds, herbs, aromatics - ginger & garlic, coconut, Vegetables, Lentils and olive oil. These ingredients add flavor, depth, vitamins, minerals, antioxidants, naturally occurring anti-inflammatory benefits, and good fats.',
      img: IMG.chutney,
      badge: 'New',
      tag: 'Accompaniments',
    },
    {
      name: 'Fresh Meal Solutions',
      desc: 'From breakfast to dinner, our products are made to help families prepare nourishing meals quickly, without compromising on quality or taste.',
      img: IMG.cooking,
      badge: 'Convenient',
      tag: 'Everyday',
    },
  ];
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">What We Make</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Crafted with <span className="italic text-[#2C5F3F]">Care</span>
          </h2>
          <p className="text-foreground/70 text-lg">From our kitchen to yours — always fresh, always pure. Perfect for breakfast, lunch, dinner, or snacks.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-7">
          {products.map((p) => (
            <motion.div key={p.name} variants={fadeUp} whileHover={{ y: -10 }}
              className="group bg-[#FBF7F0] rounded-[2rem] overflow-hidden border border-[#B84A2B]/10 hover:premium-shadow-lg transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-[#2C5F3F] text-white border-0 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                    <Leaf className="h-3 w-3 mr-1" /> {p.tag}
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
      title: 'Thoughtfully Selected Ingredients',
      desc: 'We begin with heritage rice, millets, lentils, and methi (fenugreek seeds) for our batters, and carefully selected spices, seeds, herbs, aromatics - ginger & garlic, coconut, and olive oil for our dips, sauces, and chutneys.',
      img: IMG.lentils,
      tag: '01',
      accent: '#B84A2B',
      bg: 'from-white via-[#FBF7F0] to-white',
    },
    {
      id: 'stage-2',
      title: 'Patient Soaking',
      desc: 'Each grain and lentil is soaked with time and care, allowing the ingredients to soften naturally before grinding.',
      img: IMG.lentils2,
      tag: '02',
      accent: '#C9763A',
      bg: 'from-[#FBF7F0] via-[#F5EEDC] to-[#FBF7F0]',
    },
    {
      id: 'stage-3',
      title: 'Careful Grinding',
      desc: 'The soaked ingredients are ground to a precise texture to help create the right balance of body, lightness, and consistency.',
      img: IMG.grinding,
      tag: '03',
      accent: '#C9A961',
      bg: 'from-[#F5EEDC] via-[#F0E6CB] to-[#F5EEDC]',
    },
    {
      id: 'stage-4',
      title: 'Balanced Mixing',
      desc: 'The ingredients are blended in the right proportion to form the base of every Mangalam Foods batter.',
      img: IMG.water,
      tag: '04',
      accent: '#8DA663',
      bg: 'from-[#F0E6CB] via-[#EAE5D0] to-[#F0E6CB]',
    },
    {
      id: 'stage-5',
      title: 'Natural Fermentation',
      desc: 'There are no shortcuts here. Our batters are naturally fermented to develop lightness, flavor, and gut-friendly goodness.',
      img: IMG.millets,
      tag: '05',
      accent: '#2C5F3F',
      bg: 'from-[#EAE5D0] via-[#E5E8D8] to-[#EAE5D0]',
    },
    {
      id: 'stage-6',
      title: 'Fresh Dips, Sauces & Chutneys',
      desc: 'Our dips, sauces, and chutneys are prepared with ingredients, vegetables, lentils, spices, seeds, herbs, aromatics - ginger & garlic, coconut, and olive oil that bring freshness, depth, natural nourishment, and good fats to every spoonful.',
      img: IMG.spread,
      tag: '06',
      accent: '#4A7A4F',
      bg: 'from-[#E5E8D8] via-[#EFEAD9] to-[#E5E8D8]',
    },
    {
      id: 'stage-7',
      title: 'Packed with Care',
      desc: 'Each batch is packed, weighed, sealed, and checked to ensure freshness and quality in every container.',
      img: IMG.packaging,
      tag: '07',
      accent: '#B84A2B',
      bg: 'from-[#EFEAD9] via-[#F5EEDC] to-[#FBF7F0]',
    },
    {
      id: 'stage-8',
      title: 'Ready for Your Table',
      desc: 'From our kitchen to yours, Mangalam Foods makes it easier to serve fresh, nourishing meals with confidence.',
      img: US_TRUCK,
      tag: '08',
      accent: '#8E3520',
      bg: 'from-[#FBF7F0] via-white to-white',
      isFinal: true,
    },
  ];

  return (
    <section id="peek" className="bg-white">
      {/* HERO BANNER */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF7F0] via-[#F5EEDC] to-[#EAE5D0]" />
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#B84A2B]/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2C5F3F]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#C9A961]/20 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.72 0 0 0 0 0.29 0 0 0 0 0.17 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }} />

        <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute top-24 left-16 text-[#C9A961]/40 hidden md:block">
          <Wheat className="h-16 w-16" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-24 right-16 text-[#2C5F3F]/40 hidden md:block">
          <Leaf className="h-14 w-14" />
        </motion.div>

        <div className="container relative z-10 text-center max-w-3xl py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur border border-[#B84A2B]/15 mb-8 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#C9A961]" />
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#8E3520]">Our Process</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] text-[#1A1410] mb-8">
              A Peek Into
              <br />
              <span className="italic bg-gradient-to-r from-[#B84A2B] via-[#C9A961] to-[#2C5F3F] bg-clip-text text-transparent">
                Our Kitchen
              </span>
            </h2>
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
              From our kitchen to your table, every Mangalam Foods product follows two simple rules: keep it safe, and keep it preservative-free.
            </p>
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
              Our batter process begins with carefully selected heritage rice, millets, lentils, and methi (fenugreek seeds). Each ingredient is handled with care, soaked patiently, ground to the right consistency, blended in balance, and naturally fermented without shortcuts.
            </p>
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
              Our dips, sauces, and chutneys are crafted separately using thoughtfully selected lentils, vegetables, spices, seeds, herbs, aromatics - ginger &amp; garlic, coconut, and olive oil to create bold, nourishing accompaniments full of natural flavor, whole-food goodness, and good fats.
            </p>
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Every batch is packed, sealed, and checked with attention to freshness, quality, and consistency — so what reaches your home is clean, honest food made with purpose.
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

      {/* STAGES */}
      {stages.map((s, i) => {
        const prev = i > 0 ? stages[i - 1].id : null;
        const next = i < stages.length - 1 ? stages[i + 1].id : null;
        const imageLeft = i % 2 === 0;
        return (
          <section key={s.id} id={s.id}
            className={`relative bg-gradient-to-br ${s.bg} py-24 md:py-32 overflow-hidden`}>
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

                <div className="relative md:[direction:ltr]">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}
                    className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden premium-shadow-lg">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 mix-blend-multiply opacity-15"
                      style={{ background: `linear-gradient(135deg, ${s.accent} 0%, transparent 60%)` }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1410]/25 via-transparent to-transparent" />
                  </motion.div>
                  <div className="absolute -top-8 -left-4 md:-left-12 font-display font-bold text-3xl h-24 w-24 rounded-3xl grid place-items-center premium-shadow-lg ring-4 ring-white text-white"
                    style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}DD)` }}>
                    {s.tag}
                  </div>
                </div>

                <div className="md:[direction:ltr]">
                  <div className="text-xs font-bold tracking-[0.35em] mb-5" style={{ color: s.accent }}>
                    STEP {s.tag} <span className="opacity-40">/ 08</span>
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
        <motion.img
          src={img}
          alt={name}
          initial={kb.initial}
          animate={kb.animate}
          transition={{ duration: dur, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />
        <motion.div
          aria-hidden="true"
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"
        />
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
    const text = encodeURIComponent('See where our food comes from — Mangalam Foods Live Kitchen');
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-[#C9A961]/30 backdrop-blur mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3B30]" />
            </span>
            <Eye className="h-4 w-4 text-[#C9A961]" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#C9A961]">The Mangalam Live Kitchen</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-[1.05] text-balance">
            Trust begins with <span className="italic text-[#C9A961]">transparency.</span>
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-5">
            At Mangalam Foods, we believe customers should know how their food is made. Our kitchen is designed around cleanliness, careful handling, ingredient integrity, and process discipline.
          </p>
          <p className="text-white/65 text-base leading-relaxed mb-5">
            From ingredient selection to soaking, grinding, fermentation, preparation, packing, and storage, every step is guided by food safety, freshness, and care.
          </p>
          <p className="text-white/65 text-base leading-relaxed">
            This is more than production. It is a kitchen built on trust.
          </p>
          <div className="inline-flex items-center gap-2 mt-7 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur">
            <Clock className="h-3.5 w-3.5 text-[#C9A961]" />
            <LiveClock className="text-xs text-white/80 tracking-wider" />
          </div>
        </motion.div>

        {/* FEATURED TOUR CARD */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto mb-16 rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur group">
          <div className="aspect-[21/9] relative overflow-hidden">
            <img src={FACTORY_IMG.cmo} alt="Mangalam Foods kitchen — built on trust" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              style={{ filter: 'contrast(0.95) saturate(0.9) brightness(0.85)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
                  Live Kitchen
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Our Kitchen. Your Confidence.
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                  Every step — from raw ingredient to packed product — is handled with the same care we would give our own family&rsquo;s food.
                </p>
                <a href="#contact">
                  <Button size="lg" className="rounded-full bg-[#C9A961] hover:bg-[#A8893F] text-[#1A1410] font-bold px-7 py-6 w-fit">
                    Request a Kitchen Tour <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CAMERA GRID */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {zones.map((z, i) => (
            <CameraTile key={z.name} name={z.name} img={z.img} caption={z.caption} idx={i} />
          ))}
        </motion.div>

        {/* SHARE */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 text-center">
          <p className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
            Share the view with <span className="italic text-[#C9A961]">friends & family!</span>
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const steps = [
    { icon: Wheat, title: 'Thoughtfully Selected Ingredients', desc: 'We begin with heritage rice, millets, lentils, and methi (fenugreek seeds) for our batters, and carefully selected spices, seeds, herbs, aromatics - ginger & garlic, coconut, and olive oil for our dips, sauces, and chutneys.' },
    { icon: Droplets, title: 'Patient Soaking', desc: 'Each grain and lentil is soaked with time and care, allowing the ingredients to soften naturally before grinding.' },
    { icon: Sprout, title: 'Careful Grinding', desc: 'The soaked ingredients are ground to a precise texture to help create the right balance of body, lightness, and consistency.' },
    { icon: Soup, title: 'Balanced Mixing', desc: 'The ingredients are blended in the right proportion to form the base of every Mangalam Foods batter.' },
    { icon: FlaskConical, title: 'Natural Fermentation', desc: 'There are no shortcuts here. Our batters are naturally fermented to develop lightness, flavor, and gut-friendly goodness.' },
    { icon: ShieldCheck, title: 'Fresh Dips, Sauces & Chutneys', desc: 'Our dips, sauces, and chutneys are prepared with ingredients, vegetables, lentils, spices, seeds, herbs, aromatics - ginger & garlic, coconut, and olive oil that bring freshness, depth, natural nourishment, and good fats to every spoonful.' },
    { icon: Package, title: 'Packed with Care', desc: 'Each batch is packed, weighed, sealed, and checked to ensure freshness and quality in every container.' },
    { icon: Truck, title: 'Ready for Your Table', desc: 'From our kitchen to yours, Mangalam Foods makes it easier to serve fresh, nourishing meals with confidence.' },
  ];
  return (
    <section id="process" className="py-24 md:py-32 grain-bg relative overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Our Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            From Grain to <span className="italic text-[#2C5F3F]">Your Table</span>
          </h2>
          <p className="text-foreground/70 text-lg">Eight careful steps. One promise of freshness.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#B84A2B]/10 md:-translate-x-1/2 rounded-full" />
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[#B84A2B] via-[#C9A961] to-[#2C5F3F] md:-translate-x-1/2 origin-top rounded-full z-0"
            style={{ scaleY: scrollYProgress, bottom: 0 }}
          />

          {steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.5, type: 'spring' }}
              className={`relative mb-12 flex items-center group ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>

              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="h-16 w-16 rounded-full bg-white grid place-items-center premium-shadow-lg ring-4 ring-white border-2 border-[#C9A961]/20">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#B84A2B] to-[#8E3520] grid place-items-center text-white shadow-inner">
                    <s.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                </div>
              </div>

              <div className={`pl-28 md:pl-0 md:w-[42%] ${i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}>
                  <div className="inline-block text-xs font-bold tracking-widest text-[#C9A961] mb-2">STEP {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-display text-2xl font-bold text-[#1A1410] mb-3 group-hover:text-[#B84A2B] transition-colors">{s.title}</h3>
                  <p className="text-foreground/70 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm">{s.desc}</p>
                </motion.div>
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
    { icon: ShieldCheck, title: 'Gluten-Free', desc: 'Formulated without wheat, barley, or rye.', color: '#B84A2B' },
    { icon: Heart, title: 'Vegan', desc: 'Plant-based and dairy-free.', color: '#2C5F3F' },
    { icon: Leaf, title: 'Preservative-Free', desc: 'Made without artificial preservatives or unnecessary additives.', color: '#C9A961' },
    { icon: FlaskConical, title: 'Naturally Fermented', desc: 'Our batters are fermented slowly and carefully to support flavor, texture, and easier digestion.', color: '#B84A2B' },
    { icon: Heart, title: 'Gut-Friendly', desc: 'Crafted through a traditional fermentation process that supports a lighter, more digestible eating experience.', color: '#2C5F3F' },
    { icon: Sprout, title: 'Protein-Rich Batters', desc: 'Made with lentils, millets, heritage rice, and methi (fenugreek seeds), our batters naturally support plant-based protein and everyday nourishment.', color: '#C9A961' },
    { icon: Leaf, title: 'Nutrient-Rich Dips, Sauces & Chutneys', desc: 'Our dips, sauces, and chutneys are made with vegetables, lentils, spices, seeds, herbs, aromatics - ginger & garlic, coconut, and olive oil that naturally contain vitamins, minerals, antioxidants, anti-inflammatory properties, and good fats.', color: '#B84A2B' },
    { icon: Wheat, title: 'Made with Heritage Ingredients', desc: 'Prepared with heritage rice, millets, lentils, methi (fenugreek seeds), and carefully selected whole-food ingredients.', color: '#2C5F3F' },
    { icon: Clock, title: 'Fresh & Ready to Cook', desc: 'Convenient enough for busy homes, thoughtful enough for the table.', color: '#C9A961' },
  ];
  return (
    <section id="benefits" className="py-24 md:py-32 bg-gradient-to-br from-[#FBF7F0] via-white to-[#F5EEDC]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Our Promise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Clean, Honest <span className="italic text-[#2C5F3F]">Food</span>
          </h2>
          <p className="text-foreground/70 text-lg">Every Mangalam Foods product is made to nourish — rooted in heritage grains, naturally fermented, and crafted with whole-food ingredients you can trust.</p>
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

/* -------------------------------- ABOUT US -------------------------------- */
const AboutUs = () => (
  <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-[#B84A2B]/10">
    <div className="container max-w-4xl mx-auto text-center">
      <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">About Us</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-8">
        Mangalam means <span className="italic text-[#2C5F3F]">auspiciousness</span>, blessing, and good fortune.
      </h2>
      <p className="text-lg text-foreground/70 leading-relaxed mb-6 text-balance">
        Mangalam Foods was created to bring fresh, naturally fermented, heritage-grain foods to more tables. Built on years of culinary experience and a deep belief in clean, honest food, Mangalam Foods is rooted in tradition, strengthened by thoughtful production, and designed for modern living.
      </p>
      <p className="text-lg text-foreground/70 leading-relaxed mb-6 text-balance">
        Our vision is to create a food company that nourishes people, respects ingredients, supports community, and makes high-quality fresh foods more accessible.
      </p>
      <p className="text-lg text-foreground/70 leading-relaxed text-balance">
        As a woman-owned and minority-owned business based in Massachusetts, Mangalam Foods is committed to building a company with purpose — one that values freshness, transparency, sustainability, and care at every step.
      </p>
    </div>
  </section>
);

/* -------------------------------- OUR MISSION -------------------------------- */
const Mission = () => (
  <section className="py-20 md:py-28 bg-[#1A1410] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23C9A961' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")` }} />
    <div className="container relative text-center max-w-3xl mx-auto">
      <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#C9A961] mb-4">Our Mission</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10 max-w-2xl text-balance">
        To create a sustainable Product, community-driven food company that:
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 text-left mb-10">
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">Celebrates heritage ingredients</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">Supports local ecosystems</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">Reduces food waste</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">Creates nourishing, convenient foods</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">Builds strong partnerships</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="h-5 w-5 text-[#C9A961] shrink-0" />
            <span className="text-white/90 font-medium">Feeds and uplifts communities in need</span>
          </div>
      </div>
      <p className="text-xl md:text-2xl text-white/80 italic font-display">
        &ldquo;For Mangalam Foods, food is not just a product. It is a responsibility, a connection, and a blessing worth sharing.&rdquo;
      </p>
    </div>
  </section>
);

/* ------------------------------ JOIN THE JOURNEY ------------------------------ */
const JoinJourney = () => (
  <section className="py-24 bg-[#FAF5EB] border-y border-[#B84A2B]/10 text-center">
    <div className="container max-w-3xl">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
        Join the <span className="italic text-[#B84A2B]">Journey</span>
      </h2>
      <p className="text-lg text-foreground/70 leading-relaxed mb-6">
        Mangalam Foods is just beginning, but our purpose is clear: to nourish people, respect ingredients, and bring heritage-grain tradition to modern tables.
      </p>
      <p className="text-lg text-foreground/70 leading-relaxed mb-4">
        Whether through a pack of batter, a fresh chutney, a sauce, a catered meal, or a community partnership, every step forward is part of something larger.
      </p>
      <p className="text-lg font-semibold text-[#8E3520] leading-relaxed mb-10">
        Mangalam Foods — A Blessing at Every Table.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#contact">
          <Button size="lg" className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-8 py-6 text-base premium-shadow">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
        <a href="/pop-up-events">
          <Button size="lg" variant="outline" className="rounded-full border-2 border-[#2C5F3F] text-[#2C5F3F] hover:bg-[#2C5F3F] hover:text-white px-8 py-6 text-base">
            Book a Pop-Up Event <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------ TESTIMONIALS ------------------------------ */
const Testimonials = () => {
  const reviews = [
    { name: 'Priya Sharma', role: 'Mother of 2', text: 'My kids love the IDLI I make from Mangalam batter. The freshness is unbelievable — just like my grandmother used to make!', rating: 5 },
    { name: 'Rajesh Iyer', role: 'Software Engineer', text: 'I tried every brand. Mangalam is the only one that tastes truly fresh and authentic. The dosa crisps up perfectly every single time.', rating: 5 },
    { name: 'Lakshmi Menon', role: 'Home Chef', text: 'No preservatives, naturally fermented, and unbelievably consistent. This is the real fresh batter we have been waiting for.', rating: 5 },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#1A1410] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23C9A961' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#C9A961] mb-4">Customer Love</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="italic text-[#C9A961]">Families</span> Everywhere
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
    { q: 'How long does the batter stay fresh?', a: 'When refrigerated at or below 4°C, our batter stays fresh for 5–7 days from manufacturing date. Always check the date printed on the pack.' },
    { q: 'Do you use any preservatives?', a: 'Absolutely not. We use 100% natural ingredients and traditional fermentation — no preservatives, no artificial additives, no chemicals.' },
    { q: 'What products does Mangalam Foods currently offer?', a: 'We currently offer Fresh Batters (IDLI Batter, Dosa Batter, Millets Batter — which includes the wholesome goodness of Ragi within our millet blend), Fresh Dips, Fresh Sauces, and Fresh Chutneys. All products are made fresh without preservatives.' },
    { q: 'Where is Mangalam Foods available?', a: 'We are based in Sudbury, MA and serve the greater New England area. For institutional & catering orders nationwide, please contact us directly. All products are USDA Organic, FDA Registered and HACCP Certified.' },
    { q: 'How should I store the batter?', a: 'Keep it refrigerated at all times. Once opened, give it a gentle stir before use. Do not freeze. Use within the date printed on the pack.' },
    { q: 'Is the batter gluten-free and vegan?', a: 'Yes! Our naturally fermented batters are gluten-free (made without wheat, barley, or rye) and vegan (plant-based and dairy-free). Our Millets Batter, which includes Ragi among other heritage millets, is especially nutrient-dense.' },
    { q: 'Can I place bulk or institutional orders?', a: 'Yes! We specialise in scalable catering and institutional accounts. Reach out via the contact form below.' },
    { q: 'Do you do Pop-Up Events?', a: 'Yes! Mangalam Foods offers live pop-up food stations for corporate events, weddings, private parties, community events, and more. Visit our Pop-Up Events page or contact us to book.' },
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
      toast.success(data.message || 'Thank you! We\'ll get back to you soon.');
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
          <p className="text-foreground/70 text-lg">Whether you&rsquo;re a home customer, institutional buyer, or interested in a Pop-Up Event — we&rsquo;d love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-[#B84A2B]/10 premium-shadow-lg">
              <img src={IMG.bringTradition} alt="Mangalam Foods — Freshness for your table" className="w-full h-auto object-cover" />
            </div>

            <div className="space-y-4">
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
            </div>
          </motion.div>

          <motion.form onSubmit={submit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl border border-[#B84A2B]/10 premium-shadow space-y-5">
            <h3 className="font-display text-2xl font-bold text-[#1A1410] mb-2">Send us a message</h3>
            <p className="text-sm text-foreground/60 mb-6">We typically respond within 24 hours.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Your Name *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith"
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
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Interested In</label>
                <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full h-12 rounded-xl border border-[#B84A2B]/20 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B84A2B]">
                  <option value="">Select a product / service</option>
                  <option>Fresh IDLI Batter</option>
                  <option>Fresh Dosa Batter</option>
                  <option>Fresh Millets Batter</option>
                  <option>Fresh Dips</option>
                  <option>Fresh Sauces</option>
                  <option>Fresh Chutneys</option>
                  <option>Pop-Up Event Booking</option>
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
              {loading ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
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
            <LogoMark className="h-32 w-32" />
            <div className="mt-4">
              <div className="font-display text-xl font-bold text-white">Mangalam Foods</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">A Blessing at Every Table</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/60 leading-relaxed text-center md:text-left">
            Fresh, naturally fermented batters, dips, sauces & chutneys — preservative-free, gluten-free, vegan.
          </p>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'About', href: '#about' },
              { label: 'Products', href: '#products' },
              { label: 'Process', href: '#peek' },
              { label: 'Benefits', href: '#benefits' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
              { label: 'Pop-Up Events', href: '/pop-up-events' },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-[#C9A961] transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white mb-4">Products</div>
          <ul className="space-y-2 text-sm">
            {[
              'Fresh IDLI Batter',
              'Fresh Dosa Batter',
              'Fresh Millets Batter',
              'Fresh Dips',
              'Fresh Sauces',
              'Fresh Chutneys',
            ].map((l) => (
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
export default function App() {
  return (
    <main className="bg-[#FBF7F0] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <About />
      <Mission />
      <WhyChooseUs />
      <Products />
      <PeekIntoKitchen />
      <TransparenSee />
      <Process />
      <Quality />
      <OurPromise />
      <JoinJourney />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
