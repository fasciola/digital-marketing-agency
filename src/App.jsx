import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  Megaphone,
  Menu,
  MousePointerClick,
  Palette,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const whatsappUrl = 'https://wa.me/971500000000';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: Globe2,
    title: 'Website Design & Development',
    text: 'Modern, mobile-first websites built to earn trust, load fast, and turn visitors into customers.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    text: 'Consistent content, creative direction, and community growth across the platforms your customers use.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    text: 'Search-friendly structure, keyword-focused pages, and technical improvements that support long-term visibility.',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    text: 'Performance-focused campaigns designed to reach the right audience and generate measurable enquiries.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    text: 'Premium visual systems, messaging, and brand assets that make your business look established and memorable.',
  },
  {
    icon: Sparkles,
    title: 'Content Creation',
    text: 'Scroll-stopping visuals, captions, landing page copy, and campaign content that communicates value clearly.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    text: 'WhatsApp-first funnels and conversion paths that make it simple for customers to contact your business.',
  },
  {
    icon: BarChart3,
    title: 'Marketing Strategy',
    text: 'Clear plans, audience positioning, and growth systems aligned with your goals and monthly budget.',
  },
];

const reasons = [
  'Modern creative designs',
  'Mobile-first websites',
  'Fast loading performance',
  'SEO-friendly structure',
  'Clear marketing strategy',
  'WhatsApp lead generation',
  'Affordable packages for small businesses',
];

const portfolio = [
  { title: 'Business Growth Website', category: 'Business Websites', accent: 'from-cyan-400 to-blue-600' },
  { title: 'Premium Shopfront', category: 'E-commerce', accent: 'from-fuchsia-400 to-purple-600' },
  { title: 'Conversion Landing Page', category: 'Landing Pages', accent: 'from-amber-300 to-orange-600' },
  { title: 'Social Launch Campaign', category: 'Social Media Campaigns', accent: 'from-emerald-300 to-teal-600' },
  { title: 'Luxury Brand Identity', category: 'Branding Projects', accent: 'from-rose-300 to-pink-600' },
  { title: 'Lead Funnel System', category: 'Lead Generation', accent: 'from-indigo-300 to-sky-600' },
];

const processSteps = [
  {
    title: 'Discovery & Strategy',
    text: 'We understand your business, audience, goals, offers, and best route to attract qualified leads.',
  },
  {
    title: 'Design & Content',
    text: 'We create the visual direction, website structure, copy, creatives, and campaign assets.',
  },
  {
    title: 'Launch & Optimization',
    text: 'We publish, test, improve performance, and make sure your contact paths are clear.',
  },
  {
    title: 'Growth & Support',
    text: 'We keep improving your marketing system with content, campaigns, analytics, and support.',
  },
];

const stats = [
  ['50+', 'Projects Designed'],
  ['95%', 'Mobile Performance Focus'],
  ['3x', 'Better Lead Conversion'],
  ['24/7', 'WhatsApp Availability'],
];

const testimonials = [
  {
    name: 'Nadia Al Mansoori',
    type: 'Beauty Clinic Owner',
    text: 'The new landing page made our services look premium and helped customers contact us faster through WhatsApp.',
  },
  {
    name: 'Omar Khalid',
    type: 'Business Consultant',
    text: 'They understood our offer quickly and created a website structure that feels professional, clear, and easy to convert.',
  },
  {
    name: 'Sara Bennett',
    type: 'E-commerce Founder',
    text: 'The campaign visuals, product pages, and ad direction gave our brand a much stronger online presence.',
  },
];

const packages = [
  {
    name: 'Starter',
    label: 'For new businesses',
    price: 'Contact us for pricing',
    features: ['One-page website', 'Basic SEO setup', 'WhatsApp CTA setup', 'Starter social media direction'],
  },
  {
    name: 'Growth',
    label: 'For active businesses',
    price: 'Starting from AED ___',
    featured: true,
    features: ['Multi-section website', 'SEO page structure', 'Campaign landing page', 'Content and ad direction', 'Lead tracking guidance'],
  },
  {
    name: 'Premium',
    label: 'For serious scaling',
    price: 'Contact us for pricing',
    features: ['Premium website system', 'Brand identity direction', 'Paid ads funnel', 'Content creation plan', 'Optimization support'],
  },
];

