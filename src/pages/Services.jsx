import React, { useEffect, useState } from "react";
import "./services.css";

/* ---------------------------- Icon components ---------------------------- */

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* service icons */
const IconBuilding = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10 21v-3h4v3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const IconRenovate = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 20l6.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M11 13l3-3 6 6-3 3-6-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M14 6l1.5-1.5L19 8 17.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const IconGear = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconBridge = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M2 15c3-3 6-4.5 10-4.5S19 12 22 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 15v4M8 12.5V19M16 12.5V19M20 15v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M2 19h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconBlueprint = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="4" width="17" height="16" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 8h6M7 12h10M7 16h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconKey = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="7.5" cy="15.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 13l9-9M16 7l2 2M13 10l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* footer / contact icons */
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2 2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21s7-6.3 7-11.5C19 5.9 15.9 3 12 3S5 5.9 5 9.5C5 14.7 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5z" fill="currentColor" />
  </svg>
);

const IconX = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

const IconLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.5 10.5v6M7.5 7.8v.01M11.5 16.5v-3.5c0-1.2 1-2 2.2-2 1.2 0 1.8.8 1.8 2v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* --------------------------------- Data ---------------------------------- */

// Unsplash — free to use, no attribution required (Unsplash License)
const SERVICES = [
  {
    icon: IconBuilding,
    title: "Building Construction",
    text: "Residential, commercial and industrial buildings.",
    image: "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?auto=format&fit=crop&w=500&h=340&q=70",
  },
  {
    icon: IconRenovate,
    title: "Renovation & Remodeling",
    text: "Modernize and upgrade your existing spaces.",
    image: "https://images.unsplash.com/photo-1768609239321-1cfe14893e80?auto=format&fit=crop&w=500&h=340&q=70",
  },
  {
    icon: IconGear,
    title: "Project Management",
    text: "Plan, coordinate and deliver projects on time and budget.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&h=340&q=70",
  },
  {
    icon: IconBridge,
    title: "Civil Engineering",
    text: "Roads, bridges, drainage and infrastructure.",
    image: "https://images.unsplash.com/photo-1757030689760-3ec8be7326ae?auto=format&fit=crop&w=500&h=340&q=70",
  },
  {
    icon: IconBlueprint,
    title: "Architecture & Design",
    text: "Functional, innovative and sustainable designs.",
    image: "https://images.unsplash.com/photo-1479293581560-aee98bb24f7f?auto=format&fit=crop&w=500&h=340&q=70",
  },
  {
    icon: IconKey,
    title: "Facility Management",
    text: "Maintain and manage your properties for long-term value.",
    image: "https://images.unsplash.com/photo-1669003153363-6d7ba8e20c7e?auto=format&fit=crop&w=500&h=340&q=70",
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1730363856885-6f21a0b3a4ca?auto=format&fit=crop&w=1600&q=70";
const CTA_IMAGE = "https://images.unsplash.com/photo-1730363856885-6f21a0b3a4ca?auto=format&fit=crop&w=1600&q=70";

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="bp-page">
      {/* ----------------------------- Navbar ----------------------------- */}
      <header className={`bp-nav ${scrolled ? "bp-nav--scrolled" : ""}`}>
        <div className="bp-nav__inner">
          <a href="/" className="bp-logo">
            <span className="bp-logo__mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 2l17 10v16L20 38 3 28V12L20 2z" fill="#F97316" />
                <path d="M20 10l4 6h-3v10h-2V16h-3l4-6z" fill="#0A2A48" />
              </svg>
            </span>
            <span className="bp-logo__text">
              BuildPro
              <span className="bp-logo__tagline">Built for a Better Tomorrow</span>
            </span>
          </a>

          <nav className="bp-nav__links" aria-label="Primary">
            <a href="/" className="bp-nav__link">Home</a>
            <a href="/about" className="bp-nav__link">About</a>
            <a href="/services" className="bp-nav__link is-active">Services</a>
            <a href="/#projects" className="bp-nav__link">Projects</a>
            <a href="#" className="bp-nav__link">Industries</a>
            <a href="#" className="bp-nav__link">Contact</a>
          </nav>

          <div className="bp-nav__actions">
            <button className="bp-icon-btn" aria-label="Search">
              <IconSearch width="18" height="18" />
            </button>
            <a href="#quote" className="bp-btn bp-btn--primary bp-btn--sm">
              Get a Quote
            </a>
            <button className="bp-menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <IconMenu width="24" height="24" />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------- Mobile menu -------------------------- */}
      <div className={`bp-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="bp-mobile-menu__header">
          <span className="bp-logo__text bp-logo__text--dark">BuildPro</span>
          <button className="bp-icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <IconClose width="22" height="22" />
          </button>
        </div>
        <nav className="bp-mobile-menu__links" aria-label="Mobile">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/services" className="is-active" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a href="#quote" className="bp-btn bp-btn--primary bp-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </a>
      </div>
      <button
        className={`bp-mobile-scrim ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      {/* ----------------------------- Page header ----------------------------- */}
      <section className="bp-page-header">
        <img className="bp-page-header__bg" src={HEADER_IMAGE} alt="Construction cranes at a building site" />
        <div className="bp-page-header__scrim" />
        <div className="bp-page-header__inner">
          <h1 className="bp-anim bp-anim--1">Our Services</h1>
          <nav className="bp-breadcrumb bp-anim bp-anim--2" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <IconChevronRight width="14" height="14" />
            <span>Services</span>
          </nav>
        </div>
      </section>

      {/* ------------------------------- Services -------------------------------- */}
      <section className="bp-offer">
        <div className="bp-container">
          <p className="bp-eyebrow">What We Offer</p>
          <h2>Comprehensive Construction & Engineering Services</h2>
          <p className="bp-offer__text">
            We provide a wide range of services to meet the diverse needs of our clients, from residential homes to
            large-scale industrial projects.
          </p>

          <div className="bp-offer__grid">
            {SERVICES.map(({ icon: Icon, title, text, image }) => (
              <div className="bp-offer-card" key={title}>
                <div className="bp-offer-card__image">
                  <img src={image} alt={title} />
                </div>
                <div className="bp-offer-card__body">
                  <span className="bp-offer-card__icon">
                    <Icon width="18" height="18" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <a href="#quote" className="bp-offer-card__arrow" aria-label={`Enquire about ${title}`}>
                    <IconArrowRight width="16" height="16" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------- CTA ---------------------------------- */}
      <section className="bp-cta" id="quote">
        <img className="bp-cta__bg" src={CTA_IMAGE} alt="Construction crane silhouetted at sunset" />
        <div className="bp-cta__scrim" />
        <div className="bp-container bp-cta__inner">
          <div>
            <h2>Need a Custom Solution?</h2>
            <p>We handle unique projects and specialized construction needs. Contact us today for a consultation.</p>
          </div>
          <a href="#quote-form" className="bp-btn bp-btn--primary bp-btn--icon">
            Get a Quote <IconArrowRight width="16" height="16" />
          </a>
        </div>
      </section>

      {/* --------------------------------- Footer -------------------------------- */}
      <footer className="bp-footer">
        <div className="bp-container bp-footer__grid">
          <div className="bp-footer__brand">
            <span className="bp-logo__mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 2l17 10v16L20 38 3 28V12L20 2z" fill="#F97316" />
                <path d="M20 10l4 6h-3v10h-2V16h-3l4-6z" fill="#0A2A48" />
              </svg>
            </span>
            <span className="bp-logo__text">
              BuildPro
              <span className="bp-logo__tagline">Built for a Better Tomorrow</span>
            </span>
          </div>

          <div className="bp-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="bp-footer__col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services">Building Construction</a></li>
              <li><a href="/services">Renovation & Remodeling</a></li>
              <li><a href="/services">Project Management</a></li>
              <li><a href="/services">Civil Engineering</a></li>
              <li><a href="/services">Architecture & Design</a></li>
            </ul>
          </div>

          <div className="bp-footer__col bp-footer__contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <IconPhone width="16" height="16" /> <span>+234 801 234 5678</span>
              </li>
              <li>
                <IconMail width="16" height="16" /> <span>info@buildpro.com</span>
              </li>
              <li>
                <IconPin width="16" height="16" /> <span>Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="bp-footer__social">
              <a href="#" aria-label="Facebook"><IconFacebook width="16" height="16" /></a>
              <a href="#" aria-label="X"><IconX width="16" height="16" /></a>
              <a href="#" aria-label="Instagram"><IconInstagram width="16" height="16" /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedin width="16" height="16" /></a>
            </div>
          </div>
        </div>

        <div className="bp-container bp-footer__bottom">
          <p>© 2025 BuildPro. All rights reserved.</p>
          <div className="bp-footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}