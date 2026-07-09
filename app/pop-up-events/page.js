'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, CheckCircle2, Star, MapPin, Phone, Mail,
  Send, Wheat, Leaf, ChefHat, UtensilsCrossed, Users, Heart,
  Calendar, Clock, Menu as MenuIcon, X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ---- Images ---- */
const POP_IMGS = {
  hero: 'https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxkb3NhfGVufDB8fHx8MTc4Mjc1MzY5M3ww&ixlib=rb-4.1.0&q=85',
  dosa: 'https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxkb3NhfGVufDB8fHx8MTc4Mjc1MzY5M3ww&ixlib=rb-4.1.0&q=85',
  idli: 'https://images.unsplash.com/photo-1730191843435-073792ba22bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxpZGxpfGVufDB8fHx8MTc4Mjc1MzY5NHww&ixlib=rb-4.1.0&q=85',
  uttapam: 'https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxpZGxpfGVufDB8fHx8MTc4Mjc1MzY5NHww&ixlib=rb-4.1.0&q=85',
  chutney: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  event: 'https://images.pexels.com/photos/35514447/pexels-photo-35514447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  dosapour: 'https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  spread: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
};

const LogoMark = ({ className = 'h-16 w-16' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <img src="/logo.png?v=2" alt="Mangalam Foods Logo" className="w-full h-full object-contain" />
  </div>
);

/* ---- Navbar ---- */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#products', label: 'Products' },
    { href: '/#peek', label: 'Process' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' },
  ];
  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className="sticky top-0 inset-x-0 z-50 bg-white border-b border-[#B84A2B]/10 py-2 shadow-sm"
    >
      <div className="container flex h-32 items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
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
          <a href="#book" className="ml-3">
            <Button className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-6 shadow-md">
              Book a Pop-Up <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full bg-white/80 border border-[#B84A2B]/20">
          {open ? <X className="h-5 w-5 text-[#B84A2B]" /> : <MenuIcon className="h-5 w-5 text-[#B84A2B]" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white/95 border-t border-[#B84A2B]/10">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground/80 hover:bg-[#FAF5EB] hover:text-[#B84A2B] font-medium">
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl bg-[#B84A2B] text-white font-medium text-center mt-1">
              Book a Pop-Up
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};

/* ---- Hero ---- */
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={POP_IMGS.hero} alt="Mangalam Foods Pop-Up Event" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1410]/90 via-[#1A1410]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/60 via-transparent to-transparent" />
    </div>

    {/* Decorative grain overlay */}
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.72 0 0 0 0 0.29 0 0 0 0 0.17 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
    }} />

    {/* Floating decorations */}
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className="absolute top-40 right-20 text-[#C9A961]/20 hidden md:block"><Wheat className="h-20 w-20" /></motion.div>
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-32 right-40 text-white/10 hidden md:block"><Leaf className="h-16 w-16" /></motion.div>

    <div className="container relative z-10 py-32">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
          <Sparkles className="h-4 w-4 text-[#C9A961]" />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#C9A961]">Pop-Up Events by Mangalam Foods</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white text-balance mb-6">
          Fresh. Interactive. <span className="italic text-[#C9A961]">Made Live</span> for Your Guests.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-4 max-w-xl">
          Bring the Mangalam Foods experience to your next event with our fresh, live pop-up food stations.
        </motion.p>
        <motion.p variants={fadeUp} className="text-base text-white/70 leading-relaxed mb-8 max-w-xl">
          Our pop-up events are designed for corporate gatherings, catering events, weddings, private parties, community events, office lunches, wellness events, and special celebrations. Each setup features made-to-order dishes prepared from our signature naturally fermented batters, paired with fresh chutneys, podis, and condiments.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <a href="#book">
            <Button size="lg" className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-8 py-6 text-base premium-shadow">
              Book a Pop-Up <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#menu">
            <Button size="lg" variant="outline" className="rounded-full border-2 border-white/40 text-white hover:bg-white hover:text-[#1A1410] px-8 py-6 text-base">
              See the Menu
            </Button>
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
          {[
            { icon: CheckCircle2, label: 'Gluten-Free & Vegan' },
            { icon: CheckCircle2, label: 'Made-to-Order Live' },
            { icon: CheckCircle2, label: 'Customizable Menus' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <b.icon className="h-4 w-4 text-[#C9A961]" /> <span>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ---- What Is a Pop-Up ---- */
const WhatIsPopUp = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">What We Offer</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
          What Is a Mangalam Foods <span className="italic text-[#2C5F3F]">Pop-Up?</span>
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          A Mangalam Foods pop-up is a <strong className="text-[#8E3520]">live food experience</strong> where our team prepares fresh menu items on-site using our gluten-free, vegan, naturally fermented batters made from heritage rice, millets, lentils, and methi.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Guests can enjoy hot, fresh, made-to-order items such as dosas, idlis, uttapams, dosa waffles, dosa tacos, punugullu, idli burgers, and more — served with our house-made chutneys, podis, and condiments.
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-8 italic font-display text-[#2C5F3F]">
          It is perfect for events where food is not just served, but experienced.
        </p>
        <a href="#book">
          <Button className="rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white px-6">
            Book Your Pop-Up <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="grid grid-cols-2 gap-4">
          {[
            { img: POP_IMGS.dosapour, alt: 'Live Dosa Station' },
            { img: POP_IMGS.idli, alt: 'Fresh IDLI served at pop-up' },
            { img: POP_IMGS.uttapam, alt: 'Uttapam made to order' },
            { img: POP_IMGS.chutney, alt: 'House-made chutneys and condiments' },
          ].map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}
              className={`rounded-2xl overflow-hidden premium-shadow ${i === 0 ? 'aspect-[4/3]' : i === 3 ? 'aspect-[4/3]' : 'aspect-square'}`}>
              <img src={img.img} alt={img.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---- Perfect For ---- */
const PerfectFor = () => {
  const occasions = [
    'Corporate Events', 'Office Lunches', 'Employee Appreciation Events', 'Weddings',
    'Private Parties', 'Birthday Celebrations', 'Community Events', 'Cultural Events',
    'Wellness Events', 'Catering Activations', 'Brand Launches', 'Festive Gatherings',
  ];
  return (
    <section className="py-24 md:py-32 grain-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Perfect For</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Every Event. Every <span className="italic text-[#2C5F3F]">Occasion.</span>
          </h2>
          <p className="text-foreground/70 text-lg">Whether you are planning an intimate gathering or a large-scale event, our pop-up format creates a warm, interactive, and memorable dining experience.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3">
          {occasions.map((o, i) => (
            <motion.div key={o} variants={fadeUp} whileHover={{ y: -4, scale: 1.05 }}
              className="bg-white px-6 py-3 rounded-full border border-[#B84A2B]/15 premium-shadow text-sm font-semibold text-[#1A1410] hover:border-[#B84A2B] hover:text-[#B84A2B] transition-all cursor-default">
              {o}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---- Why Choose a Pop-Up ---- */
const WhyChoose = () => {
  const reasons = [
    { icon: Users, title: 'Live & Interactive', desc: 'Guests enjoy freshly prepared food made right in front of them.' },
    { icon: ChefHat, title: 'Fresh & Made-to-Order', desc: 'Each item is prepared hot and served fresh for the best flavor and texture.' },
    { icon: Leaf, title: 'Gluten-Free & Vegan Options', desc: 'Our batters are naturally gluten-free and vegan, making them suitable for a variety of dietary preferences.' },
    { icon: UtensilsCrossed, title: 'Customizable Menus', desc: 'Choose from classic, modern, and creative menu options based on your event style.' },
    { icon: Heart, title: 'Perfect for Sharing', desc: 'Our menu works beautifully for small plates, stations, passed bites, or casual buffet-style service.' },
    { icon: Star, title: 'Memorable Guest Experience', desc: 'A pop-up station adds energy, aroma, movement, and conversation to any event.' },
  ];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Why Choose a Pop-Up?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            An Experience Your Guests <span className="italic text-[#2C5F3F]">Won't Forget</span>
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <motion.div key={r.title} variants={fadeUp} whileHover={{ y: -8 }}
              className="group bg-[#FBF7F0] rounded-3xl p-8 border border-[#B84A2B]/10 hover:premium-shadow-lg transition-all duration-500">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-white to-[#F5EEDC] grid place-items-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <r.icon className="h-7 w-7 text-[#B84A2B]" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-bold text-xl text-[#8E3520] mb-3">{r.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---- Pop-Up Menu ---- */
const PopUpMenu = () => {
  const menuItems = [
    { name: 'Dosa', desc: 'Crisp, golden crepes made fresh from our naturally fermented batter.', img: POP_IMGS.dosa },
    { name: 'Idli', desc: 'Soft, steamed rice cakes served warm with chutneys and condiments.', img: POP_IMGS.idli },
    { name: 'Uttapam', desc: 'Savory griddle cakes with optional toppings and fresh accompaniments.', img: POP_IMGS.uttapam },
    { name: 'Dosa Waffles', desc: 'A modern twist on our classic batter — crisp outside, soft inside, and perfect for creative toppings.', img: POP_IMGS.dosapour },
    { name: 'Dosa Tacos', desc: 'Crisp dosa shells filled with flavorful toppings, chutneys, and fresh garnishes.', img: POP_IMGS.dosa },
    { name: 'Punugullu', desc: 'Fried idli batter bites that are crisp, savory, and perfect as a party snack.', img: POP_IMGS.event },
    { name: 'Idli Burger', desc: 'A creative handheld option made with soft idlis and flavorful fillings.', img: POP_IMGS.idli },
    { name: 'Tandoori Spiced Idli', desc: 'A bold, spiced version of idli with a flavorful finish.', img: POP_IMGS.uttapam },
  ];

  const condiments = [
    'Coconut chutney', 'Tomato chutney', 'Podi', 'Curry leaf podi',
    'Seasonal chutneys', 'Signature sauces', 'Fresh condiments', 'Custom event pairings',
  ];

  return (
    <section id="menu" className="py-24 md:py-32 bg-gradient-to-b from-[#1A1410] to-[#0E0906] text-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#C9A961] mb-4">Pop-Up Menu Options</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Signature <span className="italic text-[#C9A961]">Batter-Based Favorites</span>
          </h2>
          <p className="text-white/70 text-lg">Made-to-order, hot and fresh — every item prepared live at your event.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {menuItems.map((item) => (
            <motion.div key={item.name} variants={fadeUp} whileHover={{ y: -8 }}
              className="group bg-white/5 backdrop-blur rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9A961]/40 transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-[#C9A961] text-[#1A1410] border-0 text-[10px] font-bold uppercase tracking-wider">
                    Made Live
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chutneys, Podis & Condiments */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#C9A961] mb-3">Accompaniments</span>
            <h3 className="font-display text-3xl font-bold text-white">Chutneys, Podis & Condiments</h3>
            <p className="text-white/60 mt-3">Our pop-up menu is served with house-made accompaniments designed to complement every dish with layers of flavor, texture, and freshness.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {condiments.map((c) => (
              <div key={c} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#C9A961] shrink-0" />
                <span className="text-sm text-white/80 font-medium">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---- Sample Formats ---- */
const SampleFormats = () => {
  const formats = [
    {
      title: 'Live Dosa Station',
      desc: 'Fresh dosas made on-site with chutneys, podis, and optional fillings.',
      icon: ChefHat,
      accent: '#B84A2B',
    },
    {
      title: 'Idli & Chutney Bar',
      desc: 'Soft idlis served with a variety of house-made chutneys and podis.',
      icon: UtensilsCrossed,
      accent: '#2C5F3F',
    },
    {
      title: 'Modern Batter Bites Station',
      desc: 'Dosa waffles, dosa tacos, punugullu, idli burgers, and tandoori spiced idli.',
      icon: Sparkles,
      accent: '#C9A961',
    },
    {
      title: 'Corporate Lunch Pop-Up',
      desc: 'A streamlined setup for office lunches, employee events, and workplace gatherings.',
      icon: Users,
      accent: '#B84A2B',
    },
    {
      title: 'Wedding & Celebration Pop-Up',
      desc: 'A customized live station designed for cocktail hour, brunch events, welcome dinners, or late-night bites.',
      icon: Heart,
      accent: '#2C5F3F',
    },
    {
      title: 'Custom Format',
      desc: 'Every event is different — we design a pop-up experience tailored to your guest count, style, and venue.',
      icon: Star,
      accent: '#C9A961',
    },
  ];

  return (
    <section className="py-24 md:py-32 grain-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Sample Pop-Up Formats</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            A Format for <span className="italic text-[#2C5F3F]">Every Event</span>
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map((f) => (
            <motion.div key={f.title} variants={fadeUp} whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 border border-[#B84A2B]/10 hover:premium-shadow-lg transition-all duration-500">
              <div className="h-14 w-14 rounded-2xl grid place-items-center mb-5 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: `${f.accent}15` }}>
                <f.icon className="h-7 w-7" style={{ color: f.accent }} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-bold text-xl text-[#1A1410] mb-3">{f.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---- Customize Your Event ---- */
const CustomizeEvent = () => {
  const options = [
    'Live stations',
    'Buffet-style service',
    'Passed appetizers',
    'Brunch pop-ups',
    'Cocktail-hour bites',
    'Late-night snack stations',
    'Corporate lunch setups',
    'Wedding menu additions',
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Customize Your Event</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
            Built Around <span className="italic text-[#2C5F3F]">Your Vision</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Every event is different, and we are happy to help design a pop-up menu that fits your guest count, event style, dietary needs, service format, and venue setup. We can create:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {options.map((o) => (
              <motion.div key={o} whileHover={{ scale: 1.05 }}
                className="bg-[#FBF7F0] px-5 py-3 rounded-full border border-[#B84A2B]/15 text-sm font-semibold text-[#1A1410] hover:border-[#B84A2B] hover:text-[#B84A2B] transition-all cursor-default">
                {o}
              </motion.div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden premium-shadow-lg">
            <img src={POP_IMGS.spread} alt="Customize your Mangalam Foods Pop-Up Event" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/80 via-[#1A1410]/30 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-center pb-10 px-6">
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  &ldquo;Freshly made. Beautifully served. A blessing at every table.&rdquo;
                </p>
                <a href="#book">
                  <Button className="rounded-full bg-[#C9A961] hover:bg-[#A8893F] text-[#1A1410] font-bold px-8">
                    Customize Your Pop-Up <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---- Booking Form ---- */
const BookingForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventDate: '', eventLocation: '',
    eventType: '', guestCount: '', serviceStyle: '', dietaryPrefs: '',
    menuItems: '', message: '',
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your name, email, and phone number.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, product: 'Pop-Up Event Booking', message: `Event Details:\nDate: ${form.eventDate}\nLocation: ${form.eventLocation}\nType: ${form.eventType}\nGuests: ${form.guestCount}\nService Style: ${form.serviceStyle}\nDietary Prefs: ${form.dietaryPrefs}\nMenu Items of Interest: ${form.menuItems}\n\nAdditional Message: ${form.message}` }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      toast.success('Thank you! Our team will get back to you with availability, menu options, and next steps.');
      setForm({ name: '', email: '', phone: '', eventDate: '', eventLocation: '', eventType: '', guestCount: '', serviceStyle: '', dietaryPrefs: '', menuItems: '', message: '' });
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-24 md:py-32 bg-gradient-to-br from-[#FBF7F0] via-white to-[#F5EEDC]">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Book a Pop-Up</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Make Your Next Event <span className="italic text-[#2C5F3F]">Unforgettable</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            To book a Mangalam Foods pop-up event, please contact us with your event date, location, estimated guest count, event type, and preferred menu style. Our team will work with you to create a customized pop-up experience for your guests.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info sidebar */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-6">
            <div className="relative rounded-3xl overflow-hidden premium-shadow-lg">
              <img src={POP_IMGS.event} alt="Mangalam Foods Pop-Up Event" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/60 to-transparent" />
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#B84A2B]/10 premium-shadow">
              <h3 className="font-display text-xl font-bold text-[#1A1410] mb-6">Booking Inquiry</h3>
              <p className="text-foreground/70 mb-5">Interested in hosting a Mangalam Foods Pop-Up? Please share:</p>
              {[
                'Event date',
                'Event location',
                'Type of event',
                'Estimated number of guests',
                'Preferred service style',
                'Dietary preferences or restrictions',
                'Menu items of interest',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="h-4 w-4 text-[#2C5F3F] shrink-0" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-[#B84A2B]/10 space-y-3">
                <a href="tel:+17742875154" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#B84A2B] transition-colors">
                  <Phone className="h-4 w-4 text-[#B84A2B]" /> +1 774-287-5154
                </a>
                <a href="mailto:Admin@mangalamfoods.us" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#B84A2B] transition-colors">
                  <Mail className="h-4 w-4 text-[#B84A2B]" /> Admin@mangalamfoods.us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={submit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl border border-[#B84A2B]/10 premium-shadow space-y-5">
            <h3 className="font-display text-2xl font-bold text-[#1A1410] mb-2">Pop-Up Event Inquiry</h3>
            <p className="text-sm text-foreground/60 mb-6">We typically respond within 24 hours with availability and next steps.</p>

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
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Phone *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000"
                  className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Event Date</label>
                <Input type="date" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                  className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Event Location</label>
                <Input value={form.eventLocation} onChange={(e) => setForm({ ...form, eventLocation: e.target.value })} placeholder="City, State or Venue"
                  className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Type of Event</label>
                <select value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className="w-full h-12 rounded-xl border border-[#B84A2B]/20 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B84A2B]">
                  <option value="">Select event type</option>
                  <option>Corporate Event</option>
                  <option>Office Lunch</option>
                  <option>Wedding</option>
                  <option>Private Party</option>
                  <option>Birthday Celebration</option>
                  <option>Community Event</option>
                  <option>Cultural Event</option>
                  <option>Wellness Event</option>
                  <option>Brand Launch</option>
                  <option>Festive Gathering</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Estimated Guest Count</label>
                <select value={form.guestCount} onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                  className="w-full h-12 rounded-xl border border-[#B84A2B]/20 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B84A2B]">
                  <option value="">Select guest count</option>
                  <option>Under 25</option>
                  <option>25–50</option>
                  <option>50–100</option>
                  <option>100–200</option>
                  <option>200–500</option>
                  <option>500+</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Preferred Service Style</label>
                <select value={form.serviceStyle} onChange={(e) => setForm({ ...form, serviceStyle: e.target.value })}
                  className="w-full h-12 rounded-xl border border-[#B84A2B]/20 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B84A2B]">
                  <option value="">Select service style</option>
                  <option>Live Station</option>
                  <option>Buffet-Style</option>
                  <option>Passed Appetizers</option>
                  <option>Cocktail-Hour Bites</option>
                  <option>Corporate Lunch Setup</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Dietary Preferences or Restrictions</label>
              <Input value={form.dietaryPrefs} onChange={(e) => setForm({ ...form, dietaryPrefs: e.target.value })} placeholder="e.g. Vegan, Gluten-Free, Nut-Free..."
                className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Menu Items of Interest</label>
              <Input value={form.menuItems} onChange={(e) => setForm({ ...form, menuItems: e.target.value })} placeholder="e.g. Dosa, IDLI, Chutneys..."
                className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] h-12" />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2 block">Additional Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Anything else you'd like us to know about your event..."
                rows={4} className="rounded-xl border-[#B84A2B]/20 focus-visible:ring-[#B84A2B] resize-none" />
            </div>

            <Button type="submit" disabled={loading} size="lg"
              className="w-full rounded-full bg-[#B84A2B] hover:bg-[#8E3520] text-white h-14 text-base font-semibold premium-shadow">
              {loading ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Booking Inquiry</>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* ---- Footer ---- */
const Footer = () => (
  <footer className="bg-[#1A1410] text-white/80 pt-16 pb-8 relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B84A2B] via-[#C9A961] to-[#2C5F3F]" />
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LogoMark className="h-16 w-16" />
            <div>
              <div className="font-display text-lg font-bold text-white">Mangalam Foods</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C9A961]">A Blessing at Every Table</div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Pop-Up Events — Freshly made. Beautifully served. A blessing at every table.
          </p>
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/#products' },
              { label: 'Pop-Up Menu', href: '#menu' },
              { label: 'Book a Pop-Up', href: '#book' },
              { label: 'Contact', href: '/#contact' },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-[#C9A961] transition-colors">{l.label}</a></li>
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

/* ---- Page ---- */
export default function PopUpEventsPage() {
  return (
    <main className="bg-[#FBF7F0] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsPopUp />
      <PerfectFor />
      <WhyChoose />
      <PopUpMenu />
      <SampleFormats />
      <CustomizeEvent />
      <BookingForm />
      <Footer />
    </main>
  );
}