function VideoBackground({ name }) {
  return (
    <>
      <video className="section-video" autoPlay muted loop playsInline preload="metadata" poster={`/posters/${name}.svg`} aria-hidden="true">
        <source src={`/videos/${name}.webm`} type="video/webm" />
        <source src={`/videos/${name}.mp4`} type="video/mp4" />
      </video>
      <div className="section-video-overlay" />
    </>
  );
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Digital agency home">
          <span className="brand-mark">DM</span>
          <span>Digital Motion</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>

        <button className="menu-button" aria-label="Toggle navigation menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-panel">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Start on WhatsApp</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Premium Digital Agency</p>
          <h1>Grow Your Business With Smart Digital Marketing</h1>
          <p className="hero-subtitle">We create websites, campaigns, and content that help your business attract more customers, build trust, and increase sales.</p>
          <div className="hero-actions">
            <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href="#services">View Our Services</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Digital marketing dashboard illustration">
          <div className="massive-word">MARKETING</div>
          <div className="dashboard-card main-dashboard">
            <div className="card-topline"><span /> Campaign Performance</div>
            <div className="chart-bars">
              <i style={{ height: '38%' }} />
              <i style={{ height: '58%' }} />
              <i style={{ height: '46%' }} />
              <i style={{ height: '82%' }} />
              <i style={{ height: '68%' }} />
              <i style={{ height: '92%' }} />
            </div>
            <div className="metric-row">
              <strong>+218%</strong>
              <span>Qualified leads</span>
            </div>
          </div>

          <div className="floating-card card-seo"><Search size={18} /> SEO Rank #1</div>
          <div className="floating-card card-social"><Users size={18} /> +14k Reach</div>
          <div className="floating-card card-ads"><MousePointerClick size={18} /> 3.7x ROAS</div>
          <div className="floating-card card-web"><Zap size={18} /> 95% Mobile</div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="page-section video-section">
      <VideoBackground name="services-bg" />
      <div className="container">
        <SectionLabel>Services</SectionLabel>
        <div className="section-heading">
          <h2>Everything your business needs to look trusted and generate enquiries.</h2>
          <p>From the first impression to the final WhatsApp message, every section is designed to help customers understand your value and take action.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="glass-card service-card" key={service.title}>
                <div className="icon-bubble"><Icon size={24} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="page-section video-section split-section">
      <VideoBackground name="strategy-bg" />
      <div className="container split-grid">
        <div>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2>Premium design with a clear marketing purpose.</h2>
          <p className="large-text">We combine creative visuals, fast websites, strong messaging, and WhatsApp-focused conversion paths so your business can look professional and receive more enquiries.</p>
          <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Growth <ArrowRight size={18} /></a>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <div className="glass-card reason-card" key={reason}>
              <CheckCircle2 size={20} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="page-section video-section">
      <VideoBackground name="portfolio-bg" />
      <div className="container">
        <SectionLabel>Work Showcase</SectionLabel>
        <div className="section-heading">
          <h2>Project layouts ready for real client work.</h2>
          <p>Replace the placeholders later with actual websites, campaigns, branding projects, and social media results.</p>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <div className={`portfolio-art bg-gradient-to-br ${item.accent}`}>
                <div className="portfolio-window" />
                <div className="portfolio-line one" />
                <div className="portfolio-line two" />
                <div className="portfolio-line three" />
              </div>
              <div className="portfolio-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="page-section process-section">
      <div className="container">
        <SectionLabel>Process</SectionLabel>
        <div className="section-heading">
          <h2>A clear process from idea to growth.</h2>
          <p>Simple, structured, and focused on launching quickly without losing the premium feeling.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="glass-card process-card" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="page-section video-section stats-section">
      <VideoBackground name="results-bg" />
      <div className="container">
        <SectionLabel>Results Focus</SectionLabel>
        <div className="stats-grid">
          {stats.map(([number, label]) => (
            <div className="glass-card stat-card" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="page-section testimonials-section">
      <div className="container">
        <SectionLabel>Testimonials</SectionLabel>
        <div className="section-heading">
          <h2>What clients say about the experience.</h2>
          <p>Realistic placeholder reviews that can be replaced with verified client feedback later.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="glass-card testimonial-card" key={item.name}>
              <div className="stars" aria-label="Five star rating">★★★★★</div>
              <p>“{item.text}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="page-section pricing-section">
      <div className="container">
        <SectionLabel>Packages</SectionLabel>
        <div className="section-heading">
          <h2>Flexible packages for every growth stage.</h2>
          <p>Keep the pricing editable and invite visitors to start the conversation through WhatsApp.</p>
        </div>
        <div className="pricing-grid">
          {packages.map((item) => (
            <article className={`glass-card pricing-card ${item.featured ? 'featured-card' : ''}`} key={item.name}>
              {item.featured && <span className="popular-badge">Most Popular</span>}
              <p>{item.label}</p>
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}><CheckCircle2 size={18} /> {feature}</li>
                ))}
              </ul>
              <a className="secondary-btn full-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="page-section video-section final-cta">
      <VideoBackground name="cta-bg" />
      <div className="container cta-panel">
        <SectionLabel>Let’s Build Your Growth System</SectionLabel>
        <h2>Ready to Grow Your Business Online?</h2>
        <p>Let’s build a website, campaign, and marketing system that helps your business attract more customers.</p>
        <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Chat With Us on WhatsApp <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand"><span className="brand-mark">DM</span><span>Digital Motion</span></a>
          <p>Premium websites, campaigns, content, and lead generation systems for ambitious businesses.</p>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">Website Design</a>
          <a href="#services">Social Media</a>
          <a href="#services">SEO</a>
          <a href="#services">Paid Ads</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +971 50 000 0000</a>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span>Dubai, UAE</span>
        </div>
        <div>
          <h3>Social</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Digital Motion. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
