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
  Users,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const whatsappUrl = 'https://wa.me/971500000000';

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { icon: Globe2, title: 'Website Design & Development', text: 'Premium, mobile-first websites built to earn trust and turn visitors into WhatsApp enquiries.' },
  { icon: Share2, title: 'Social Media Management', text: 'Consistent content, creative direction, and platform growth for the channels your customers use.' },
  { icon: Search, title: 'SEO Optimization', text: 'Search-friendly pages, clear structure, and technical improvements for long-term visibility.' },
  { icon: Megaphone, title: 'Paid Advertising', text: 'Performance-focused campaigns designed to reach the right audience and generate measurable leads.' },
  { icon: Palette, title: 'Branding & Identity', text: 'Visual systems, messaging, and brand assets that make your business look established and memorable.' },
  { icon: Sparkles, title: 'Content Creation', text: 'Scroll-stopping visuals, landing page copy, captions, and campaign content that communicates value.' },
  { icon: Target, title: 'Lead Generation', text: 'WhatsApp-first funnels and conversion paths that make it simple for customers to contact you.' },
  { icon: BarChart3, title: 'Marketing Strategy', text: 'Audience positioning, offer clarity, and growth plans aligned with your business goals.' },
];

const reasons = ['Modern creative designs', 'Mobile-first websites', 'Fast loading performance', 'SEO-friendly structure', 'Clear marketing strategy', 'WhatsApp lead generation', 'Affordable packages for small businesses'];
const portfolio = [
  { title: 'Business Growth Website', category: 'Business Websites', meta: 'Website / Lead Gen / 2026' },
  { title: 'Premium Shopfront', category: 'E-commerce', meta: 'Store / Campaigns / 2026' },
  { title: 'Conversion Landing Page', category: 'Landing Pages', meta: 'Ads / WhatsApp / 2026' },
  { title: 'Social Launch Campaign', category: 'Social Media Campaigns', meta: 'Content / Growth / 2026' },
  { title: 'Luxury Brand Identity', category: 'Branding Projects', meta: 'Identity / Positioning / 2026' },
];
const processSteps = [
  { title: 'Discovery & Strategy', text: 'We understand your business, audience, goals, offers, and best route to attract qualified leads.' },
  { title: 'Design & Content', text: 'We create the visual direction, website structure, copy, creatives, and campaign assets.' },
  { title: 'Launch & Optimization', text: 'We publish, test, improve performance, and make sure your contact paths are clear.' },
  { title: 'Growth & Support', text: 'We keep improving your marketing system with content, campaigns, analytics, and support.' },
];
const stats = [['50+', 'Projects Designed'], ['95%', 'Mobile Performance Focus'], ['3x', 'Better Lead Conversion'], ['24/7', 'WhatsApp Availability']];
const testimonials = [
  { name: 'Nadia Al Mansoori', type: 'Beauty Clinic Owner', text: 'The new landing page made our services look premium and helped customers contact us faster through WhatsApp.' },
  { name: 'Omar Khalid', type: 'Business Consultant', text: 'They understood our offer quickly and created a website structure that feels professional, clear, and easy to convert.' },
  { name: 'Sara Bennett', type: 'E-commerce Founder', text: 'The campaign visuals, product pages, and ad direction gave our brand a much stronger online presence.' },
];
const packages = [
  { name: 'Starter', label: 'For new businesses', price: 'Contact us for pricing', features: ['One-page website', 'Basic SEO setup', 'WhatsApp CTA setup', 'Starter social direction'] },
  { name: 'Growth', label: 'For active businesses', price: 'Starting from AED ___', featured: true, features: ['Multi-section website', 'SEO page structure', 'Campaign landing page', 'Content and ad direction', 'Lead tracking guidance'] },
  { name: 'Premium', label: 'For serious scaling', price: 'Contact us for pricing', features: ['Premium website system', 'Brand identity direction', 'Paid ads funnel', 'Content creation plan', 'Optimization support'] },
];

