import PageHero from "@/components/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
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

          {/* Interactive Location & Directions Card */}
          <div
            style={{
              marginTop: "0",
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
