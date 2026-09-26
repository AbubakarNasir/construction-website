import React, { useEffect, useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";

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

/* core values icons */
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGearStar = (props) => (
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

const IconTeam = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="8.5" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="15.5" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 19c.8-2.7 2.6-4.2 5-4.2s4.2 1.5 5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10.5 19c.8-2.7 2.6-4.2 5-4.2s4.2 1.5 5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconLeafShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M9.5 13c0-2.5 1.5-4 4.5-4.3-.3 3-1.8 4.5-4.3 4.5-.1 0-.2 0-.2-.2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
];

const CORE_VALUES = [
  { icon: IconShield, title: "Integrity", text: "We do what is right, always." },
  { icon: IconGearStar, title: "Excellence", text: "We strive for the highest standards." },
  { icon: IconTeam, title: "Teamwork", text: "We build success together." },
  { icon: IconLeafShield, title: "Sustainability", text: "We create lasting value for future generations." },
];

// Unsplash — free to use, no attribution required (Unsplash License)
const HEADER_IMAGE = "https://images.unsplash.com/photo-1730363856885-6f21a0b3a4ca?auto=format&fit=crop&w=1600&q=70";
const STORY_IMAGE = "https://images.unsplash.com/photo-1479293581560-aee98bb24f7f?auto=format&fit=crop&w=900&h=650&q=70";
const MISSION_IMAGE = "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=900&h=560&q=70";

export default function About() {
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
            <Link to="/" className="bp-nav__link">Home</Link>
            <Link to="/about" className="bp-nav__link is-active">About</Link>
            <Link to="/services" className="bp-nav__link">Services</Link>
            <Link to="/projects" className="bp-nav__link">Projects</Link>
            <Link to="/contact" className="bp-nav__link">Contact</Link>
          </nav>

          <div className="bp-nav__actions">
            <button className="bp-icon-btn" aria-label="Search">
              <IconSearch width="18" height="18" />
            </button>
            <Link to="/contact" className="bp-btn bp-btn--primary bp-btn--sm">
              Get a Quote
            </Link>
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
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="is-active" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <Link to="#quote" className="bp-btn bp-btn--primary bp-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </Link>
      </div>
      <button
        className={`bp-mobile-scrim ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      {/* ----------------------------- Page header ----------------------------- */}
      <section className="bp-page-header">
        <img className="bp-page-header__bg" src={HEADER_IMAGE} alt="Construction crane at a building site" />
        <div className="bp-page-header__scrim" />
        <div className="bp-page-header__inner">
          <h1 className="bp-anim bp-anim--1">About Us</h1>
          <nav className="bp-breadcrumb bp-anim bp-anim--2" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <IconChevronRight width="14" height="14" />
            <span>About</span>
          </nav>
        </div>
      </section>

      {/* --------------------------------- Story --------------------------------- */}
      <section className="bp-story">
        <div className="bp-container bp-story__grid">
          <div className="bp-story__content">
            <p className="bp-eyebrow">Our Story</p>
            <h2>Building Trust Through Quality and Innovation</h2>
            <p className="bp-story__text">
              BuildPro was founded with a simple vision — to redefine construction by delivering excellence, creating
              value and building a sustainable future. Over the years, we have grown into a trusted partner for
              individuals, businesses and government organizations across Nigeria.
            </p>
            <Link to="/#services" className="bp-btn bp-btn--primary bp-btn--icon">
              Learn More About Us <IconArrowRight width="16" height="16" />
            </Link>
          </div>
          <div className="bp-story__image">
            <img src={STORY_IMAGE} alt="Modern glass office building" />
            <div className="bp-story__stats">
              {STATS.map((stat) => (
                <div className="bp-story__stat" key={stat.label}>
                  <span className="bp-story__stat-value">{stat.value}</span>
                  <span className="bp-story__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- Core Values ----------------------------- */}
      <section className="bp-values">
        <div className="bp-container">
          <h2>Our Core Values</h2>
          <div className="bp-values__grid">
            {CORE_VALUES.map(({ icon: Icon, title, text }) => (
              <div className="bp-value-card" key={title}>
                <span className="bp-value-card__icon">
                  <Icon width="20" height="20" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- Mission & Vision --------------------------- */}
      <section className="bp-mission">
        <div className="bp-container bp-mission__grid">
          <div className="bp-mission__image">
            <img src={MISSION_IMAGE} alt="Construction workers reviewing plans on site" />
          </div>
          <div className="bp-mission__content">
            <h2>Our Mission & Vision</h2>

            <div className="bp-mission__item">
              <span className="bp-mission__icon">
                <IconPin width="16" height="16" />
              </span>
              <div>
                <h3>Mission</h3>
                <p>
                  To deliver exceptional construction and engineering solutions that exceed client expectations and
                  contribute to sustainable development.
                </p>
              </div>
            </div>

            <div className="bp-mission__item">
              <span className="bp-mission__icon">
                <IconPin width="16" height="16" />
              </span>
              <div>
                <h3>Vision</h3>
                <p>To be the leading construction company in Africa, known for quality, innovation and reliability.</p>
              </div>
            </div>
          </div>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="bp-footer__col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services/building-construction">Building Construction</Link></li>
              <li><Link to="/services/renovation-remodeling">Renovation & Remodeling</Link></li>
              <li><Link to="/services/project-management">Project Management</Link></li>
              <li><Link to="/services/civil-engineering">Civil Engineering</Link></li>
              <li><Link to="/services/architecture-design">Architecture & Design</Link></li>
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