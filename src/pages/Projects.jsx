import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

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

const FILTER_TABS = ["All", "Residential", "Commercial", "Industrial", "Infrastructure"];

// Unsplash — free to use, no attribution required (Unsplash License)
const PROJECTS = [
  {
    title: "Luxury Residential Estate",
    location: "Lagos, Nigeria",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Office Complex",
    location: "Abuja, Nigeria",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1479293581560-aee98bb24f7f?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Shopping Mall",
    location: "Port Harcourt, Nigeria",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1741540421056-e44174273e1a?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Industrial Warehouse",
    location: "Lagos, Nigeria",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1669003153363-6d7ba8e20c7e?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Road Construction",
    location: "Abuja, Nigeria",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1757030689760-3ec8be7326ae?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Bridge Project",
    location: "Rivers State, Nigeria",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1719314073622-9399d167725b?auto=format&fit=crop&w=500&h=380&q=70",
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1767882280865-57723957a6ee?auto=format&fit=crop&w=1600&q=70";
const CTA_IMAGE = "https://images.unsplash.com/photo-1730363856885-6f21a0b3a4ca?auto=format&fit=crop&w=1600&q=70";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

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

  const visibleProjects = activeTab === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <div className="bp-page">
      {/* ----------------------------- Navbar ----------------------------- */}
      <header className={`bp-nav ${scrolled ? "bp-nav--scrolled" : ""}`}>
        <div className="bp-nav__inner">
          <Link to="/" className="bp-logo">
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
          </Link>

          <nav className="bp-nav__links" aria-label="Primary">
            <Link to="/" className="bp-nav__link">Home</Link>
            <Link to="/about" className="bp-nav__link">About</Link>
            <Link to="/services" className="bp-nav__link">Services</Link>
            <Link to="/projects" className="bp-nav__link is-active">Projects</Link>
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
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" className="is-active" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <Link to="/quote" className="bp-btn bp-btn--primary bp-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
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
        <img className="bp-page-header__bg" src={HEADER_IMAGE} alt="City skyline with a construction crane at sunset" />
        <div className="bp-page-header__scrim" />
        <div className="bp-page-header__inner">
          <h1 className="bp-anim bp-anim--1">Our Projects</h1>
          <nav className="bp-breadcrumb bp-anim bp-anim--2" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <IconChevronRight width="14" height="14" />
            <span>Projects</span>
          </nav>
        </div>
      </section>

      {/* ------------------------------- Projects -------------------------------- */}
      <section className="bp-showcase">
        <div className="bp-container">
          <div className="bp-tabs" role="tablist" aria-label="Filter projects">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`bp-tab ${activeTab === tab ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bp-showcase__grid">
            {visibleProjects.map((project) => (
              <a href="/projects" className="bp-project-card" key={project.title}>
                <div className="bp-project-card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="bp-project-card__body">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                  <span className="bp-project-card__arrow">
                    <IconArrowRight width="16" height="16" />
                  </span>
                </div>
              </a>
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
            <h2>Interested in Working With Us?</h2>
            <p>Let's bring your vision to life. Get in touch with our team for a free consultation.</p>
          </div>
          <Link to="/contact" className="bp-btn bp-btn--primary bp-btn--icon">
            Get a Quote <IconArrowRight width="16" height="16" />
          </Link>
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