function VideoBackground({ name }) {
  return <><video className="section-video" autoPlay muted loop playsInline preload="metadata" poster={`/posters/${name}.svg`} aria-hidden="true"><source src={`/videos/${name}.webm`} type="video/webm" /><source src={`/videos/${name}.mp4`} type="video/mp4" /></video><div className="section-video-overlay" /></>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><a href="#top" className="brand" aria-label="Digital Motion home"><span>Digital</span><small>Motion</small></a><div className="desktop-nav">{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div><a className="book-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Book Consultation <ArrowRight size={15} /></a><button className="menu-button" aria-label="Toggle navigation menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></nav>{open && <div className="mobile-panel">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href={whatsappUrl} target="_blank" rel="noreferrer">Book Consultation</a></div>}</header>;
}

function Label({ children }) { return <p className="label">{children}</p>; }

function Hero() {
  return (
    <section id="top" className="beauty-hero">
      <div className="beauty-copy">
        <Label>Digital Marketing Agency</Label>
        <h1>Reveal your growth <em>with</em> smart marketing</h1>
        <p>We create websites, campaigns, and content that help your business attract more customers, build trust, and increase sales.</p>
        <a className="outline-shop-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Start Your Project <ArrowRight size={15} /></a>
        <div className="rating-row">
          <div className="avatar-stack"><span>DM</span><span>SEO</span><span>AD</span><span>UX</span></div>
          <div><strong>★★★★★  95% Performance Focus</strong><small>Trusted systems for WhatsApp leads</small></div>
        </div>
      </div>

      <div className="beauty-visual" aria-label="Digital marketing hero visual">
        <div className="hero-product product-one"><Globe2 /><span>Website</span></div>
        <div className="hero-product product-two"><BarChart3 /><span>Analytics</span></div>
        <div className="hero-product product-three"><Megaphone /><span>Paid Ads</span></div>
        <div className="hand-card"><MousePointerClick /><span>Lead Generation</span></div>
        <div className="spark-star">✧</div>
      </div>

      <div className="round-badge"><span>Premium<br />Marketing<br />System</span></div>

      <div className="bottom-video-card">
        <div className="play-button">▶</div>
        <div><strong>Watch growth system</strong><span>Websites · SEO · Ads · Content</span></div>
      </div>
    </section>
  );
}

function Intro() { return <section id="about" className="intro-grid container"><article className="panel intro-large"><Label>About Digital Motion</Label><h2>Marketing systems that reflect who you are.</h2><p>Every detail matters. From concept to conversion, we create digital experiences that are elegant, functional, and built to generate enquiries.</p></article><article className="panel intro-card"><Sparkles /><h3>Thoughtful Design</h3><p>Intentional layouts that enhance the way customers understand your offer.</p><a href="#services">Learn more <ArrowRight size={14} /></a></article><article className="panel intro-card"><Target /><h3>Timeless Strategy</h3><p>Clear marketing systems that balance brand presence and measurable growth.</p><a href="#process">Learn more <ArrowRight size={14} /></a></article></section>; }
function Services() { return <section id="services" className="section video-section"><VideoBackground name="services-bg" /><div className="container"><div className="section-head"><Label>Services</Label><h2>Designed to make your business look trusted and generate enquiries.</h2></div><div className="services-grid">{services.map((service) => { const Icon = service.icon; return <article className="panel service-card" key={service.title}><Icon /><h3>{service.title}</h3><p>{service.text}</p></article>; })}</div></div></section>; }
function Portfolio() { const [active, setActive] = useState(0); const item = portfolio[active]; return <section id="work" className="projects-section container"><div className="projects-copy panel"><Label>Selected Projects</Label><ul className="project-list large">{portfolio.map((project, index) => <li className={index === active ? 'active' : ''} key={project.title} onClick={() => setActive(index)}><span>{project.category}</span><strong>{project.title}</strong></li>)}</ul></div><div className="project-preview panel image-panel"><div className="preview-note"><strong>{item.title}</strong><span>{item.meta}</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Start Similar Project <ArrowRight size={14} /></a></div><div className="browser-card"><div /><div /><div /></div><div className="preview-meta"><span>Size<br />Custom</span><span>Location<br />UAE</span><span>Year<br />2026</span><span>Type<br />{item.category}</span></div></div></section>; }
function WhyChooseUs() { return <section className="section video-section"><VideoBackground name="strategy-bg" /><div className="container split-section"><div className="panel soft-panel"><Label>Why Choose Us</Label><h2>Creative design with a clear marketing purpose.</h2><p>We combine premium visuals, fast websites, strong messaging, and WhatsApp-focused conversion paths.</p><a className="dark-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss Your Growth <ArrowRight size={16} /></a></div><div className="reason-grid">{reasons.map((reason) => <div className="panel reason-card" key={reason}><CheckCircle2 /><span>{reason}</span></div>)}</div></div></section>; }
function Process() { return <section id="process" className="section container"><div className="section-head"><Label>Our Process</Label><h2>From discovery to growth support.</h2></div><div className="process-grid">{processSteps.map((step, index) => <article className="panel process-card" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>; }
function Stats() { return <section className="stats-strip container">{stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</section>; }
function Testimonials() { return <section className="testimonial-section container"><div className="testimonial-title"><h2>Voices from those we’ve designed for.</h2></div><div className="testimonial-cards">{testimonials.map((item, index) => <article className={`panel testimonial-card t${index}`} key={item.name}><div className="avatar">{item.name.charAt(0)}</div><p>“{item.text}”</p><strong>{item.name}</strong><span>{item.type}</span></article>)}</div></section>; }
function Pricing() { return <section id="pricing" className="section container"><div className="section-head"><Label>Packages</Label><h2>Flexible packages for every growth stage.</h2></div><div className="pricing-grid">{packages.map((item) => <article className={`panel pricing-card ${item.featured ? 'featured' : ''}`} key={item.name}>{item.featured && <span className="badge">Popular</span>}<p>{item.label}</p><h3>{item.name}</h3><strong>{item.price}</strong><ul>{item.features.map((feature) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}</ul><a className="dark-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Ask on WhatsApp</a></article>)}</div></section>; }
function FinalCta() { return <section id="contact" className="final-cta container"><div className="panel cta-copy"><Label>Our Upcoming Concept</Label><h2>Ready to grow your business online?</h2><p>Let’s build a website, campaign, and marketing system that helps your business attract more customers.</p><a className="dark-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Chat With Us on WhatsApp <ArrowRight size={16} /></a></div><div className="panel cta-image image-panel"><MousePointerClick /><span>WhatsApp Lead System</span></div></section>; }
function Footer() { return <footer className="footer"><div className="container footer-grid"><div><a href="#top" className="brand"><span>Digital</span><small>Motion</small></a><p>Premium websites, campaigns, content, and lead generation systems for ambitious businesses.</p></div><div><h3>Services</h3><a href="#services">Website Design</a><a href="#services">Social Media</a><a href="#services">SEO</a><a href="#services">Paid Ads</a></div><div><h3>Contact</h3><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +971 50 000 0000</a><a href="mailto:hello@example.com">hello@example.com</a><span>Dubai, UAE</span></div></div><div className="container copyright">© {new Date().getFullYear()} Digital Motion. All rights reserved.</div></footer>; }

export default function App() { return <><Header /><main><Hero /><Intro /><Services /><Portfolio /><WhyChooseUs /><Process /><Stats /><Testimonials /><Pricing /><FinalCta /></main><Footer /></>; }
