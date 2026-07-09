import re

with open("app/page.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update About Section
about_original = """        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] leading-tight mb-6">
          Ancient Grains.<br /><span className="italic text-[#2C5F3F]">Modern Living.</span>
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Mangalam Foods is committed to delivering <strong className="text-[#8E3520]">fresh, healthy, naturally fermented batters</strong> inspired
          by traditional South Indian recipes. Every product is prepared using premium grains
          without preservatives — ensuring authentic taste and superior nutrition for the modern family.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: Sparkles, title: 'Mission', text: 'To bring authentic, preservative-free South Indian flavours to every home.' },
            { icon: Leaf, title: 'Vision', text: 'A blessing at every table — nourishing families through tradition.' },
            { icon: ShieldCheck, title: 'Quality Promise', text: 'Lab-tested, hygienically prepared, delivered fresh — always.' },
          ].map((b) => (
            <Card key={b.title} className="border-[#B84A2B]/10 rounded-2xl shadow-none bg-[#FBF7F0] hover:premium-shadow transition-all">
              <CardContent className="p-5">
                <div className="h-10 w-10 rounded-xl bg-white grid place-items-center mb-3 premium-shadow"><b.icon className="h-5 w-5 text-[#B84A2B]" /></div>
                <div className="font-display font-bold text-[#8E3520] text-lg mb-1">{b.title}</div>
                <p className="text-sm text-foreground/70 leading-relaxed">{b.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>"""

about_new = """        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1410] leading-tight mb-6">
          Mangalam — a word that means auspiciousness, blessing, and good fortune — is the name Monali Kotak has chosen for the next chapter of her food journey.
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Built on the foundation she has laid at Zayith Bazaar, a women-owned and minority-owned restaurant in Boston, Mangalam Foods carries forward a simple belief: <strong className="text-[#8E3520]">food made with intention has the power to nourish people, honor culture, and give back to the community.</strong>
        </p>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Every product under the Mangalam Foods name is created with the same care Monali brings to her kitchen at Zayith Bazaar — clean ingredients, traditional technique, and a deep respect for where food comes from. Alongside her husband, her partner in both life and purpose, she is building a kitchen rooted in authenticity, a business grounded in resilience, and a community centered on inclusivity and care.
        </p>"""
content = content.replace(about_original, about_new)

# 2. Update PeekIntoKitchen Stages
stages_original = """  const stages = [
    {
      id: 'stage-1',
      title: 'The Not-So-Secret Ingredients',
      desc: 'The best quality of rice, urad dal, methi and ancient millets is sourced and stored in a clean and dry warehouse. The ingredients are then lifted into the manufacturing unit.',
      img: IMG.lentils,
      tag: '01',
      accent: '#B84A2B', // terracotta
      bg: 'from-white via-[#FBF7F0] to-white',
    },
    {
      id: 'stage-2',
      title: 'Soaking In It',
      desc: 'The softest idlies are made from ingredients that are allowed to take their time to absorb just the right amount of water.',
      img: IMG.lentils2,
      tag: '02',
      accent: '#C9763A', // terracotta → gold
      bg: 'from-[#FBF7F0] via-[#F5EEDC] to-[#FBF7F0]',
    },
    {
      id: 'stage-3',
      title: 'The Daily Grind',
      desc: 'Under close watch, the grains and pulses are separately ground to a specific consistency with a dash of salt.',
      img: IMG.ragi,
      tag: '03',
      accent: '#C9A961', // gold
      bg: 'from-[#F5EEDC] via-[#F0E6CB] to-[#F5EEDC]',
    },
    {
      id: 'stage-4',
      title: 'The Perfect Mix',
      desc: 'The finely ground rice, urad dal, and methi are now combined.',
      img: IMG.dosaPour,
      tag: '04',
      accent: '#8DA663', // gold → sage
      bg: 'from-[#F0E6CB] via-[#EAE5D0] to-[#F0E6CB]',
    },
    {
      id: 'stage-5',
      title: 'Rise and Shine',
      desc: 'There is no shortcut to silky smooth batter. Fermentation to the right degree is key — a full 12 hours at the perfect temperature for that authentic, naturally fermented flavour.',
      img: IMG.idli2,
      tag: '05',
      accent: '#2C5F3F', // forest
      bg: 'from-[#EAE5D0] via-[#E5E8D8] to-[#EAE5D0]',
    },
    {
      id: 'stage-6',
      title: 'Signed, Sealed, and Soon to be Delivered',
      desc: 'The packs are filled, weighed, air-sealed and sent through a metal detector to ensure there is no adulteration — before they are sent to the blast freezer.',
      img: IMG.spread,
      tag: '06',
      accent: '#4A7A4F', // forest → mid
      bg: 'from-[#E5E8D8] via-[#EFEAD9] to-[#E5E8D8]',
    },
    {
      id: 'stage-7',
      title: 'Now Ready to be Served with Love & Chutney',
      desc: 'The batter then travels to retailers near you. When you pick up a packet of Mangalam batter, you choose food made with love — delivered fresh, coast to coast across the United States.',
      img: US_TRUCK,
      tag: '07',
      accent: '#B84A2B',
      bg: 'from-[#EFEAD9] via-[#FBF7F0] to-white',
      isFinal: true,
    },
  ];"""

stages_new = """  const stages = [
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
  ];"""
content = content.replace(stages_original, stages_new)

# 3. Benefits -> Our Promise: Clean, Honest Food
benefits_original = """/* -------------------------------- BENEFITS -------------------------------- */
const Benefits = () => {
  const items = [
    { icon: Heart, title: 'High Protein', color: '#B84A2B' },
    { icon: Sprout, title: 'Gut Friendly', color: '#2C5F3F' },
    { icon: ChefHat, title: 'Healthy Breakfast', color: '#C9A961' },
    { icon: Clock, title: 'Easy to Cook', color: '#B84A2B' },
    { icon: Star, title: 'Traditional Taste', color: '#2C5F3F' },
    { icon: ShieldCheck, title: 'No Preservatives', color: '#C9A961' },
  ];
  return (
    <section id="benefits" className="py-24 md:py-32 bg-gradient-to-br from-[#FBF7F0] via-white to-[#F5EEDC]">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#B84A2B] mb-4">Benefits</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1410] mb-4">
            Nutrition Your Family <span className="italic text-[#2C5F3F]">Deserves</span>
          </h2>
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
                <h3 className="font-display text-xl font-bold text-[#1A1410]">{it.title}</h3>
                <p className="text-sm text-foreground/60">Goodness in every bite</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};"""

benefits_new = """/* -------------------------------- OUR PROMISE -------------------------------- */
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
};"""
content = content.replace(benefits_original, benefits_new)

# 4. Add Mission, Capabilities, Join The Journey
new_sections = """
/* -------------------------------- OUR MISSION -------------------------------- */
const Mission = () => (
  <section className="py-20 md:py-28 bg-[#1A1410] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23C9A961' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E\")" }} />
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
"""

# Inject before Testimonials
content = content.replace("/* ------------------------------ TESTIMONIALS ------------------------------ */", new_sections + "\n/* ------------------------------ TESTIMONIALS ------------------------------ */")

# Update App component to include new ones and replace Benefits with OurPromise
app_original = """/* --------------------------------- APP ------------------------------------ */
function App() {
  return (
    <main className="bg-[#FBF7F0] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <PeekIntoKitchen />
      <TransparenSee />
      <Process />
      <Quality />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}"""

app_new = """/* --------------------------------- APP ------------------------------------ */
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
}"""
content = content.replace(app_original, app_new)

with open("app/page.js", "w", encoding="utf-8") as f:
    f.write(content)
