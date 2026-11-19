import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Contact Us · Chamak Foundation (Chamak Padhai Se)",
  description:
    "Connect with Chamak Foundation NGO — registered office in Bommakal, Karimnagar, direct phone and WhatsApp hotline, email support, and educational sponsorship inquiries.",
};

const FAQS = [
  {
    q: "How are student scholarships verified and awarded?",
    a: "Every candidate undergoes direct school coordination and home visits by Chamak volunteers to verify genuine financial need, academic sincerity, and absence of alternative family support.",
  },
  {
    q: "Can I volunteer remotely, or do I need to be in Telangana?",
    a: "We welcome both! While ground volunteers help with rural libraries, book drives, and school visits in Telangana, remote mentors conduct virtual career counselling and guest lectures from anywhere.",
  },
  {
    q: "How can a rural village or school request a community library?",
    a: "Community elders, teachers, or local youth can reach out via our contact form or hotline. We partner with local schools and gram panchayats to provide curated book collections, racks, and reading spaces.",
  },
  {
    q: "Are receipts provided for donations and sponsorships?",
    a: "Yes. Official foundation receipts, itemized disbursement acknowledgments, and periodic student progress reports are shared directly with donors for complete transparency.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Connect & Collaborate."
        subtitle="Whether you wish to sponsor an underprivileged student, volunteer, set up a rural library, or explore corporate CSR partnerships — our team is here to assist you."
      />

      <section className="section" style={{ paddingTop: "60px", paddingBottom: "90px" }}>
        <div className="container">
          {/* Top 3 Quick Touchpoint Cards */}
          <div className="contact-quick-grid">
            {/* Card 1: Direct Hotline */}
            <div className="contact-quick-card">
              <div className="contact-quick-card__icon">
                <Phone size={24} />
              </div>
              <div className="contact-quick-card__title">Direct Hotline &amp; WhatsApp</div>
              <div className="contact-quick-card__value">
                <a href="tel:+919491638052" style={{ color: "inherit", textDecoration: "none" }}>
                  +91 94916 38052
                </a>
              </div>
              <div className="contact-quick-card__subtext">
                Available Monday to Saturday from 9:00 AM to 6:00 PM IST for urgent inquiries.
              </div>
              <a
                href="https://wa.me/919491638052?text=Hello%20Chamak%20Foundation,%20I%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-card__action"
              >
                Chat on WhatsApp <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 2: Official Email */}
            <div className="contact-quick-card">
              <div className="contact-quick-card__icon">
                <Mail size={24} />
              </div>
              <div className="contact-quick-card__title">Official Email Desk</div>
              <div className="contact-quick-card__value" style={{ fontSize: "1.1rem", wordBreak: "break-word" }}>
                <a href="mailto:chamakfoundation23@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                  chamakfoundation23@gmail.com
                </a>
              </div>
              <div className="contact-quick-card__subtext">
                For sponsorship proposals, official communications, receipts, and partnerships.
              </div>
              <a href="mailto:chamakfoundation23@gmail.com" className="contact-quick-card__action">
                Send an Email <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 3: Registered Office */}
            <div className="contact-quick-card">
              <div className="contact-quick-card__icon">
                <MapPin size={24} />
              </div>
              <div className="contact-quick-card__title">Registered Office</div>
              <div className="contact-quick-card__value">Bommakal, Karimnagar</div>
              <div className="contact-quick-card__subtext">
                PIN: 505001, Telangana, India. Community coordination and rural center.
              </div>
              <a
                href="https://maps.google.com/?q=Bommakal,+Karimnagar,+Telangana+505001"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-card__action"
              >
                Get Directions <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Main 2-Column Grid: Form (Left) & Credibility/Details (Right) */}
          <div className="contact-main-grid">
            {/* Left: Interactive Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Organization Details & Location */}
            <div>
              {/* Card 1: Official NGO Information */}
              <div className="contact-sidebar-card">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--gold-600)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                  }}
                >
                  <Sparkles size={13} /> Official Foundation Information
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.35rem",
                    color: "var(--navy-900)",
                    margin: "0 0 16px",
                  }}
                >
                  Chamak Foundation
                </h3>
                <p
                  style={{
                    color: "var(--ink-600)",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    marginBottom: "20px",
                  }}
                >
                  Chamak Foundation (Chamak Padhai Se) is a registered non-profit educational society dedicated to transforming the lives of rural, tribal, and disadvantaged students through scholarships, mentorship, and community libraries.
                </p>

                <div className="info-row" style={{ padding: "14px 0" }}>
                  <div className="info-row__icon" style={{ width: 36, height: 36, borderRadius: 9 }}>
                    <MapPin size={17} />
                  </div>
                  <div>
                    <h4>Office Address</h4>
                    <p style={{ fontSize: "0.92rem" }}>Bommakal, Karimnagar, 505001, Telangana, India</p>
                  </div>
                </div>

                <div className="info-row" style={{ padding: "14px 0" }}>
                  <div className="info-row__icon" style={{ width: 36, height: 36, borderRadius: 9 }}>
                    <Clock size={17} />
                  </div>
                  <div>
                    <h4>Operating Hours</h4>
                    <p style={{ fontSize: "0.92rem" }}>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <div className="info-row" style={{ padding: "14px 0" }}>
                  <div className="info-row__icon" style={{ width: 36, height: 36, borderRadius: 9 }}>
                    <Globe size={17} />
                  </div>
                  <div>
                    <h4>Official Portal</h4>
                    <p style={{ fontSize: "0.92rem" }}>www.chamakfoundation.org</p>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "14px 16px",
                    background: "rgba(217, 175, 82, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(217, 175, 82, 0.25)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <ShieldCheck size={18} style={{ color: "var(--gold-700)", flexShrink: 0, marginTop: "2px" }} />
                  <div style={{ fontSize: "0.82rem", color: "var(--navy-900)", lineHeight: 1.5 }}>
                    <strong>100% Volunteer Driven:</strong> All public contributions directly fund student tuition, books, uniform kits, and library infrastructure.
                  </div>
                </div>
              </div>

              {/* Card 2: Interactive Location Map Card */}
              <div className="contact-sidebar-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", margin: 0, color: "var(--navy-900)" }}>
                    Our Location
                  </h4>
                  <a
                    href="https://maps.google.com/?q=Bommakal,+Karimnagar,+Telangana+505001"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--gold-700)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Google Maps <ExternalLink size={13} />
                  </a>
                </div>

                <div className="contact-map-wrapper">
                  <iframe
                    title="Chamak Foundation Location - Bommakal, Karimnagar"
                    src="https://maps.google.com/maps?q=Bommakal,%20Karimnagar,%20Telangana%20505001&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <p style={{ fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "12px", marginBottom: 0, lineHeight: 1.5 }}>
                  📍 Bommakal, Karimnagar, Telangana — Visitors and prospective volunteers are welcome during operating hours.
                </p>
              </div>

              {/* Card 3: Social Channels */}
              <div className="contact-sidebar-card">
                <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", margin: "0 0 8px", color: "var(--navy-900)" }}>
                  Follow Our Groundwork
                </h4>
                <p style={{ fontSize: "0.86rem", color: "var(--ink-500)", margin: "0 0 18px", lineHeight: 1.5 }}>
                  See our daily field activities, rural library inaugurations, and student success stories across social platforms:
                </p>

                <div className="social-row" style={{ marginTop: 0 }}>
                  <a
                    href="https://www.facebook.com/share/19rtbxWdR2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/chamakfoundation?exln=Z29va2p2Z2dmOXRn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/chamakNGO"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    title="X (Twitter)"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chamak-foundation-a6772a293"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
                      <path
                        d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@chamakfoundation?si=MH40n1P04JzHOGYM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M11 10l4 2-4 2v-4z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom FAQ Section */}
          <div style={{ marginTop: "72px" }}>
            <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 36px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "rgba(217, 175, 82, 0.12)",
                  color: "var(--gold-700)",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                <HelpCircle size={14} /> Frequently Asked Questions
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(1.5rem, 2.3vw, 2.1rem)",
                  color: "var(--navy-900)",
                  margin: "0 0 10px",
                }}
              >
                Quick Answers to Common Queries
              </h3>
              <p style={{ color: "var(--ink-500)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                Find clear answers about how we manage student aid, voluntary partnerships, and community interventions.
              </p>
            </div>

            <div className="contact-faq-grid">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="contact-faq-card">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div
              style={{
                marginTop: "48px",
                textAlign: "center",
                padding: "36px 28px",
                background: "linear-gradient(135deg, #0b1b38 0%, #162a52 100%)",
                borderRadius: "20px",
                color: "#ffffff",
                border: "1px solid rgba(217, 175, 82, 0.3)",
              }}
            >
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "#ffffff", margin: "0 0 8px" }}>
                Ready to make a difference with us?
              </h4>
              <p style={{ color: "rgba(250,247,239,0.8)", fontSize: "0.95rem", margin: "0 0 20px" }}>
                Join our volunteer network or sponsor an aspiring scholar today.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/get-involved" className="btn btn-gold" style={{ padding: "12px 28px" }}>
                  Get Involved Today <ArrowRight size={15} style={{ marginLeft: "4px" }} />
                </Link>
                <Link href="/programmes" className="btn btn-outline-light" style={{ padding: "12px 24px" }}>
                  Explore Our Programmes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
