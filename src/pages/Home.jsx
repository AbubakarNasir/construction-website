import React, { useEffect, useState } from "react";
import "./home.css";
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

/* feature icons */
const IconBox = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 8l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 8v8l9 4 9-4V8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 12v8" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconUser = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 20c1.2-3.5 4-5.5 7-5.5s5.8 2 7 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
    <path
      d="M11 13l3-3 6 6-3 3-6-6z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
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

const NAV_LINKS = ["Home", "About", "Services", "Projects", "Industries", "Contact"];

const FEATURES = [
  { icon: IconBox, title: "Quality Construction", text: "Built to last with premium materials." },
  { icon: IconClock, title: "On-Time Delivery", text: "We respect your time and deadlines." },
  { icon: IconUser, title: "Expert Team", text: "Skilled professionals at your service." },
  { icon: IconShield, title: "Safety First", text: "Zero compromise on safety standards." },
];

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
];

const SERVICES = [
  { icon: IconBuilding, title: "Building Construction", text: "Residential, commercial and industrial buildings." },
  { icon: IconRenovate, title: "Renovation & Remodeling", text: "Modernize and upgrade your spaces." },
  { icon: IconGear, title: "Project Management", text: "Efficient planning and execution." },
  { icon: IconBridge, title: "Civil Engineering", text: "Infrastructure and site development." },
  { icon: IconBlueprint, title: "Architecture & Design", text: "Functional and aesthetic design solutions." },
];

// Unsplash — free to use, no attribution required (Unsplash License)
const PROJECTS = [
  {
    title: "Luxury Residential Estate",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1755735340764-3b077cab0c5c?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Office Complex",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1479293581560-aee98bb24f7f?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Shopping Mall",
    location: "Port Harcourt, Nigeria",
    image: "https://images.unsplash.com/photo-1741540421056-e44174273e1a?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "Industrial Warehouse",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1669003153363-6d7ba8e20c7e?auto=format&fit=crop&w=500&h=380&q=70",
  },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1600&q=70";
const ABOUT_IMAGE = "https://images.unsplash.com/photo-1565347878219-552c839f1447?auto=format&fit=crop&w=900&h=650&q=70";
const CTA_IMAGE = "https://images.unsplash.com/photo-1730363856885-6f21a0b3a4ca?auto=format&fit=crop&w=1600&q=70";

/* -------------------------------- Component -------------------------------- */

export default function Home() {
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
            <Link to="/" className="bp-nav__link is-active">Home</Link>
            <Link to="/about" className="bp-nav__link">About</Link>
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
          <Link to="/" className="is-active" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
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

      {/* --------------------------------- Hero --------------------------------- */}
      <section className="bp-hero">
        <img className="bp-hero__bg" src={HERO_IMAGE} alt="Construction workers reviewing plans on site" />
        <div className="bp-hero__scrim" />
        <div className="bp-hero__inner">
          <p className="bp-hero__eyebrow bp-anim bp-anim--1">CONSTRUCTION &nbsp;•&nbsp; ENGINEERING &nbsp;•&nbsp; REAL ESTATE DEVELOPMENT</p>
          <h1 className="bp-hero__title bp-anim bp-anim--2">
            Building Sustainable Spaces for a Better <span className="bp-hero__accent">Tomorrow</span>
          </h1>
          <p className="bp-hero__text bp-anim bp-anim--3">
            We deliver high-quality construction, engineering and project management services for residential,
            commercial and industrial clients across Nigeria and beyond.
          </p>
          <div className="bp-hero__actions bp-anim bp-anim--4">
            <a href="#quote" className="bp-btn bp-btn--primary">
              Get a Free Quote
            </a>
            <a href="#projects" className="bp-btn bp-btn--outline">
              Our Projects <IconArrowRight width="16" height="16" />
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------- Features ------------------------------- */}
      <section className="bp-features">
        <div className="bp-container bp-features__grid">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div className="bp-feature" key={title}>
              <span className="bp-feature__icon">
                <Icon width="22" height="22" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------- About --------------------------------- */}
      <section className="bp-about">
        <div className="bp-container bp-about__grid">
          <div className="bp-about__content">
            <p className="bp-eyebrow">About BuildPro</p>
            <h2>Trusted Construction Partner in Nigeria</h2>
            <p className="bp-about__text">
              BuildPro is a leading construction and engineering company dedicated to delivering innovative,
              sustainable and cost-effective solutions. We specialize in residential, commercial and industrial
              projects, with a commitment to quality, safety and client satisfaction.
            </p>
            <a href="#about" className="bp-btn bp-btn--primary bp-btn--icon">
              Learn More About Us <IconArrowRight width="16" height="16" />
            </a>
          </div>
          <div className="bp-about__image">
            <img src={ABOUT_IMAGE} alt="Modern glass office building" />
            <div className="bp-about__stats">
              {STATS.map((stat) => (
                <div className="bp-about__stat" key={stat.label}>
                  <span className="bp-about__stat-value">{stat.value}</span>
                  <span className="bp-about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- Services -------------------------------- */}
      <section className="bp-services" id="services">
        <div className="bp-container">
          <div className="bp-services__head">
            <div>
              <p className="bp-eyebrow">Our Services</p>
              <h2>Comprehensive Construction Solutions</h2>
              <p className="bp-services__text">
                From concept to completion, we provide end-to-end construction and engineering services tailored to
                your needs.
              </p>
            </div>
            <a href="#services" className="bp-link-arrow bp-services__view-all">
              View All Services <IconArrowRight width="14" height="14" />
            </a>
          </div>

          <div className="bp-services__grid">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div className="bp-service-card" key={title}>
                <span className="bp-service-card__icon">
                  <Icon width="20" height="20" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- Projects -------------------------------- */}
      <section className="bp-projects" id="projects">
        <div className="bp-container">
          <div className="bp-projects__head">
            <div>
              <h2>Our Latest Projects</h2>
              <p>Turning ideas into reality, one project at a time.</p>
            </div>
            <a href="#projects" className="bp-link-arrow bp-link-arrow--light">
              View All Projects <IconArrowRight width="14" height="14" />
            </a>
          </div>

          <div className="bp-projects__grid">
            {PROJECTS.map((project) => (
              <a href="#projects" className="bp-project-card" key={project.title}>
                <div className="bp-project-card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="bp-project-card__body">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                  <IconArrowRight className="bp-project-card__arrow" width="16" height="16" />
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
            <h2>Have a Project in Mind?</h2>
            <p>Let's build it together. Get in touch with our team for a free consultation and quote.</p>
          </div>
          <Link to="/contact" className="bp-btn bp-btn--primary bp-btn--icon">
            Get a Free Quote <IconArrowRight width="16" height="16" />
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