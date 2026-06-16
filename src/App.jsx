import { useState } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  Check,
  ChevronDown,
  DollarSign,
  ExternalLink,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Pen,
  Phone,
  Quote,
  Rocket,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/971500000000';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { icon: Globe2, title: 'Website Design & Development', text: 'Conversion-focused, mobile-first websites built to look premium and turn visitors into leads.' },
  { icon: Share2, title: 'Social Media Management', text: 'Consistent creative direction, content calendars, captions, reels ideas, and profile growth systems.' },
  { icon: Search, title: 'SEO Optimization', text: 'Search-friendly pages, technical structure, local SEO, and content strategy for long-term visibility.' },
  { icon: Target, title: 'Paid Advertising', text: 'Campaign funnels designed for the right audience, stronger offers, and measurable WhatsApp enquiries.' },
  { icon: Palette, title: 'Branding & Identity', text: 'Visual systems, brand messaging, and design assets that make your business look established.' },
  { icon: Sparkles, title: 'Content Creation', text: 'Premium visuals, ad creatives, landing page copy, and social content that communicates value clearly.' },
  { icon: MessageCircle, title: 'Lead Generation', text: 'WhatsApp-first funnels that make it simple for customers to ask, book, and buy.' },
  { icon: Lightbulb, title: 'Marketing Strategy', text: 'Clear positioning, customer journey planning, and growth direction aligned with your budget.' },
];

const features = [
  { icon: Sparkles, title: 'Modern Creative Designs', text: 'High-impact visuals that make your brand feel current, premium, and trustworthy.' },
  { icon: Smartphone, title: 'Mobile-First Websites', text: 'Layouts tested for small screens so every CTA is clear and easy to tap.' },
  { icon: Zap, title: 'Fast Loading Performance', text: 'Optimized sections, lightweight motion, and careful media usage for speed.' },
  { icon: Search, title: 'SEO-Friendly Structure', text: 'Clean heading hierarchy, metadata, content sections, and crawlable structure.' },
  { icon: MessageCircle, title: 'WhatsApp Lead Generation', text: 'Direct conversion routes that move visitors from interest to conversation.' },
  { icon: Wallet, title: 'Small Business Packages', text: 'Premium design direction with practical packages for growing businesses.' },
];

const projects = [
  { title: 'Business Growth Website', category: 'Business Website', stat: '+218% leads', image: '/images/ChatGPT Image Jun 16, 2026, 05_06_37 PM (2).png' },
  { title: 'Premium E-commerce Funnel', category: 'E-commerce', stat: '3.7x ROAS', image: '/images/ChatGPT Image Jun 16, 2026, 05_06_38 PM (5).png' },
  { title: 'WhatsApp Landing Page', category: 'Landing Page', stat: '42% more chats', image: '/images/ChatGPT Image Jun 16, 2026, 05_06_39 PM (6).png' },
  { title: 'Social Launch Campaign', category: 'Social Campaign', stat: '14k reach', image: '/images/ChatGPT Image Jun 16, 2026, 05_06_38 PM (4).png' },
];

const process = [
  { icon: Search, title: 'Discovery & Strategy', text: 'We understand your business, audience, goals, offers, and best route to qualified leads.' },
  { icon: Pen, title: 'Design & Content', text: 'We create the structure, visuals, copy, creative assets, and campaign direction.' },
  { icon: Rocket, title: 'Launch & Optimization', text: 'We publish, test, improve, and make sure your contact paths are clear.' },
  { icon: TrendingUp, title: 'Growth & Support', text: 'We keep improving your marketing system with content, analytics, and support.' },
];

const stats = [
  { value: '50+', label: 'Projects Designed' },
  { value: '95%', label: 'Mobile Performance Focus' },
  { value: '3x', label: 'Better Lead Conversion' },
  { value: '24/7', label: 'WhatsApp Availability' },
];

const testimonials = [
  { name: 'Nadia Al Mansoori', business: 'Beauty Clinic Owner', review: 'The new landing page made our services look premium and helped customers contact us faster through WhatsApp.' },
  { name: 'Omar Khalid', business: 'Business Consultant', review: 'They understood our offer quickly and created a website structure that feels professional, clear, and easy to convert.' },
  { name: 'Sara Bennett', business: 'E-commerce Founder', review: 'The campaign visuals, product pages, and ad direction gave our brand a much stronger online presence.' },
];

