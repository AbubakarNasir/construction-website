import React, { useEffect, useState } from "react";
import "./contact.css";

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

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* contact detail icons */
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

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const CONTACT_DETAILS = [
  {
    icon: IconPin,
    title: "Our Location",
    lines: ["Plot 12, Admiralty Way,", "Lekki Phase 1, Lagos, Nigeria"],
  },
  {
    icon: IconPhone,
    title: "Phone",
    lines: ["+234 801 234 5678", "+234 900 345 6789"],
  },
  {
    icon: IconMail,
    title: "Email",
    lines: ["info@buildpro.com", "sales@buildpro.com"],
  },
  {
    icon: IconClock,
    title: "Working Hours",
    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat – Sun: 9:00 AM – 2:00 PM"],
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&w=1600&q=70";
const MAP_EMBED_SRC = "https://maps.google.com/maps?q=Lekki%20Phase%201%2C%20Lagos%2C%20Nigeria&z=14&output=embed";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your actual form endpoint / email service.
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

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
            <a href="/services" className="bp-nav__link">Services</a>
            <a href="/projects" className="bp-nav__link">Projects</a>
            <a href="#" className="bp-nav__link">Industries</a>
            <a href="/contact" className="bp-nav__link is-active">Contact</a>
          </nav>

          <div className="bp-nav__actions">
            <button className="bp-icon-btn" aria-label="Search">
              <IconSearch width="18" height="18" />
            </button>
            <a href="#message-form" className="bp-btn bp-btn--primary bp-btn--sm">
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
          <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="/contact" className="is-active" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a href="#message-form" className="bp-btn bp-btn--primary bp-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
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
        <img className="bp-page-header__bg" src={HEADER_IMAGE} alt="Construction workers reviewing plans on site" />
        <div className="bp-page-header__scrim" />
        <div className="bp-page-header__inner">
          <h1 className="bp-anim bp-anim--1">Contact Us</h1>
          <nav className="bp-breadcrumb bp-anim bp-anim--2" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <IconChevronRight width="14" height="14" />
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* --------------------------------- Content --------------------------------- */}
      <section className="bp-contact">
        <div className="bp-container bp-contact__grid">
          {/* ------------------------------- Get in touch ------------------------------- */}
          <div className="bp-touch">
            <h2>Get in Touch</h2>
            <p className="bp-touch__intro">
              We'd love to hear from you. Send us a message or reach out to us using the contact details below.
            </p>

            <ul className="bp-touch__list">
              {CONTACT_DETAILS.map(({ icon: Icon, title, lines }) => (
                <li key={title}>
                  <span className="bp-touch__icon">
                    <Icon width="18" height="18" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------------- Message form -------------------------------- */}
          <div className="bp-message" id="message-form">
            <h2>Send Us a Message</h2>

            {submitted && (
              <div className="bp-message__success" role="status">
                <IconCheck width="20" height="20" />
                <span>Thanks — your message has been sent. We'll get back to you soon.</span>
              </div>
            )}

            <form className="bp-form" onSubmit={handleSubmit}>
              <div className="bp-form__field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>

              <div className="bp-form__field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <div className="bp-form__field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
              </div>

              <div className="bp-form__field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                />
              </div>

              <button type="submit" className="bp-btn bp-btn--primary bp-form__submit bp-btn--icon">
                Send Message <IconArrowRight width="16" height="16" />
              </button>
            </form>
          </div>
        </div>

        {/* ----------------------------------- Map ----------------------------------- */}
        <div className="bp-container">
          <div className="bp-map">
            <iframe
              title="BuildPro location"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="bp-map__view-link"
              href="https://www.google.com/maps/search/?api=1&query=Lekki+Phase+1+Lagos+Nigeria"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps <IconArrowRight width="14" height="14" />
            </a>
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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
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