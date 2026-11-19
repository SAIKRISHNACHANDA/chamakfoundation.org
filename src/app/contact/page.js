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
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Contact Us · Chamak Foundation (Chamak Padhai Se)",
  description:
    "Connect with Chamak Foundation NGO — registered office in Bommakal, Karimnagar, direct phone and WhatsApp hotline, email support, and educational sponsorship inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Create More Chamaks."
      />

      <section className="section" style={{ paddingTop: "60px", paddingBottom: "90px" }}>
        <div className="container">
          {/* Top 3 Quick Touchpoint Cards */}
          <div className="contact-quick-grid" style={{ marginBottom: "48px" }}>
            {/* Card 1: WhatsApp Direct Desk */}
            <div className="contact-quick-card">
              <div className="contact-quick-card__icon">
                <Phone size={24} />
              </div>
              <div className="contact-quick-card__title">WhatsApp Direct Desk</div>
              <div className="contact-quick-card__value">+91 94916 38052</div>
              <div className="contact-quick-card__subtext">
                Direct phone and WhatsApp helpline for urgent queries, donors, and student verification.
              </div>
              <a
                href="https://wa.me/919491638052?text=Hello%20Chamak%20Foundation,%20I%20would%20like%20to%20connect%20regarding%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-card__action"
              >
                Chat on WhatsApp <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 2: Official Email Desk */}
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

          {/* Main 2-Column Grid: Form (Left) & Unified Secretariat Details (Right) */}
          <div className="contact-main-grid">
            {/* Left: Interactive Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Unified Organization Details & Channels (Balanced Height) */}
            <div>
              <div className="contact-sidebar-card" style={{ marginBottom: 0 }}>
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
                    margin: "0 0 12px",
                  }}
                >
                  Chamak Foundation
                </h3>
                <p
                  style={{
                    color: "var(--ink-600)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    marginBottom: "18px",
                  }}
                >
                  Chamak Foundation (Chamak Padhai Se) is a registered non-profit educational society dedicated to transforming the lives of rural, tribal, and disadvantaged students through scholarships, mentorship, and community libraries.
                </p>

                <div className="info-row" style={{ padding: "12px 0" }}>
                  <div className="info-row__icon" style={{ width: 34, height: 34, borderRadius: 8 }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4>Office Address</h4>
                    <p style={{ fontSize: "0.9rem" }}>Bommakal, Karimnagar, 505001, Telangana, India</p>
                  </div>
                </div>

                <div className="info-row" style={{ padding: "12px 0" }}>
                  <div className="info-row__icon" style={{ width: 34, height: 34, borderRadius: 8 }}>
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4>Operating Hours</h4>
                    <p style={{ fontSize: "0.9rem" }}>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <div className="info-row" style={{ padding: "12px 0" }}>
                  <div className="info-row__icon" style={{ width: 34, height: 34, borderRadius: 8 }}>
                    <Globe size={16} />
                  </div>
                  <div>
                    <h4>Official Portal</h4>
                    <p style={{ fontSize: "0.9rem" }}>www.chamakfoundation.org</p>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "16px",
                    marginBottom: "20px",
                    padding: "12px 14px",
                    background: "rgba(217, 175, 82, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(217, 175, 82, 0.25)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <ShieldCheck size={18} style={{ color: "var(--gold-700)", flexShrink: 0, marginTop: "2px" }} />
                  <div style={{ fontSize: "0.82rem", color: "var(--navy-900)", lineHeight: 1.45 }}>
                    <strong>100% Volunteer Driven:</strong> All public contributions directly fund student tuition, books, uniform kits, and library infrastructure.
                  </div>
                </div>

                {/* Follow Our Groundwork (Social Channels) */}
                <div style={{ borderTop: "1px solid rgba(11, 27, 56, 0.08)", paddingTop: "16px" }}>
                  <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "10px" }}>
                    Follow Our Groundwork
                  </div>
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
          </div>

          {/* Interactive Location & Directions Card */}
          <div
            style={{
              marginTop: "40px",
              background: "#ffffff",
              borderRadius: "20px",
              padding: "clamp(24px, 3.5vw, 36px)",
              border: "1px solid rgba(11, 27, 56, 0.1)",
              boxShadow: "0 10px 30px rgba(11, 27, 56, 0.05)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "28px",
                alignItems: "center",
              }}
            >
              <div>
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
                  <MapPin size={14} /> Groundwork Coordination Center
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
                    color: "var(--navy-900)",
                    margin: "0 0 12px",
                  }}
                >
                  Visit Us in Karimnagar
                </h3>
                <p style={{ color: "var(--ink-600)", fontSize: "0.92rem", lineHeight: 1.65, margin: "0 0 18px" }}>
                  Our registered office and field operations hub is based at Bommakal, Karimnagar. Visitors, prospective student sponsors, and volunteers are welcome during operating hours (Mon–Sat, 9:00 AM – 6:00 PM IST).
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href="https://maps.google.com/?q=Bommakal,+Karimnagar,+Telangana+505001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px" }}
                  >
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                  <span style={{ fontSize: "0.85rem", color: "var(--ink-500)", fontWeight: 500 }}>
                    PIN: 505001, Telangana, India
                  </span>
                </div>
              </div>

              <div className="contact-map-wrapper" style={{ height: "260px", margin: 0 }}>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