const packages = [
  { name: 'Starter', price: 'Contact us for pricing', desc: 'For new businesses', features: ['One-page website', 'Basic SEO setup', 'WhatsApp CTA setup', 'Starter social direction'] },
  { name: 'Growth', price: 'Starting from AED ___', desc: 'For active businesses', featured: true, features: ['Multi-section website', 'SEO page structure', 'Campaign landing page', 'Content and ad direction', 'Lead tracking guidance'] },
  { name: 'Premium', price: 'Contact us for pricing', desc: 'For serious scaling', features: ['Premium website system', 'Brand identity direction', 'Paid ads funnel', 'Content creation plan', 'Optimization support'] },
];

function VideoBackdrop({ file = 'bg-1.mp4', strength = 'soft' }) {
  return (
    <div className={`video-backdrop ${strength}`} aria-hidden="true">
      <video autoPlay muted loop playsInline preload="metadata">
        <source src={`/videos/${file}`} type="video/mp4" />
      </video>
      <div className="video-backdrop-overlay" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const goTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); goTo('#top'); }}>
          NEXUS<span>.</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => goTo(link.href)}>{link.label}</button>
          ))}
        </div>
        <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> WhatsApp
        </a>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => <button key={link.href} onClick={() => goTo(link.href)}>{link.label}</button>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start on WhatsApp</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero dark-grid video-shell">
      <VideoBackdrop file="bg-1.mp4" strength="hero-video" />
      <div className="hero-bg-orb one" />
      <div className="hero-bg-orb two" />
      <div className="hero-content">
        <p className="pill"><Sparkles size={15} /> High-Converting Digital Agency</p>
        <h1>Grow Your Business With Smart Digital Marketing</h1>
        <p className="hero-sub">We create websites, campaigns, and content that help your business attract more customers, build trust, and increase sales.</p>
        <div className="hero-actions">
          <a className="primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start Your Project <ArrowRight size={18} /></a>
          <button className="secondary" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>View Our Services</button>
        </div>
      </div>
      <div className="hero-art" aria-label="Marketing dashboard illustration">
        <div className="big-word">NEXUS</div>
        <div className="dashboard glass-card">
          <div className="dash-top"><span /> Campaign Performance</div>
          <div className="chart">
            <i style={{ height: '42%' }} /><i style={{ height: '61%' }} /><i style={{ height: '47%' }} /><i style={{ height: '86%' }} /><i style={{ height: '72%' }} /><i style={{ height: '94%' }} />
          </div>
          <div className="dash-metric"><strong>+218%</strong><span>Qualified Leads</span></div>
        </div>
        <div className="float-card fc1"><Search size={18} /> SEO Rank #1</div>
        <div className="float-card fc2"><Users size={18} /> +14k Reach</div>
        <div className="float-card fc3"><DollarSign size={18} /> 3.7x ROAS</div>
        <div className="float-card fc4"><Award size={18} /> Premium UX</div>
      </div>
      <ChevronDown className="scroll-cue" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section video-section video-shell">
      <VideoBackdrop file="bg-2.mp4" />
      <div className="video-glow" />
      <div className="container">
        <div className="section-head centered">
          <p className="pill">Services</p>
          <h2>Everything You Need to Grow Online</h2>
          <p>Strategy, websites, content, ads, and lead systems working together.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => {
            const Icon = s.icon;
            return <article className="service glass-card" key={s.title}><Icon /><h3>{s.title}</h3><p>{s.text}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto">
      <div className="marquee"><span>WEBSITES • SEO • SOCIAL MEDIA • PAID ADS • BRANDING • CONTENT • LEADS • </span><span>WEBSITES • SEO • SOCIAL MEDIA • PAID ADS • BRANDING • CONTENT • LEADS • </span></div>
      <div className="container manifesto-grid">
        <h2>Design is only powerful when it creates movement.</h2>
        <p>We build digital systems that make your business look trusted, explain your value clearly, and move customers toward action.</p>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section video-section video-shell">
      <VideoBackdrop file="bg-1.mp4" />
      <div className="container split">
        <div className="sticky-copy">
          <p className="pill">Why Choose Us</p>
          <h2>We Build Digital Experiences That Convert</h2>
          <p>Creative excellence, performance structure, and WhatsApp-first lead generation in one complete growth system.</p>
        </div>
        <div className="feature-grid">
          {features.map((f) => { const Icon = f.icon; return <article className="feature glass-card" key={f.title}><Icon /><h3>{f.title}</h3><p>{f.text}</p></article>; })}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="section portfolio-section video-shell">
      <VideoBackdrop file="bg-2.mp4" />
      <div className="container">
        <div className="section-head">
          <p className="pill">Selected Work</p>
          <h2>Built to Look Premium and Convert Faster</h2>
        </div>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <article className="project glass-card" key={p.title}>
              <div className="project-img"><img src={p.image} alt={p.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="project-info"><span>{p.category}</span><h3>{p.title}</h3><p>{p.stat}</p><ExternalLink size={18} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-head centered"><p className="pill">Process</p><h2>A Clear Path From Idea to Growth</h2></div>
        <div className="process-grid">
          {process.map((p, i) => { const Icon = p.icon; return <article className="process-card glass-card" key={p.title}><span>0{i + 1}</span><Icon /><h3>{p.title}</h3><p>{p.text}</p></article>; })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return <section className="stats"><div className="container stats-grid">{stats.map((s) => <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div></section>;
}

function VelocityLogos() {
  const logos = ['GOOGLE', 'META', 'SHOPIFY', 'FIGMA', 'VERCEL', 'ADOBE', 'NOTION', 'STRIPE', 'HUBSPOT', 'CANVA'];
  return <section className="logos"><div className="logo-track">{[...logos, ...logos].map((l, i) => <span key={`${l}-${i}`}>{l}</span>)}</div></section>;
}

function ImpactShowcase() {
  return (
    <section className="section impact">
      <div className="container impact-grid">
        <div><p className="pill">Impact</p><h2>Marketing that looks sharp and performs clearly.</h2><p>We focus on the complete customer journey: attention, trust, offer clarity, and fast contact.</p></div>
        <div className="impact-cards">
          <div className="glass-card"><TrendingUp /><strong>Better conversion paths</strong><span>Clear CTAs and WhatsApp flow.</span></div>
          <div className="glass-card"><Users /><strong>Audience-focused messaging</strong><span>Content that speaks to real buyers.</span></div>
          <div className="glass-card"><BarChart3 /><strong>Measurable performance</strong><span>Campaigns and pages designed to track results.</span></div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head centered"><p className="pill">Client Love</p><h2>What They Say</h2></div>
        <div className="testimonial-grid">{testimonials.map((t) => <article className="testimonial glass-card" key={t.name}><Quote /><div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} />)}</div><p>“{t.review}”</p><strong>{t.name}</strong><span>{t.business}</span></article>)}</div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-head centered"><p className="pill">Packages</p><h2>Flexible Packages for Every Growth Stage</h2></div>
        <div className="pricing-grid">{packages.map((pkg) => <article className={`price-card glass-card ${pkg.featured ? 'featured' : ''}`} key={pkg.name}>{pkg.featured && <span className="badge">Most Popular</span>}<p>{pkg.desc}</p><h3>{pkg.name}</h3><strong>{pkg.price}</strong><ul>{pkg.features.map((f) => <li key={f}><Check size={16} /> {f}</li>)}</ul><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Ask on WhatsApp</a></article>)}</div>
      </div>
    </section>
  );
}

function Vortex() {
  return <section className="vortex video-shell"><VideoBackdrop file="bg-1.mp4" strength="vortex-video" /><div className="ring r1" /><div className="ring r2" /><div className="ring r3" /><div className="vortex-text">NEXUS MEDIA</div></section>;
}

function CTA() {
  return (
    <section id="contact" className="section cta-section video-shell">
      <VideoBackdrop file="bg-2.mp4" />
      <div className="container cta-box glass-card">
        <h2>Ready to Grow Your Business Online?</h2>
        <p>Let’s build a website, campaign, and marketing system that helps your business attract more customers.</p>
        <a className="primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={22} /> Chat With Us on WhatsApp</a>
        <span>Response within 24 hours. No commitment required.</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><a className="brand" href="#top">NEXUS<span>.</span></a><p>A premium digital marketing agency focused on strategy, design, and performance.</p><div className="socials"><Globe2 /><Share2 /><MessageCircle /></div></div>
        <div><h4>Services</h4>{['Website Design', 'Social Media', 'SEO', 'Paid Ads', 'Branding', 'Content Creation'].map((s) => <span key={s}>{s}</span>)}</div>
        <div><h4>Contact</h4><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp Us</a><span><Mail size={15} /> hello@nexusmedia.com</span><span><Phone size={15} /> +971 50 000 0000</span><span><MapPin size={15} /> Dubai, UAE</span></div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Nexus Media. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Services />
        <Manifesto />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Stats />
        <VelocityLogos />
        <ImpactShowcase />
        <Testimonials />
        <Pricing />
        <Vortex />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
